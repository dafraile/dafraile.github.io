#!/usr/bin/env python3
"""Generate data/blogPosts.ts from content/posts markdown files."""

from __future__ import annotations

import json
import re
import sys
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
POSTS_DIR = ROOT / "content" / "posts"
OUTPUT_FILE = ROOT / "data" / "blogPosts.ts"

FRONTMATTER_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n?(.*)$", re.DOTALL)


@dataclass
class ParsedPost:
    post_id: str
    title: str
    date: str
    summary: str
    content: list[str]
    tags: list[str]
    external_link: str | None


class PostParseError(Exception):
    pass


def slugify(value: str) -> str:
    slug = value.strip().lower()
    slug = re.sub(r"[^a-z0-9\s-]", "", slug)
    slug = re.sub(r"[\s_-]+", "-", slug)
    return slug.strip("-")


def parse_frontmatter(raw_text: str, source: Path) -> tuple[dict[str, str], str]:
    match = FRONTMATTER_RE.match(raw_text)
    if not match:
        raise PostParseError(f"{source}: missing or malformed frontmatter block")

    frontmatter_text, body = match.groups()
    frontmatter: dict[str, str] = {}

    for line in frontmatter_text.splitlines():
        stripped = line.strip()
        if not stripped or stripped.startswith("#"):
            continue
        if ":" not in stripped:
            raise PostParseError(f"{source}: invalid frontmatter line '{line}'")

        key, value = stripped.split(":", 1)
        frontmatter[key.strip().lower()] = value.strip()

    return frontmatter, body.strip()


def normalize_paragraph(paragraph: str) -> str:
    lines = [line.strip() for line in paragraph.splitlines() if line.strip()]
    cleaned: list[str] = []
    for line in lines:
        cleaned.append(re.sub(r"^#{1,6}\s*", "", line))

    text = " ".join(cleaned)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def is_image_block(block: str) -> bool:
    stripped = block.strip()
    return bool(re.fullmatch(r"!\[[^\]]*\]\([^)]+\)", stripped))


def is_list_block(block: str) -> bool:
    lines = [line.strip() for line in block.splitlines() if line.strip()]
    return bool(lines) and all(line.startswith("- ") for line in lines)


def is_table_block(block: str) -> bool:
    lines = [line.strip() for line in block.splitlines() if line.strip()]
    if len(lines) < 2:
        return False
    if not all(line.startswith("|") and line.endswith("|") for line in lines[:2]):
        return False

    separator_cells = [cell.strip() for cell in lines[1].strip("|").split("|")]
    return all(re.fullmatch(r":?-{3,}:?", cell) for cell in separator_cells)


def normalize_content_block(block: str) -> str:
    stripped = block.strip()
    if is_image_block(stripped) or is_list_block(stripped) or is_table_block(stripped):
        return "\n".join(line.rstrip() for line in stripped.splitlines())
    return normalize_paragraph(stripped)


def parse_post(source: Path) -> ParsedPost:
    raw = source.read_text(encoding="utf-8")
    frontmatter, body = parse_frontmatter(raw, source)

    required_fields = ["title", "date", "summary", "tags"]
    missing = [field for field in required_fields if not frontmatter.get(field)]
    if missing:
        raise PostParseError(f"{source}: missing required fields: {', '.join(missing)}")

    date_value = frontmatter["date"]
    try:
        datetime.strptime(date_value, "%Y-%m-%d")
    except ValueError as exc:
        raise PostParseError(f"{source}: invalid date '{date_value}', expected YYYY-MM-DD") from exc

    paragraphs = [
        normalize_content_block(part)
        for part in re.split(r"\n\s*\n", body)
        if part.strip()
    ]

    if not paragraphs:
        raise PostParseError(f"{source}: body content is empty")

    tags = [tag.strip() for tag in frontmatter["tags"].split(",") if tag.strip()]
    if not tags:
        raise PostParseError(f"{source}: tags must include at least one entry")

    filename_stem = source.stem
    inferred_slug = slugify(frontmatter["title"])
    post_id = filename_stem if filename_stem else inferred_slug

    external_link = frontmatter.get("external_link") or None

    return ParsedPost(
        post_id=post_id,
        title=frontmatter["title"],
        date=date_value,
        summary=frontmatter["summary"],
        content=paragraphs,
        tags=tags,
        external_link=external_link,
    )


def post_sort_key(post: ParsedPost) -> tuple[datetime, str]:
    return datetime.strptime(post.date, "%Y-%m-%d"), post.title.lower()


def generate() -> None:
    POSTS_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)

    markdown_files = sorted(POSTS_DIR.glob("*.md"))
    parsed_posts = [parse_post(path) for path in markdown_files]
    parsed_posts.sort(key=post_sort_key, reverse=True)

    payload = []
    for post in parsed_posts:
        item = {
            "id": post.post_id,
            "title": post.title,
            "date": post.date,
            "summary": post.summary,
            "content": post.content,
            "tags": post.tags,
        }
        if post.external_link:
            item["externalLink"] = post.external_link
        payload.append(item)

    content = (
        "import { BlogPost } from '../types';\n\n"
        "// This file is auto-generated by scripts/generate_blog_posts.py\n"
        f"export const BLOG_POSTS: BlogPost[] = {json.dumps(payload, indent=2, ensure_ascii=False)};\n"
    )
    OUTPUT_FILE.write_text(content, encoding="utf-8")

    print(f"Generated {OUTPUT_FILE} from {len(payload)} post(s).")


if __name__ == "__main__":
    try:
        generate()
    except PostParseError as exc:
        print(f"Error: {exc}", file=sys.stderr)
        raise SystemExit(1)
