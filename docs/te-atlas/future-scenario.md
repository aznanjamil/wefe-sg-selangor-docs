---
sidebar_position: 4
title: Future Scenario
---

# Future Scenario

The **Future Scenario** view shows projected TE scores under two IPCC climate pathways, for two future time slices. Use this when you're planning for resilience or adaptation — *"where will the least efficient mukims be by 2050?"*

> ![](/img/future-overview.png)

When you click **Future Scenario** at the top of the left panel, the whole app re-skins:

- The map switches to the **forecast layer** (this may take a second — you'll see a brief animation).
- The controls beneath change to climate-scenario controls.
- The bottom bar legend changes to the forecast renderer.

## Step 1 — Pick the Production Unit

Same five units as Current. Pick whichever sector you're studying.

> ![](/img/future-controls.png)

## Step 2 — Pick the Climate Scenario (SSP)

Two scenarios from IPCC AR6:

| Scenario | Meaning |
|---|---|
| **SSP2-4.5** | Moderate emissions — *"middle of the road"* development pathway |
| **SSP5-8.5** | High emissions — *"fossil-fueled development"* worst-case |

> ![](/img/future-ssp-cards.png)

Click the card to switch scenarios. Everything below — map, ranking, climate context, detail panel — updates to that scenario.

## Step 3 — Pick the Period

Three time windows, but only two are *selectable*. The third is always shown as the baseline you're comparing to:

| Period | Years | Selectable? |
|---|---|---|
| **Early Century** | 2020–2046 | No — always the baseline (Current reference) |
| **Mid Century** | 2047–2073 | Yes — labeled *"by 2050"* in the ranking |
| **Late Century** | 2074–2100 | Yes — labeled *"by 2100"* in the ranking |

> ![](/img/future-period-buttons.png)

The Δ (delta) you'll see throughout the UI is always *target period − Early Century*. So if Late Century TE is **0.94** and Early Century was **0.84**, Δ = **+0.10**.

## Step 4 — Read the Climate Context card

Right under the Period buttons, the **Climate Context** card shows what the future is going to *feel* like under the chosen SSP and period:

> ![](/img/future-climate-context.png)

| Value | What it means |
|---|---|
| **Max Temperature** | Average TASMAX across the target period, with the change vs Early Century mean |
| **Max Precipitation** | Average peak monthly rainfall, with the change vs Early Century mean |

The colored delta (e.g. `+1.17 °C`, `−1.31 mm`) tells you the magnitude of the climate shift between the baseline and the target.

## Step 5 — Read the TE Ranking

Below Climate Context, the **TE Ranking · Mid vs Early** (or *Late vs Early*) section sorts mukims by how much their TE shifts from the Early baseline to the target period.

> 📷 **Screenshot to capture:** `static/img/future-ranking.png` — the ranking with stacked Current/Target bars and Δ values colored red or green.
>
> ![](/img/future-ranking.png)

Each row shows:

- **Mukim name** (left)
- **Two bars stacked vertically:**
  - Top bar = Current (Early Century) TE — width and color reflect that value
  - Bottom bar = Target (Mid or Late) TE — width and color reflect that value
- **Δ vs current** (right) — colored:
  - 🔴 **Red** if negative (TE got worse — less efficient, more vulnerable)
  - 🟢 **Green** if positive (TE got better — more efficient, less vulnerable)
  - Grey if no change

**Remember:**
- **Higher TE score** = more efficient, less vulnerable ✅
- **Lower TE score** = less efficient, more vulnerable ⚠️

Comparing the two bar lengths tells you the trajectory at a glance:

- Both bars roughly equal → no significant shift
- Bottom bar **shorter** than top → vulnerability is *increasing* by this period (TE got worse)
- Bottom bar **longer** than top → vulnerability is *decreasing* by this period (TE got better)

Click any row to open the detail panel for that mukim.

## Step 6 — Detail panel: full trajectory

Click a mukim on the map (or in the ranking). The right panel switches to the **Forecast TE** view:

> ![](/img/future-detail-panel.png)

For each of the five Production Units, you'll see:

- The unit name and its **headline Δ** (target − Early), colored red/green
- **Three horizontal bars**, one per period — Current, 2050, 2100 — with each bar's TE value
- Colors come from the map renderer; bar width is the absolute TE value on a shared scale

If a unit is missing data for this mukim (e.g. Water Utilities is missing data for some mukims), the bars and Δ will show `—`.

## A note on "the small map"

You may notice a small map in the bottom-left corner of the map area. **That's the switch-map tool.** Because the app uses two separate map layers (one for Current data, one for Forecast data), the system flips between them when you toggle scenarios. The small map shows the *other* layer — clicking it would manually swap, but you shouldn't need to: the scenario toggle does that automatically.

> 📷 **Screenshot to capture:** `static/img/future-switch-map.png` — the small map in the corner, with an arrow pointing at it.
>
> ![](/img/future-switch-map.png)

## Tips for planners

- **For comparing scenarios** → take a screenshot of one SSP, swap to the other, take a second screenshot. Side-by-side comparison highlights the *climate-driven* differences.
- **Most-at-risk shifts** → the mukim with the highest TE (least vulnerable) in Current may not be the same as in Future. Always check both.
