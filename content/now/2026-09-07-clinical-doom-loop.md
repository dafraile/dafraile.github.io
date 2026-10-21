---
title: Clinical doom loop: a preregistered, two-arm replication protocol
date: 2026-09-07
kind: code
summary: Shared preregistration, stimulus and scoring specs, and a frozen evidence packet for a Digital Minds Research Sprint study of affective expression and lexical collapse in model failure trajectories.
link: https://github.com/dafraile/clinical_doom_loop
tags: Preregistration, Replication, Model welfare
---
This repository deliberately contains no inference harness. Two independent implementations were run against the same frozen preregistration, stimulus specifications, scoring rules and cross-replication tolerances, and this is the shared ground truth both arms had to match. The final report, "Distress Expression Is Not Distress Dynamics", is in the repo together with a hash-verified freeze packet in which all 21 generated claims resolve to source keys.

I am sharing it mostly as a worked example of how to keep a two-arm study honest: provenance ledger, blinding rules, and a deviations file that records the one procedural slip rather than repairing it after the fact.
