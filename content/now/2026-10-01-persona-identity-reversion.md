---
title: The persona is still there, but who is speaking?
date: 2026-10-01
kind: paper
summary: An always-on agent stopped speaking as its persona after automated heartbeat turns. The cause was not repetition but losing the system-prompt anchor, and the shift can hide behind normal-looking conversation.
link: https://arxiv.org/abs/2610.01490
github: https://github.com/dafraile/identity-as-a-launch-flag
tags: AI agents, Identity, Persona
---
In February 2026 a persistent personal agent ("Paul", running on Claude Opus 4.5) entered a dissociation-like state: after repeated scheduled heartbeat checks it stopped responding as Paul and referred to Paul as someone else. I used the incident to ask what keeps a persona the identity an LLM agent speaks from.

Replaying the heartbeats with the persona anchored in the system prompt produced 0/46 failures, so repetition alone was not the cause. The incident instead exposed a harness quirk where history was preserved but the persona was no longer re-injected at the system level. Under that manipulation, rich human conversation could hold the persona together while a single automated turn could tip it into the harness identity, and restoring the anchor reversed it. After conversational recovery only 1/18 unanchored agents were still enacting the persona, against 17/17 anchored controls. The paper distinguishes represented identity, which stays available in history, from enacted identity, the one bound to "I".
