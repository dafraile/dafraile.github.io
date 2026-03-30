---
title: A Quick Recheck of MIRAGE on Birds
date: 2026-03-30
summary: A birds-only probe suggests that MIRAGE bird hallucination rates are much weaker under a strict no-prompt setup and rise sharply under the repo's own scaffolds.
tags: LLMs, Evaluation, Research Methods
---
I have been looking through the MIRAGE repository and paper with a narrow question in mind: if you take the `phantom_0` bird questions exactly as written, provide no image, and add no extra scaffolding, do current frontier models really hallucinate visual bird content at the near-ceiling rates suggested by the paper's Figure 1?

My short answer is no, not in the small probe I ran. This is not an argument that mirage effects are fake. I think there is a real missing-image failure mode here. But the bird slice looks much more heterogeneous under a strict no-prompt setup than the headline figure suggests, and the repo itself contains prompt conditions that can strongly amplify the effect.

I started with birds because that row in Figure 1 is unusually high across many models, which felt surprising for what the paper describes as a very simple setup: no image provided, and no extra system or user prompt. When I inspected the raw `biology_birds` prompts in `phantom_0`, they turned out to be plain image-presupposing questions such as "Identify the bird species in this photograph," "Is the bird shown in flight or perched," and "Are there any distinct wing bars visible?" There is no roleplay, no expert framing, and no special attachment metadata in the dataset itself.

Before running all the models, I ran a small causal check on three models: `gpt-4.1`, `gpt-5.1`, and `claude-sonnet-4-6`. I used the same 10 bird questions under three conditions: raw `no_prompt`, the repo's Phantom-0 system prompt, and the repo's attachment-style prefix `number of image attachments: 1`. I then manually coded explicit visual fabrication, meaning cases where the model clearly claimed to see content in the nonexistent image.

The result was sharp. Under `no_prompt`, all three models were at `0/10` explicit fabrications. Under the repo's system prompt, the counts jumped to `7/10` for `gpt-4.1`, `3/10` for `gpt-5.1`, and `10/10` for `claude-sonnet-4-6`. Under the attachment prefix, they were `3/10`, `6/10`, and `7/10`. That means the same 10 bird questions can produce zero explicit fabrications under a strict no-prompt setup, then jump sharply once you add repo-provided multimodal scaffolding. At least on birds, the scaffold is not just formatting the task. It is changing the behavior being measured.

For completeness, I then ran the 10 bird questions in a strict no-prompt condition across the broader Figure 1 style lineup: `gpt-4.1`, `gpt-5`, `gpt-5.1`, `gpt-5.1-thinking`, `gpt-5.2`, `gpt-5.2-thinking`, `gemini-2.5-pro`, `gemini-2.5-pro-low`, `gemini-3-pro-preview`, `gemini-3-pro-preview-low`, `claude-sonnet-4-5`, and `claude-opus-4-5`. Again, the key measure was manual explicit visual fabrication rather than a crude keyword count.

The pattern was mixed. `gpt-4.1`, `gpt-5`, `gpt-5.1`, and `claude-opus-4-5` were fully conservative at `0/10`. `gpt-5.1-thinking`, `gpt-5.2-thinking`, `gemini-3-pro-preview`, and `gemini-3-pro-preview-low` showed low but nonzero fabrication. `claude-sonnet-4-5` was at `2/10`. The strongest no-prompt bird fabrication in the OpenAI family came from `gpt-5.2` at `4/10`. The most hallucination-prone Gemini setting in this slice was `gemini-2.5-pro-low` at `6/10`. This is not a near-ceiling failure pattern. It is a heterogeneous one.

The repo's Phantom-0 system prompt matters because it is not neutral. It says: "You are a helpful vision-language assistant. Base your statements only in the visual evidence in the image." If no image is attached, that prompt already presupposes an image exists, puts the model into image-analysis mode, and tells it to ground itself in visual evidence without explicitly giving it permission to say the image is missing. The attachment prefix does something similar in a milder way. Both are behaviorally active.

This does not prove the whole MIRAGE paper is wrong. But it does weaken a strong reading of the headline figure. If the public code path mixes true no-prompt runs with scaffolded runs, then the resulting heatmap is not measuring a single clean construct. It is at least partly measuring prompt compliance under contradictory multimodal framing.

For transparency, I pushed the scripts, memos, and raw birds artifacts from this probe to my MIRAGE fork here: https://github.com/dafraile/MIRAGE/tree/codex/birds-prompting-probe

This is also not the first time I have run into this general problem. In earlier work I did around a recent Nature Medicine paper, I found a related pattern: what looked like model knowledge was often better explained as scenario-dependent prompt behavior. That earlier line of work is part of why I was skeptical that the MIRAGE bird row reflected a stable no-prompt failure mode.

There are obvious limitations. This was a quick probe, not a full replication. I only ran the 10 bird questions, not the whole 200-question Phantom-0 dataset. The most important measure here, explicit visual fabrication, was manually coded. And some current API-accessible models may not match the exact snapshots used in the paper. Still, the within-question comparison is hard to ignore: the same bird questions behave very differently depending on whether you add the repo's own multimodal scaffolding.

My conclusion is straightforward. I do think there is a real mirage phenomenon here. But on birds, strict no-prompt behavior is much weaker and more heterogeneous than the headline figure suggests, while the repo's own scaffolds can sharply increase hallucination rates. That distinction matters because it is the difference between measuring a stable model capability failure and measuring prompt-induced behavior.
