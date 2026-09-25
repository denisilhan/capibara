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
  site({ slug: "neal-fun", name: "neal.fun", description: "a collection of small interactive experiments that turn odd ideas into playable web pages.", categories: ["internet toys"], tags: ["games", "interactive"], officialUrl: "https://neal.fun/" }),
  site({ slug: "radio-garden", name: "radio garden", description: "spin a globe to tune into live radio stations from cities around the world.", categories: ["audio"], tags: ["radio", "maps"], officialUrl: "https://radio.garden/" }),
  site({ slug: "earth-nullschool", name: "earth", description: "an animated globe for exploring wind, ocean currents, and other environmental layers.", categories: ["visualization"], tags: ["weather", "maps"], officialUrl: "https://earth.nullschool.net/" }),
  site({ slug: "window-swap", name: "window swap", description: "look out of shared windows in different places through short first-person videos.", categories: ["exploration"], tags: ["video", "places"], officialUrl: "https://www.window-swap.com/" }),
  site({ slug: "quick-draw", name: "quick, draw!", description: "draw prompted objects while a neural network tries to guess each sketch in real time.", categories: ["games"], tags: ["drawing", "machine learning"], officialUrl: "https://quickdraw.withgoogle.com/" }),
  site({ slug: "the-useless-web", name: "the useless web", description: "a single button sends you to another deliberately strange corner of the internet.", categories: ["internet toys"], tags: ["random", "links"], officialUrl: "https://theuselessweb.com/" }),
  site({ slug: "pointer-pointer", name: "pointer pointer", description: "move the pointer and the page finds a photograph pointing at that spot.", categories: ["internet toys"], tags: ["photography", "interaction"], officialUrl: "https://pointerpointer.com/" }),
  site({ slug: "zoomquilt", name: "zoomquilt", description: "an illustrated scene keeps zooming inward through a continuous sequence of surreal environments.", categories: ["visualization"], tags: ["art", "animation"], officialUrl: "https://zoomquilt.org/" }),
];

