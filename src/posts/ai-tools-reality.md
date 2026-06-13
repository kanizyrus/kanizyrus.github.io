---
title: "We Gave Our Team AI Tools. Here's What Actually Happened."
date: 2026-03-15
excerpt: "The results were messier, slower, and more interesting than any vendor demo suggested. An honest account of AI adoption in an engineering org."
category: AI
readTime: "6 min read"
layout: post.njk
permalink: /essays/{{ page.fileSlug }}/
---

Six months ago, we rolled out AI-assisted coding tools to our entire engineering chapter. GitHub Copilot for everyone. Access to Claude and GPT-4 for code review, documentation, and architecture discussions. The works.

Here's what actually happened. Not the polished version you'd put in a vendor case study. The real version.

## Month 1: The Honeymoon

Everyone was excited. Copilot completions felt like magic. Developers were writing code faster. Pull requests were getting bigger. Metrics looked great on paper.

Then we started reviewing the code more carefully.

## Month 2: The Hangover

The bigger pull requests? They were bigger because developers were accepting completions they didn't fully understand. We found patterns that looked correct but handled edge cases poorly. We found test suites that had good coverage numbers but tested the wrong things.

One senior developer told me: "I'm writing code faster, but I'm understanding it slower."

That sentence has haunted me since.

## Month 3-4: The Recalibration

We didn't ban the tools. We recalibrated. We established guidelines:

**Rule 1:** You must be able to explain every line of AI-generated code as if you wrote it yourself. If you can't, you rewrite it.

**Rule 2:** AI is a draft tool, not a delivery tool. Treat every completion like a first draft from a junior developer — helpful starting point, needs your judgment.

**Rule 3:** Use AI for the boring parts, not the hard parts. Boilerplate, test scaffolding, documentation formatting — great. Architectural decisions, security logic, business rules — think first, then maybe ask the AI to check your work.

## Month 5-6: The Actual Value

The real gains showed up in unexpected places. AI was mediocre at writing new code but excellent at explaining existing code. Our onboarding time for new developers dropped significantly because they could ask Claude to explain legacy systems.

Code review quality improved — not because AI was doing the reviews, but because developers were using AI to pre-check their own work before submitting PRs.

Documentation got dramatically better because the activation energy dropped. Writing docs went from "I'll do it later" to "let me have AI draft this and I'll fix it."

## What I Learned

AI tools don't make good developers better. They make the gap between good and mediocre development practices more visible. Teams with strong code review culture benefited. Teams without it produced more code, faster, with more bugs.

The most valuable thing about AI adoption wasn't the tools themselves — it was the conversation it forced us to have about what good engineering actually looks like.
