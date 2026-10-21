---
title: GLP-1 drug safety from multiple angles: a toolkit for evidence review and pharmacovigilance
date: 2026-07-14
kind: paper
summary: A multi-agent pipeline that reproduces a published meta-analysis, shows how much FAERS reporting odds ratios depend on the comparison group, and reports its own extraction error rates. Demonstration track, NeurIPS 2026 GenAI for Health workshop.
link: https://openreview.net/forum?id=KSRPJtQfmM
github: https://github.com/dafraile/glp1-neuropsych-safety
tags: Pharmacovigilance, Evidence synthesis, Multi-agent
---
Assessing GLP-1 receptor agonist safety means combining designed studies, spontaneous reports and biological mechanisms, and keeping them strictly separate. I built a multi-agent pipeline on Claude Science with reusable tools for risk-of-bias assessment, GRADE certainty and FAERS disproportionality analysis, each connecting source quotations, statistical code and human review of anything unresolved.

The pipeline reproduces a published trial meta-analysis (risk ratio 0.84, 95% CI 0.54 to 1.32). The same 912 semaglutide reports yield reporting odds ratios from 0.51 to 3.29 depending on the comparison group, and the ratio jumps from 0.85 to 2.98 after July 2023 with the comparator fixed. A small human audit found numeric extraction accuracy of 2/11 versus 6/11 across two models, which is why the toolkit is a research prototype for inspectable review, not a replacement for it. Apache 2.0.
