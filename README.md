# Abacus of Street Experiment Features

The Abacus is a digital design tool, that was created to facilitate the selection of materials to use in tactical urban interventions, such as street experiments. In it are collected common physical features that can be deployed in urban design, subdivided in three classes: materials, semi-processed products and furniture pieces.
The diagram also presents properties that characterise the features and determine their suitability for specific design needs.
Where radial lines, corresponding to features, intersect concentric lines, corresponding to properties, there are "beads" that represent the level to which a property relates to the feature.
The tool is an offline application, it runs entirely offline from local files that can be downloaded.
The UI allows to make local modifications to the tool, for example adding features and properties, changing level beads, to personalise its content.

---

## Contents

The app is three files that must sit **in the same folder**:

| File | Role |
| --- | --- |
| `Abacus_6_7.zip` | The download file for the latest version of the Abacus, containing all necessary files including the 'lite' version
| `abacus-…_V6_7.html` **or** `abacus-…_V7L.html` | The app itself (pick one — see [Which version](#which-version)) |
| `properties.js` | Property definitions: names, groups, level labels, neutral/letter types |
| `features.js` | Feature data: materials, semi-processed products, furniture |

Both HTML builds load the same two data files via `<script src="properties.js">`
and `<script src="features.js">`.

---

## Running it

1. Keep the chosen `.html`, `properties.js`, and `features.js` **in one folder**.
2. Double-click the `.html` file (or open it in a browser).

That's it — it works directly from `file://`. No local server is needed because the
data is loaded through `<script>` tags rather than `fetch`, so there is no CORS
requirement.

> **Data-file naming.** These builds expect `features.js` (global
> `window.__abacusFeatures`). Some copies of this project ship the same data as
> `items.js` (global `window.__abacusItems`). If you only have `items.js`, either
> rename it to `features.js` **and** rename the global inside it to
> `__abacusFeatures`, or add a one-line shim file:
> ```js
> // features.js
> window.__abacusFeatures = window.__abacusItems;
> ```
> loaded after `items.js`. The two files are otherwise identical in shape.

---

## Which version

The main version, currently V6.7, is an interactive tool, designed to be pleasant to use on an average computer screen and making use of animations. A parallel version was created, currently V7L, that has no animations, making the .html lighter, but with a higher resolution for static exports of the diagram. Beside animations, the "lite version" retains other interactive functions.

| | **V6.7** (`…_V6_7.html`) | **V7L** (`…_V7L.html`) |
| --- | --- | --- |
| Canvas | 1800 × 1800 | 3000 × 3000 (geometry scaled ×5/3) |
| Animations | Yes  | **Removed** |
| Highlight functions | Yes | Yes |
| Personalise content | Possible | Possible |
| Use it for | Interactive on-screen use | Large-format / high-res export, printing |

Use **V6.7** for normal interactive use. Use **V7L** when you need a large, static,
high-resolution version and don't want the animations.

---

## Reading the diagram

- **Rings (concentric circles)** = properties (13 by default), drawn from the centre
  outward.
- **Spokes** = features, grouped into three angular sectors:
  **Materials**, **Semi-processed products**, and **Furniture**.
- **Beads** at each crossing encode the value `0 / 1 / 2` (e.g. low / medium / high),
  positioned on the ring by level.
- **Left-hand legend** lists property names, connector lines, and a labelled bead
  column per level.
- **Property groups** (Look / Safety / Durability / Interaction) get a stub, a
  vertical connector, and a group label.
- **Neutral properties** (by default *Feel*, *Risk Type*, *Damage Type*) use **letter
  glyphs** instead of filled beads — the letters come from `letterMapping` in
  `properties.js`.

A feature's value for a property can also be **multiple levels at once**, written as a
comma-separated string in the data (e.g. `"Risk Type": "0,2"`).

---

## Interacting with it

| Action | Result |
| --- | --- |
| **Hover** a feature, property, level, or group | Dims everything else and highlights the target |
| **Hover** a crossing | Highlights that specific bead |
| **Long-press** a filled bead (hold ~2 s) | Reopens its level picker (with a progress ring during the hold) so you can change the value |
| **`+` buttons** (appear on hover, one per sector plus one for properties) | Add a feature to that category, or add a property ring |
| **Click a name / input field** | Rename a feature or property |
| **Reset button** (top-right) | Resets the whole abacus (and replays the intro on V6.7) |
| In a picker: **reset / delete** buttons | Reset a single level to default, reset all modified levels, or delete an added feature/property |

On **V6.7**, input is disabled while the intro animation is playing.

### The intro animation (V6.7 only)

Plays **once per browser session**, and again after a full reset. It types the title,
fades in the legend, sweeps the rings on, grows the feature spokes one by one, then
fills in the beads and buttons. It honors **`prefers-reduced-motion`**: if your system
requests reduced motion, it jumps straight to the finished diagram. There is no
skip gesture.

---

## Saved state (browser storage)

The app persists your edits and some visual state in the browser (per-browser, not
in the files):

| Key | Store | Purpose |
| --- | --- | --- |
| `abacus_user_data_v6` | localStorage | Your added/renamed/deleted features & properties and modified beads |
| `abacus_property_hues_v6` | localStorage | The randomly assigned property ring colors, so they stay stable |
| `abacus_intro_shown_v6` | sessionStorage | Marks the intro as already shown this session (V6.7) |

**To reset to a clean slate**, use the in-app reset button, or clear this site's
storage in your browser's dev tools. Note that edits made in the app live in browser
storage — they do **not** write back to `features.js` / `properties.js`.

---

## Editing the default data

To change the *defaults* (what everyone sees on a fresh load), edit the data files
directly and reload the page.

### `properties.js` — `window.__abacusProperties`

- `list` — every property name, in ring order.
- `groups` — named groups, each listing its property names in ring order. A property
  may appear in at most one group; ungrouped properties get no stub/connector/label.
- `types` — mark a property `"neutral"` to render letter glyphs instead of beads.
- `levelNames` — the three human-readable labels (levels 0/1/2) for each property.
- `letterMapping` — for neutral properties, the letter shown at each level.

### `features.js` — `window.__abacusFeatures`

Three arrays — `materials`, `semiProcessed`, `furniture` — each a list of:

```js
{
  "name": "Concrete",
  "values": {
    "Noticeability": "0",
    "Colour": "1",
    "Risk Type": "2",
    // …one entry per property, value "0" | "1" | "2" (or e.g. "0,2" for multiple)
  }
}
```

Every property name used in `values` must match a name in `properties.js` → `list`.

---

## Notes

- Property ring colors are randomized on first load and then persisted, so a fresh
  browser will pick its own hues.
- Version files are kept deliberately separate; treat V6.7 and V7L as distinct
  builds rather than editing one into the other.
