---
title: Evaluation format, not only model capability, shapes measured triage failure
date: 2026-03-12
kind: paper
summary: A faithful replication of the Nature Medicine ChatGPT Health triage study finds the headline under-triage rate depends heavily on output format and adjudication. NeurIPS 2026 GenAI for Health workshop.
link: https://arxiv.org/abs/2603.11413
github: https://github.com/dafraile/nature_triage_expanded_replication
tags: Evaluation, Triage, Consumer health AI
---
A Nature Medicine study reported that ChatGPT Health under-triages 51.6% of emergencies, using an exam-style scaffold with forced A/B/C/D output, knowledge suppression and no clarifying questions. With Jialei Sheng, Farah Magrabi and Enrico Coiera, I asked how much of that number is a property of the measurement rather than of the models.

We ran the authors' own 60 vignettes through six frontier models under four matched formats, with clinician validation of the rewrites and a blinded audit of the LLM adjudicators. On the four vignettes that define the original emergency rate, under-triage was 17% with the exact scaffold, 50% in free text and 21% with a forced letter on the same message, and every free-text "under-triage" was a same-day recommendation scored one tier lower. The headline rate did not reproduce as a stable cross-model finding. Safety claims should report sensitivity to input wording, output format and adjudication.
