---
title: Swarm Friction: procedural gates and forensic logs for groups of tool-using agents
date: 2026-10-04
kind: code
summary: A hackathon prototype that puts a broker between agents and their tools, logs who asked for what, and tests whether cheap procedural gates reduce out-of-scope actions.
link: https://github.com/dafraile/swarm_friction
tags: AI agents, Oversight, Hackathon
---
When an agent, or a group of agents, works with real tools, three questions need answering afterwards: who requested an action, what was the agent allowed to do, and what actually executed. Chat transcripts answer these badly. For the AI Swarm Dynamics Hackathon I built a charter, a broker that can require an acknowledgement or a declaration before any privileged tool call, and a structured log that records procedural and real policy compliance separately.

In a 400-episode experiment across two models, simply pointing the agent at the policy cut completed violations from 17/40 to 3/40, and either gate on top brought them to zero. The more expensive declaration gate showed no benefit over a plain acknowledgement. The same forensic questions were then run over the AI Village dataset of 78,000 computer-use sessions. Preliminary work, with its limits spelled out in the repo.
