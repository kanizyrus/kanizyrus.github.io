---
title: "What Founding a Fintech Startup Taught Me About Trust"
date: 2026-04-08
excerpt: "When your system handles other people's money, 'move fast and break things' stops being a philosophy and starts being a liability."
category: Fintech
readTime: "7 min read"
layout: post.njk
permalink: /essays/{{ page.fileSlug }}/
---

When I co-founded Pymlo, I thought the hardest part would be the technology. Building a lending platform from scratch, handling payments, managing risk models. I was wrong. The hardest part was trust.

## Other People's Money

There's a moment in every fintech founder's journey when the abstraction breaks down. You're no longer moving data between systems — you're moving someone's rent money. Someone's payroll. Someone's savings.

The first time a transaction failed and a borrower called us panicking because they thought they'd lost their payment, I understood something that no architecture diagram had taught me: reliability isn't a technical metric. It's a promise.

## Move Fast and Break... Nothing

In Silicon Valley, "move fast and break things" is a badge of honor. In fintech, it's a lawsuit. Thai financial regulations taught me a discipline that startup culture actively discourages: slowness as a feature.

Every deploy went through manual verification. Every new feature had a compliance review. Every edge case in our risk model was documented, tested, and documented again. It felt painfully slow. It was exactly right.

## What Regulated Technology Demands

Working in regulated technology taught me three things that I carry into every engineering role since:

**Auditability matters more than elegance.** I used to optimize for clean code. Now I optimize for code that can be explained to a regulator at 2 AM. These are not the same thing.

**Silent failures are moral failures.** When a social media app has a bug, someone sees a wrong thumbnail. When a lending platform has a bug, someone might not make rent. The stakes change everything about how you build.

**Trust is the product.** We weren't selling loans. We were selling the belief that our system would handle people's money correctly. Every technical decision was ultimately a trust decision.

## After Pymlo

Pymlo didn't become a unicorn. It taught me more than any success could have. When I look at my current work in engineering leadership, almost everything I do well traces back to lessons from those years: the discipline, the responsibility, the understanding that software isn't just code — it's a promise to the people who depend on it.
