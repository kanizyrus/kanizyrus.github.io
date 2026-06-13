---
title: "The Day Our Pipeline Went From 45 Minutes to 6"
date: 2026-02-01
excerpt: "It wasn't a heroic rewrite. It was four boring optimizations and one argument about caching. The most impactful work rarely feels dramatic."
category: Engineering
readTime: "5 min read"
layout: post.njk
permalink: /essays/{{ page.fileSlug }}/
---

Our CI pipeline took 45 minutes. Not sometimes. Every time. Every push. Forty-five minutes of waiting, context-switching, and stacking up PRs that became increasingly painful to merge.

Nobody complained because it had always been slow. That's the most dangerous sentence in engineering: "It's always been this way."

## The Survey

I ran an anonymous survey asking our developers their biggest pain points. CI speed came in first. Ahead of unclear requirements. Ahead of too many meetings. Forty-five minutes of dead time, multiple times a day, for every developer on the team.

I did the math: with 12 developers averaging 4 pushes per day, we were losing roughly 36 hours of developer time daily. That's 180 hours per week. That's more than four full-time developers doing nothing but waiting.

## The Four Boring Optimizations

**1. Parallel test execution.** Our tests ran sequentially. Why? Because that's how the original CI config was written three years ago, and nobody had changed it. Parallelizing across 8 workers cut test time from 30 minutes to 6.

**2. Dependency caching.** We were downloading every npm package from scratch on every build. Adding a cache step saved 8 minutes per build.

**3. Test impact analysis.** Not every change needs every test. We built a simple dependency graph that runs only the tests affected by each changeset. Average test suite went from 4,000 tests to about 400.

**4. Docker layer caching.** Our Docker builds were rebuilding from scratch every time. Layer caching alone saved 5 minutes.

## The Argument About Caching

The caching changes were the most contentious. A senior developer argued that caching introduces non-determinism — what if the cache is stale? What if it masks a dependency conflict?

He was right that caching adds risk. He was wrong that the risk outweighed 36 hours of daily developer time. We added a weekly full-rebuild pipeline as a compromise. It's triggered exactly once — Sunday night, when nobody cares.

## The Results

Pipeline time: 45 min → 6 min. Deploy frequency: 2/day → 12/day. Developer satisfaction score: 3.2/10 → 8.7/10. PRs merged per week: +65%.

None of these changes required rewriting anything. No new tools, no new frameworks, no heroic refactoring weekend. Just four boring optimizations that anyone could have done, at any point in the previous three years.

The lesson: the most impactful engineering work is often the least dramatic. It's not the architecture rewrite or the new technology adoption. It's the thing everyone walks past every day because "it's always been this way."
