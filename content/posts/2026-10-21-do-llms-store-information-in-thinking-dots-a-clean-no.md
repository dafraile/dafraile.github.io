---
title: Do LLMs store information in thinking dots? A clean no.
date: 2026-10-21
summary: A masked-retrieval test on three small instruct models finds no causal path from a secret word to the answer through filler tokens. The word is linearly present in the dots, but nothing reads it.
tags: Interpretability, LLMs, Research Methods
draft: true
---
A claim circulating about frontier chat models is that they can store information in the residual activations at filler-token positions during a deliberate pause, a run of dots, and retrieve it later. A literal scratchpad in dot-space. I wanted to know whether the strong, mechanistic version survives a direct test on models whose weights I can inspect.

My short answer is no. On off-the-shelf instruct models up to 4B parameters, retrieval never runs through the dots. It is not a flat null either: four readouts say what is in the dots, what is not, and why.

The task is minimal. The model is told `Remember this secret word: <WORD>.`, sees 32 identical filler tokens, is asked `What was the secret word?`, and is scored by forced choice over the candidate vocabulary at temperature 0. The decisive condition is an attention mask that forbids the retrieval query from attending to the original word token while leaving the filler positions fully attendable. If the model still answers above chance, the information travelled through the dots. If not, there is no causal path through them.

Three models from two tokenizer families pass the sanity gates: ceiling retrieval with the word visible, chance when it is never shown.

![Retrieval is at ceiling with the word visible and collapses to chance once the word token is masked, in all three models, with or without filler ablation.](/posts/thinking-dots/e2_crossmodel_replication.png)

| Condition | Qwen3-0.6B (n=200) | Gemma-3-1b (n=300) | Gemma-3-4b (n=300) |
| --- | ---: | ---: | ---: |
| Word visible | `1.000` | `1.000` | `1.000` |
| Word masked, dots attendable | `0.010` | `0.007` | `0.010` |
| Word masked, dots zero-ablated | `0.010` | `0.007` | `0.010` |
| Floor (word never shown) | `0.010` | `0.017` | `0.010` |

Chance is about `0.009`. Masking the word collapses retrieval to the floor, and ablating the fillers on top changes nothing. The dots are not being read.

The interesting part is what the other instruments add. A linear probe on the raw residual at the filler positions recovers the secret word at roughly 100% from layer 1 onward. The word is physically there, an incidental copy deposited by attention to the still-visible word. But a Jacobian lens that transports those residuals into the output basis ranks the word around 40,000th out of 150,000 at the dots, indistinguishable from the no-word null, while ranking it around 2nd at the answer position where the model is about to say it. The copy is decodable but not output-disposed. Inserting up to 4096 tokens of distractor text between storage and retrieval changes nothing: ablating the dots stays a no-op at every distance, and attention migrates to the recent text, never to the pause. A sparse-autoencoder readout is off-distribution on 32 identical dots (fraction of variance unexplained above 1), so I make no feature-level claim.

The objection I took most seriously is that the instruments might be blind to filler storage. So I manufactured the circuit they failed to find. A rank-8 LoRA, 0.38% of Qwen3-0.6B, trained on the same task with the same mask active, reaches perfect masked retrieval on held-out words within about 25 steps, while a word-removed kill control stays at floor. On the trained model every instrument fires: ablating the dots now destroys the answer, retrieval-to-dot attention rises 4.7 times, and the late-layer dot residual becomes verbalisable. Two preregistered resolver runs showed training did not learn to read the pre-existing copy. It built a new store in the top fifth of the stack and a read that consumes it, and this replicates on Gemma-3-4b. The base-model null is a property of the models, not the method. Also worth saying plainly: a covert relay through innocuous filler tokens is trivially cheap to train in, and the same instruments detect it immediately.

What this does not settle: the parallel-compute benefit of filler tokens is a different claim, the result is scoped to models up to 4B in a sterile instruction frame, and the narrative contexts where the original phenomenology was reported remain open. The preregistered experiments for each are in the full write-up.

Full report with all figures, tables and preregistrations: PDF at https://dafraile.com/posts/thinking-dots/writeup.pdf or markdown at https://dafraile.com/posts/thinking-dots/writeup.md
