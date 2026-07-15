// Default property definitions. Loaded by abacus.html via a <script>
// tag (works via file:// — no fetch, no CORS, no local server).
// To edit the defaults, edit this file and reload the page.
window.__abacusProperties = {
  "list": [
    "Noticeability",
    "Colour",
    "Feel",
    "Normal Use",
    "Misuse",
    "Risk Type",
    "Normal Use 2",
    "Vandalize",
    "Damage Type",
    "Tactility",
    "Weight",
    "Flexibility",
    "Transparency"
  ],
  // Property groups. Each entry lists the property names (matching "list")
  // that belong to that group, in ring order. Order of the groups here is the
  // order they are drawn. A property may appear in at most one group; any
  // property not listed here is ungrouped (no stub / connector / label).
  // Future user-created groups are appended to this same structure.
  "groups": [
    { "name": "Look",        "properties": ["Noticeability", "Colour", "Feel"] },
    { "name": "Safety",      "properties": ["Normal Use", "Misuse", "Risk Type"] },
    { "name": "Durability",  "properties": ["Normal Use 2", "Vandalize", "Damage Type"] },
    { "name": "Interaction", "properties": ["Tactility", "Weight", "Flexibility", "Transparency"] }
  ],
  "types": {
    "Feel": "neutral",
    "Risk Type": "neutral",
    "Damage Type": "neutral"
  },
  "levelNames": {
    "Noticeability": [
      "muted",
      "distinctive",
      "flashy"
    ],
    "Colour": [
      "plain",
      "subtly coloured",
      "brightly coloured"
    ],
    "Feel": [
      "industrial",
      "traditional",
      "natural"
    ],
    "Normal Use": [
      "dangerous",
      "risky",
      "safe"
    ],
    "Misuse": [
      "dangerous",
      "risky",
      "safe"
    ],
    "Risk Type": [
      "temperature",
      "cutting",
      "hitting"
    ],
    "Normal Use 2": [
      "decayable",
      "durable",
      "long-lasting"
    ],
    "Vandalize": [
      "fragile",
      "breakable",
      "sturdy"
    ],
    "Damage Type": [
      "shattering",
      "fraying",
      "chunking"
    ],
    "Tactility": [
      "rough",
      "textured",
      "smooth"
    ],
    "Weight": [
      "lightweight",
      "medium-heavy",
      "heavy"
    ],
    "Flexibility": [
      "rigid",
      "flexible",
      "pliable"
    ],
    "Transparency": [
      "opaque",
      "translucid",
      "transparent"
    ]
  },
  "letterMapping": {
    "Feel": {
      "0": "I",
      "1": "T",
      "2": "N"
    },
    "Risk Type": {
      "0": "T",
      "1": "C",
      "2": "H"
    },
    "Damage Type": {
      "0": "S",
      "1": "F",
      "2": "C"
    }
  }
};
