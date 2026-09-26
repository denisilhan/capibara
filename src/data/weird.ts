import type { WeirdWeb } from "../types/index";

type Seed = Pick<WeirdWeb, "slug" | "name" | "description" | "categories" | "officialUrl"> & Partial<WeirdWeb>;
function site(seed: Seed): WeirdWeb {
  return {
    kind: "weird",
    id: `weird-${seed.slug}`,
    tags: [],
    pricing: null,
    loginRequired: null,
    sourceVerifiedAt: "2026-09-25",
    sources: [{ url: seed.officialUrl, label: "official website", facts: "site purpose and reachable official destination reviewed; account and pricing status are left unknown." }],
    ...seed,
  };
}
export const weird: WeirdWeb[] = [
  site({
  "slug": "human-terrain",
  "name": "human terrain",
  "description": "explore population density as a three-dimensional landscape of peaks and valleys.",
  "overview": "a visual essay based on historical population datasets, including 1975, 1990, and 2015; it is not a live population map.",
  "categories": [
    "visualization"
  ],
  "tags": [
    "maps",
    "data"
  ],
  "officialUrl": "https://pudding.cool/2018/10/city_3d/",
  "weirdness": {
    "level": 1,
    "reason": "population counts become a terrain you can travel across."
  },
  "sourceVerifiedAt": "2026-09-27",
  "sources": [
    {
      "url": "https://pudding.cool/2018/10/city_3d/",
      "label": "official documentation / creator page",
      "facts": "creator page and interaction purpose reviewed."
    }
  ]
}),
  site({
  "slug": "myinstants",
  "name": "myinstants",
  "description": "browse a soundboard of short meme clips, reactions, and sound effects.",
  "overview": "pick a category and play individual sound buttons. the catalogue is user-contributed, so content and volume vary.",
  "categories": [
    "audio"
  ],
  "tags": [
    "soundboard",
    "memes"
  ],
  "officialUrl": "https://www.myinstants.com/",
  "weirdness": {
    "level": 2,
    "reason": "a wall of buttons turns internet reactions into a playable sound collection."
  },
  "sourceVerifiedAt": "2026-09-27",
  "sources": [
    {
      "url": "https://www.myinstants.com/",
      "label": "official documentation / creator page",
      "facts": "creator page and interaction purpose reviewed."
    }
  ]
}),
  site({"slug": "adoorable", "name": "it’s a(door)able", "description": "explore a tiny playable greeting that can carry a personal message.", "categories": ["internet toys"], "tags": ["interactive"], "officialUrl": "https://ncase.me/door/", "sourceVerifiedAt": "2026-09-27", "weirdness": {"level": 2, "reason": "a greeting becomes a small interactive toy."}, "sources": [{"url": "https://ncase.me/door/", "label": "creator website", "facts": "interactive premise and creator destination reviewed."}]}),
  site({"slug": "absurd-trolley-problems", "name": "absurd trolley problems", "description": "make increasingly odd decisions in an interactive take on the trolley problem.", "categories": ["internet toys"], "tags": ["interactive"], "officialUrl": "https://neal.fun/absurd-trolley-problems/", "sourceVerifiedAt": "2026-09-27", "weirdness": {"level": 2, "reason": "a familiar moral dilemma becomes an absurd interactive sequence."}, "sources": [{"url": "https://neal.fun/absurd-trolley-problems/", "label": "creator website", "facts": "interactive premise and creator destination reviewed."}]}),
  site({ slug: "neal-fun", weirdness: { level: 2, reason: "ordinary ideas become unexpected little interactive worlds." }, name: "neal.fun", description: "a collection of small interactive experiments that turn odd ideas into playable web pages.", categories: ["internet toys"], tags: ["games", "interactive"], officialUrl: "https://neal.fun/" }),
  site({ slug: "radio-garden", weirdness: { level: 1, reason: "a familiar radio becomes a globe you can explore." }, name: "radio garden", description: "spin a globe to tune into live radio stations from cities around the world.", categories: ["audio"], tags: ["radio", "maps"], officialUrl: "https://radio.garden/" }),
  site({ slug: "earth-nullschool", weirdness: { level: 1, reason: "real environmental data becomes a moving planetary portrait." }, name: "earth", description: "an animated globe for exploring wind, ocean currents, and other environmental layers.", categories: ["visualization"], tags: ["weather", "maps"], officialUrl: "https://earth.nullschool.net/" }),
  site({ slug: "window-swap", weirdness: { level: 2, reason: "someone else’s everyday window becomes the entire experience." }, name: "window swap", description: "look out of shared windows in different places through short first-person videos.", categories: ["exploration"], tags: ["video", "places"], officialUrl: "https://www.window-swap.com/" }),
  site({ slug: "quick-draw", weirdness: { level: 1, reason: "a drawing game with a machine trying to guess your scribbles." }, name: "quick, draw!", description: "draw prompted objects while a neural network tries to guess each sketch in real time.", categories: ["games"], tags: ["drawing", "machine learning"], officialUrl: "https://quickdraw.withgoogle.com/" }),
  site({ slug: "the-useless-web", weirdness: { level: 3, reason: "the whole purpose is to send you into deliberate internet absurdity." }, name: "the useless web", description: "a single button sends you to another deliberately strange corner of the internet.", categories: ["internet toys"], tags: ["random", "links"], officialUrl: "https://theuselessweb.com/" }),
  site({ slug: "pointer-pointer", weirdness: { level: 2, reason: "an entire photo collection exists just to point at your cursor." }, name: "pointer pointer", description: "move the pointer and the page finds a photograph pointing at that spot.", categories: ["internet toys"], tags: ["photography", "interaction"], officialUrl: "https://pointerpointer.com/" }),
  site({ slug: "zoomquilt", weirdness: { level: 3, reason: "surreal scenes fold into one another in an endless visual loop." }, name: "zoomquilt", description: "an illustrated scene keeps zooming inward through a continuous sequence of surreal environments.", categories: ["visualization"], tags: ["art", "animation"], officialUrl: "https://zoomquilt.org/" }),
  site({
    "slug": "evolution-of-trust", weirdness: { level: 1, reason: "a familiar social question becomes a playable thought experiment." },
    "name": "the evolution of trust",
    "description": "play through small choices to explore how trust and cooperation work.",
    "overview": "an interactive explanation of game theory. make choices, see how different strategies behave, and change the rules to explore the result.",
    "categories": [
      "interactive learning"
    ],
    "tags": [
      "games",
      "game theory"
    ],
    "officialUrl": "https://ncase.me/trust/",
    "pricing": "free",
    "sources": [
      {
        "url": "https://ncase.me/",
        "label": "official website",
        "facts": "the creator links the interactive game-theory guide and describes the work as freely available."
      }
    ],
    "sourceVerifiedAt": "2026-09-26"
  }),
  site({
    "slug": "patatap", weirdness: { level: 2, reason: "ordinary keystrokes become an unpredictable audiovisual performance." },
    "name": "patatap",
    "description": "turn keyboard presses and taps into short sounds and animated shapes.",
    "overview": "try a few keys or taps to build a little audiovisual pattern. the creator warns that the experience contains flashing images.",
    "categories": [
      "internet toys",
      "audio"
    ],
    "tags": [
      "music",
      "animation"
    ],
    "officialUrl": "https://patatap.com/",
    "sources": [
      {
        "url": "https://patatap.com/",
        "label": "official website",
        "facts": "interactive animation and sound kit; the official page warns of flashing images. pricing and login requirements not recorded."
      }
    ],
    "sourceVerifiedAt": "2026-09-26"
  }),
  site({
    "slug": "chrome-music-lab", weirdness: { level: 1, reason: "playful experiments make familiar musical ideas tangible." },
    "name": "chrome music lab",
    "description": "explore rhythm, melody, and sound through small interactive music experiments.",
    "overview": "open an experiment and start playing with its controls. Song Maker lets you put together and share a short song. the official guide says no account is needed.",
    "categories": [
      "interactive learning",
      "audio"
    ],
    "tags": [
      "music",
      "creative coding"
    ],
    "officialUrl": "https://musiclab.chromeexperiments.com/Experiments",
    "loginRequired": false,
    "sources": [
      {
        "url": "https://musiclab.chromeexperiments.com/Experiments",
        "label": "official website",
        "facts": "music experiments, Song Maker, and explicitly documented account-free access."
      }
    ],
    "sourceVerifiedAt": "2026-09-26"
  }),
  site({
    "slug": "typatone", weirdness: { level: 2, reason: "everyday writing doubles as a musical composition." },
    "name": "typatone",
    "description": "write a message and hear each letter become a musical note.",
    "overview": "type a few words and listen to the pattern they create. it is a small experiment in turning everyday writing into sound.",
    "categories": [
      "internet toys",
      "audio"
    ],
    "tags": [
      "music",
      "writing"
    ],
    "officialUrl": "https://typatone.com/",
    "sources": [
      {
        "url": "https://typatone.com/",
        "label": "official website",
        "facts": "letters are mapped to musical notes; pricing and account requirements not recorded."
      }
    ],
    "sourceVerifiedAt": "2026-09-26"
  }),
  site({
  "slug": "sandspiel", weirdness: { level: 1, reason: "a sandbox turns simple particles into surprising interactions." },
  "name": "sandspiel",
  "description": "draw a tiny world of falling particles and watch it interact.",
  "overview": "paint a scene, let the simulation run, and experiment with how the materials behave. shared creations make good starting points for your own experiments.",
  "categories": [
    "internet toys",
    "simulation"
  ],
  "tags": [
    "particles",
    "creative coding"
  ],
  "officialUrl": "https://sandspiel.club/",
  "sources": [
    {
      "url": "https://github.com/MaxBittker/sandspiel",
      "label": "official project",
      "facts": "official browser game, simulation and sharing features."
    }
  ],
  "sourceVerifiedAt": "2026-09-26"
}),
  site({
  "slug": "webgl-fluid", weirdness: { level: 1, reason: "a familiar fluid simulation becomes something you can paint with." },
  "name": "webgl fluid simulation",
  "description": "stir colorful fluids in an interactive browser simulation.",
  "overview": "move through the canvas to disturb the fluid and see the patterns develop. the creator also provides the source code if you want to explore the simulation.",
  "categories": [
    "visualization",
    "simulation"
  ],
  "tags": [
    "webgl",
    "creative coding"
  ],
  "officialUrl": "https://paveldogreat.github.io/WebGL-Fluid-Simulation/",
  "sources": [
    {
      "url": "https://github.com/PavelDoGreat/WebGL-Fluid-Simulation",
      "label": "official project",
      "facts": "official browser simulation and linked live demo."
    }
  ],
  "sourceVerifiedAt": "2026-09-26"
}),
  site({
  "slug": "silk", weirdness: { level: 1, reason: "simple gestures grow into intricate symmetrical drawings." },
  "name": "silk",
  "description": "draw flowing, symmetrical patterns with interactive generative art.",
  "categories": [
    "internet toys",
    "visualization"
  ],
  "tags": [
    "drawing",
    "art"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://weavesilk.com/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "officialUrl": "https://weavesilk.com/",
  "overview": "drag across the canvas, change colors, and experiment with symmetry to make a pattern."
}),
  site({
  "slug": "cursor-effects", weirdness: { level: 2, reason: "the cursor becomes a tiny performance of its own." },
  "name": "90s cursor effects",
  "description": "try a collection of playful trails that follow your mouse.",
  "categories": [
    "internet toys"
  ],
  "tags": [
    "nostalgia",
    "creative coding"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://cursoreffects.com/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "officialUrl": "https://cursoreffects.com/",
  "overview": "move the pointer and click to cycle between the effects. the page also links to the implementation for your own experiments."
}),
  site({
  "slug": "loopy", weirdness: { level: 1, reason: "circles and arrows turn abstract feedback into a toy." },
  "name": "loopy",
  "description": "draw circles and arrows to play with simple feedback systems.",
  "categories": [
    "interactive learning",
    "simulation"
  ],
  "tags": [
    "systems",
    "visualization"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://ncase.me/loopy/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "officialUrl": "https://ncase.me/loopy/",
  "overview": "change a value and watch effects travel through the model. it is a visual way to explore feedback loops, not a source of measured predictions."
}),
  site({
  "slug": "babel-image-archives", weirdness: { level: 3, reason: "browsing images becomes a sprawling conceptual experiment." },
  "name": "babel image archives",
  "description": "explore a strange image library through search and a universal slideshow.",
  "categories": [
    "exploration",
    "internet toys"
  ],
  "tags": [
    "generative",
    "images"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://babelia.libraryofbabel.info/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "officialUrl": "https://babelia.libraryofbabel.info/",
  "overview": "try the slideshow or image-search interface to explore the visual side of the Library of Babel project."
}),
  site({
  "slug": "heeeeeeeey", weirdness: { level: 3, reason: "a stretched-out greeting is the entire point of the page." },
  "name": "heeeeeeeey",
  "description": "open a deliberately silly page built around one very long greeting.",
  "categories": [
    "internet toys"
  ],
  "tags": [
    "absurd",
    "typography"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://heeeeeeeey.com/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "officialUrl": "https://heeeeeeeey.com/",
  "overview": "a tiny web joke for when you want something unexpected rather than a practical tool."
}),
];

