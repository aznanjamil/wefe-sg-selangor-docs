---
sidebar_position: 2
title: Reading the Map
---

# Reading the Map

The map is the centerpiece. Every colored polygon is one mukim, and the color tells you how vulnerable that mukim is for the production unit and time period you've selected.

## What the colors mean

The legend lives in the bottom-left of the screen, in the **TE Score** strip.

> ![](/img/legend-strip.png)

- **Lower TE score** → less vulnerable
- **Higher TE score** → more vulnerable
- Colors are pulled directly from the map renderer published in AGOL. If the planning team updates the renderer in AGOL, the legend (and the colors in the ranking bars) updates automatically.

The colors are split into **five classes** — Very Low, Low, Moderate, High, Very High. Two mukims in the same color class have similar vulnerability levels.

## Hover and click

| Action | What happens |
|---|---|
| **Hover** over a mukim | A tooltip shows the mukim name |
| **Click** a mukim | The right-side detail panel opens with that mukim's breakdown |
| **Click again** on a different mukim | Detail panel swaps to the new selection |
| **Click outside any mukim** | Detail panel closes |

> ![](/img/map-click-detail.png)

## Zoom and pan

Standard map controls in the top-left:

- **+** / **−** to zoom
- 🏠 to return to the basin extent
- ⊕ to recenter on your current location (if shared)
- 🧭 to reset rotation

You can also **scroll-wheel** to zoom and **click-drag** to pan.

## The bottom bar

Below the map you'll see a summary strip:

> ![](/img/bottom-metrics-bar.png)

| Cell | What it means |
|---|---|
| **TE Score** | The legend strip (see above). |
| **Basin Avg TE** | Average TE score across all 22 mukims for the current selection (Production Unit × Year/Period × SSP if Future). The ring color matches where that average sits on the legend. |
| **Most Vulnerable** | The mukim with the highest TE score in the current selection. |
| **Least Vulnerable** | The mukim with the lowest TE score. |
| **Active View** | A label of what slice you're currently looking at (e.g. *Household · 2024* or *Household · Mid SSP245*). |

These update live as you change the Production Unit, Year, SSP scenario, or Period.
