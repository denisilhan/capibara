import { resources } from "./index";
import { catalogSection } from "../lib/catalog";
import { isAiTool } from "../lib/ai";
import { sampleItems } from "../lib/sample";
import type { Resource } from "../types/index";

const sections = ["api", "bot", "extension", "tool", "ai", "web", "weird"] as const;
export type DiscoverySection = typeof sections[number];
export type DiscoverySelection = Record<DiscoverySection | "all", Resource[]>;

// Called per request on the server, then passed intact to the interactive tabs.
export function createDiscoverySelection(rng: () => number = Math.random): DiscoverySelection {
  const picks: Record<DiscoverySection, Resource[]> = { api: [], bot: [], extension: [], tool: [], ai: [], web: [], weird: [] };
  for (const section of sections) {
    const pool = resources.filter(item => section === "ai" ? isAiTool(item)
      : catalogSection(item) === section && (section !== "tool" || !isAiTool(item)));
    picks[section] = sampleItems(pool, 4, rng);
  }
  return { ...picks, all: [0, 1].flatMap(index => sections.flatMap(section => picks[section][index] ? [picks[section][index]] : [])) };
}
