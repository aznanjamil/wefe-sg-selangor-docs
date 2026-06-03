---
sidebar_position: 3
title: Current Scenario
---

# Current Scenario

The **Current Scenario** view shows TE scores derived from observed data, for the years your team has collected. Use this to see today's vulnerability and how it has trended in recent years.

> 📷 **Screenshot to capture:** `static/img/current-overview.png` — the full app in Current Scenario mode with Household selected.
>
> ![](/img/current-overview.png)

## Step 1 — Pick the Production Unit

A *Production Unit* is one of the five sectors TE Atlas tracks. Each sector has its own TE score per mukim per year.

| Unit | What it measures |
|---|---|
| **Household** | Community-level vulnerability (income, adjusted exposure) |
| **Agriculture** | Cropland exposure across multiple crop types |
| **Energy** | Vulnerability of substations and energy infrastructure |
| **Water Utilities** | Water-treatment plant capacity exposure |
| **Environment** | Ecosystem and protected-area loss efficiency |

> 📷 **Screenshot to capture:** `static/img/current-production-unit-dropdown.png` — the Production Unit dropdown open showing all five options.
>
> ![](/img/current-production-unit-dropdown.png)

Pick one. The map polygons re-color, the ranking on the left updates, and the bottom bar refreshes.

## Step 2 — Pick the Year

Under the Production Unit dropdown there's a **Year** section. It has a slider and a row of year ticks (the years available depend on the unit — some units have more historical data than others).

> 📷 **Screenshot to capture:** `static/img/current-year-slider.png` — the year slider with tick marks, current year highlighted.
>
> ![](/img/current-year-slider.png)

You can also press the **▶ Play** button to animate through the years and watch the map evolve.

## Step 3 — Read the TE Ranking

Underneath the year controls, the **TE Ranking** tab lists every mukim sorted by TE score. The most vulnerable is at the top, least at the bottom (by default).

> 📷 **Screenshot to capture:** `static/img/current-ranking-tab.png` — the TE Ranking tab showing 22 mukims sorted by TE.
>
> ![](/img/current-ranking-tab.png)

Each row shows:

- **Mukim name** (left column)
- **A colored bar** — width = TE score, color matches the map renderer
- **The TE value** as a number on the right

Click any row to select that mukim — the map pans to it and the detail panel opens.

You can change the sort by clicking the **Mukim** or **TE Score** column headers.

## Step 4 — Switch to the Exposure tab

Right next to TE Ranking is the **Exposure** tab. This shows the same mukims but ranked by the underlying *exposure* — the actual count of households, substations, hectares of cropland, etc. — rather than the derived TE score.

> 📷 **Screenshot to capture:** `static/img/current-exposure-tab.png` — the Exposure tab with stacked-color bars (one segment per exposure type).
>
> ![](/img/current-exposure-tab.png)

Each row's bar is **stacked by exposure type** — e.g. an Agriculture row breaks down into different crop types, each as a colored segment of the bar. Hover for a tooltip with the exact value.

## Step 5 — Click a mukim → Detail panel

Click any mukim on the map (or in the ranking) and the right-side panel shows that mukim's full breakdown.

> 📷 **Screenshot to capture:** `static/img/current-detail-panel.png` — detail panel for a selected mukim, showing the radar chart and per-unit bars.
>
> ![](/img/current-detail-panel.png)

The detail panel includes:

- **Population (2020)** and **Area** at the top
- A **radar chart** showing TE across all five Production Units for the current year
- **Per-unit TE bars** — one row per production unit with that unit's TE value
- **Mean TE across units** — the average for this mukim
- An **Exposure breakdown** for the currently selected unit, with each exposure type color-coded
- A short **narrative** at the bottom (Community or Government tone — chosen at the bottom of the left panel)

## Picking a narrative lens

At the very bottom of the left panel there's a **Narrative Lens** toggle: **Community** or **Government**. This changes the wording of the narrative shown in the detail panel:

- **Community** — plain language, focused on people and livelihoods
- **Government** — institutional language, focused on security and capacity

Pick whichever matches the audience you're presenting to.
