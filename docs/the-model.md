---
sidebar_position: 4
title: The Model
---

# The Model

This page explains how the WEFE Nexus model works — what data goes in, what it measures, and what the results mean.

> ![](/img/site/model-overview.png)

## What the Model Does

The project uses **Stochastic Frontier Analysis (SFA)** to measure how efficiently the Sungai Selangor Basin manages its water, energy, food, and environment resources.

Instead of one big model, there are **five separate models** — one for each sector:

| Model | What It Measures |
|-----------|------------------|
| **Household** | How well communities cope with climate and resource conditions |
| **Water** | Water supply performance — treatment, distribution, quality, and losses |
| **Energy** | Energy performance, especially for water pumping and treatment |
| **Food** | Farm and fishery output — how rainfall, temperature, and water availability affect production |
| **Environment** | Forest and ecosystem health — tree-cover loss is tracked as a bad outcome |

## What Data Goes In

The models use real data from each mukim in the basin:

- **Climate** — Rainfall and temperature (from the NEX-GDDP-CMIP6 dataset)
- **Hydrology** — River flows, dam levels, water abstraction
- **Land use** — Forest cover, farmland, built-up areas
- **Population** — Household income, spending, and population numbers
- **Infrastructure** — Treatment plant capacity, pipe networks, pumping stations

## The TE Score — What It Means

**Technical Efficiency (TE)** is a score from **0 to 1** that shows how close a mukim is to the best performer in the basin:

| TE Score | Meaning |
|----------|---------|
| **1.0** | Best in class — this mukim sets the benchmark |
| **0.90** | Good — only 10% below the best |
| **0.70** | Fair — 30% below; room for improvement |
| **0.55** | Poor — barely half the best performance; likely multiple problems |

**Higher TE = more efficient, less vulnerable ✅**
**Lower TE = less efficient, more vulnerable ⚠️**

## Two Reasons for Low Scores

SFA separates underperformance into two causes:

### 1. Bad Luck (Noise)
Things outside anyone's control:
- Droughts, floods, extreme heat
- Pollution incidents (e.g., July 2019 chemical dumping that shut down treatment plants)
- Equipment failures during storms

> These are **not counted against** a mukim's efficiency score.

### 2. Real Waste (Inefficiency)
Things that better management or investment could fix:
- Aging pipes causing water loss (NRW at 29.6% in 2019)
- Outdated farming practices
- Poor maintenance or weak enforcement

> These **are counted** and show where policy or investment can help.

## Future Climate Projections

The models also show how TE scores might change under future climate conditions:

| Scenario | What It Means |
|----------|-------------|
| **SSP2-4.5** | Moderate emissions — temperatures rise slowly, rainfall becomes more variable |
| **SSP5-8.5** | High emissions — severe heat, more droughts, bigger floods |

## Important Notes

- **Scores are relative** — TE compares mukims to each other, not to a perfect ideal
- **Low score ≠ bad management** — external problems like saltwater intrusion are separated out as "noise"
- **The basin is fully allocated** — 0% spare water for new users, so efficiency gains are essential
- **Environment model works differently** — it tracks tree-cover loss as a bad outcome, so the "best" mukim is the one losing the *least* trees
- **One bad year doesn't ruin the score** — because noise is separated out, a single drought or flood won't permanently lower a mukim's long-term score

## Where to Read More

For the full technical guide, see the **SFA Public Guide** in the [Documents Repository](./documents).

> ![](/img/site/model-architecture.png)
> ![](/img/site/model-visual.png)
