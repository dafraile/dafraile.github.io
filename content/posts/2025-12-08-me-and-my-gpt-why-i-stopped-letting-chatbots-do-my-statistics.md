---
title: Me and my GPT: Why I Stopped Letting Chatbots Do My Statistics
date: 2025-12-08
summary: Don't ask GPT for a p-value. Ask it to help you write the code, explain the method, and keep you in control.
tags: LLMs, Statistics, Research Methods
external_link: https://aihealthalliance.org/2025/12/08/me-and-my-gpt-why-i-stopped-letting-chatbots-do-my-statistics/
---
Increasingly, I hear some version of the same story: "I pasted the numbers into ChatGPT, and it gave me an odds ratio and p-value, is that OK?" My short answer is probably not. But there is a much better way to bring AIs into your analysis workflow, one that keeps you in control, improves transparency, and might even teach you some statistics along the way.

My own turning point came with a small clinical dataset from an observational study. I tried the "lazy" approach first, summarised the data in a paragraph, pasted some counts into GPT and asked for an odds ratio. Within seconds, I had a beautifully formatted answer. But I had no idea which test had been used, whether any continuity corrections had been applied, or whether GPT had quietly misread my numbers. When I later ran the analysis myself in R, the result was close but not identical.

That was the moment I decided: I don't want the chatbot to be my statistician. I want it to be my coding tutor and help me write those tests that I will struggle to put into formal language.

For data analysis, I follow a simple rule: never ask GPT for a result. Ask it to help you inspect, write code, suggest analysis and explain what it's doing. This shifts GPT into three roles at once: explainer, code generator, and thinking partner. I still have to run the code myself and look at the outputs. But now I can see the entire pipeline from raw data to conclusion. The black box has been opened.

LLMs make it trivially easy to try dozens of models. This is powerful and dangerous in equal measure. AI can act as a p-hacking accelerator if we're not careful. Some simple guardrails help: start with the question, not the model. Write down your primary outcome and primary analysis before you begin. Keep a record of your prompts and scripts as part of your analysis log.

GPT can be an excellent assistant at the data desk, but the responsibility for the analysis, and the patients and policies it will ultimately affect, still rests firmly with us.
