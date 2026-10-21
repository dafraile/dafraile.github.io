---
title: Where do apparent LLM clinical triage failures arise?
date: 2026-05-28
kind: paper
summary: Sparse-autoencoder features show medical information is present under both multiple-choice and free-text formats but attenuated at the decision token, where scaffold features dominate. Findings of EMNLP 2026.
link: https://arxiv.org/abs/2605.29889
github: https://github.com/dafraile/SAE_mad
tags: Interpretability, SAE, Triage
---
Clinician-authored triage vignettes have been used to report substantial under-triage by LLMs under multiple-choice testing, yet the same cases can come out differently in free text. With Berardino Como, Jialei Sheng, Soundariya Ananthan and Shlomo Berkovsky, I asked whether that format effect appears while the case is processed or only when clinical information is mapped to the answer.

Using sparse-autoencoder features in Gemma 3 4B/12B and Qwen3-8B, medical features fire on the clinical narrative under both formats but are inactive at the multiple-choice decision token. Emergency-tier information is linearly decodable from the vignette representations with ROC-AUC 0.95 to 1.00 in either format, and attenuated at the decision token, where scaffold-peaking features account for over 91% of attribution. The strongest correlates of the format effect sit at answer selection. Accepted to Findings of EMNLP 2026.
