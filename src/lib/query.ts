import type { Filters } from "./filtering";
import type { SortType } from "../types/index";
export function parseFilters(
  params: Record<string, string | string[] | undefined>,
): Partial<Filters> {
  const one = (key: string) =>
    typeof params[key] === "string" ? params[key] : undefined;
  const sort = one("sort");
  return {
    query: one("q") ?? "",
    players: one("players") ?? "all",
    playStyle: one("playStyle") ?? "all",
    platform: one("platform") ?? "all",
    category: one("category") ?? "all",
    pricing: one("pricing") ?? "all",
    auth: one("auth") ?? "all",
    openSource: one("openSource") ?? "all",
    sort:
      sort &&
      ["trending", "useful", "weird", "beginner", "price", "weirdness-desc", "weirdness-asc"].includes(sort)
        ? (sort as SortType)
        : "trending",
  };
}
