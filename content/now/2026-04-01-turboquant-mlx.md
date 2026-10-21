---
title: turboquant-mlx: KV-cache compression for Apple Silicon
date: 2026-04-01
kind: project
summary: TurboQuant KV-cache compression ported to MLX with fused Metal kernels, as a drop-in replacement for the mlx-lm cache.
link: https://github.com/dafraile/turboquant-mlx
tags: MLX, Inference, Metal
---
TurboQuant compresses the transformer KV cache with a randomised Hadamard rotation followed by Lloyd-Max quantisation. I ported it to MLX with custom fused Metal kernels so it drops into mlx-lm's cache on a Mac. Layer-adaptive mode keeps the first and last few layers in FP16 and compresses the middle at 3 bits. On Qwen2.5-7B on an M4 Pro that gives a cache 1.9 to 2.4 times smaller with good quality; the numbers and trade-offs are in the README.
