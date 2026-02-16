#!/usr/bin/env python3
"""Import a markdown post, regenerate blog data, and optionally commit/push."""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path

from generate_blog_posts import parse_frontmatter, slugify

ROOT = Path(__file__).resolve().parents[1]
POSTS_DIR = ROOT / "content" / "posts"
GENERATE_SCRIPT = ROOT / "scripts" / "generate_blog_posts.py"
GENERATED_DATA = ROOT / "data" / "blogPosts.ts"


def run(cmd: list[str], *, check: bool = True) -> None:
    print(f"$ {' '.join(cmd)}", flush=True)
    subprocess.run(cmd, cwd=ROOT, check=check)


def parse_source(path: Path) -> tuple[str, str]:
    raw = path.read_text(encoding="utf-8")
    frontmatter, _ = parse_frontmatter(raw, path)

    title = frontmatter.get("title", "").strip()
    date = frontmatter.get("date", "").strip()

    if not title:
        raise ValueError(f"{path}: frontmatter requires a title")
    if not date:
        raise ValueError(f"{path}: frontmatter requires a date (YYYY-MM-DD)")

    return title, date


def main() -> int:
    parser = argparse.ArgumentParser(description="Publish a markdown post into this site")
    parser.add_argument("source", help="Path to markdown file with frontmatter")
    parser.add_argument("--commit", action="store_true", help="Commit the post and generated data")
    parser.add_argument("--push", action="store_true", help="Push commit to origin/main (implies --commit)")
    parser.add_argument(
        "--message",
        default=None,
        help="Custom commit message. Defaults to 'Add post: <title>'",
    )

    args = parser.parse_args()

    source = Path(args.source).expanduser().resolve()
    if not source.exists():
        print(f"Error: file does not exist: {source}", file=sys.stderr)
        return 1

    if source.suffix.lower() != ".md":
        print("Error: source file must be a .md file", file=sys.stderr)
        return 1

    try:
        title, date = parse_source(source)
    except Exception as exc:  # noqa: BLE001
        print(f"Error: {exc}", file=sys.stderr)
        return 1

    POSTS_DIR.mkdir(parents=True, exist_ok=True)
    destination_name = f"{date}-{slugify(title)}.md"
    destination = POSTS_DIR / destination_name

    destination.write_text(source.read_text(encoding="utf-8"), encoding="utf-8")
    print(f"Copied post to {destination}", flush=True)

    try:
        run([sys.executable, str(GENERATE_SCRIPT)])
    except subprocess.CalledProcessError as exc:
        print(f"Error: failed to regenerate blog data ({exc.returncode}).", file=sys.stderr)
        return exc.returncode or 1

    if args.push:
        args.commit = True

    did_commit = False
    if args.commit:
        commit_message = args.message or f"Add post: {title}"
        try:
            run(["git", "add", str(destination), str(GENERATED_DATA)])
            staged_diff = subprocess.run(["git", "diff", "--cached", "--quiet"], cwd=ROOT, check=False)
            if staged_diff.returncode == 0:
                print("No staged changes detected; skipping commit.", flush=True)
            else:
                run(["git", "commit", "-m", commit_message])
                did_commit = True
        except subprocess.CalledProcessError as exc:
            print(f"Error: git command failed ({exc.returncode}) while committing.", file=sys.stderr)
            return exc.returncode or 1

    if args.push:
        if args.commit and not did_commit:
            print("Skipping push because no new commit was created.", flush=True)
            print("Done.", flush=True)
            return 0
        try:
            run(["git", "push", "origin", "main"])
        except subprocess.CalledProcessError as exc:
            print(f"Error: git push failed ({exc.returncode}).", file=sys.stderr)
            return exc.returncode or 1

    print("Done.", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
