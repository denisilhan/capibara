import type {
  Api,
  CollectionDefinition,
  Resource,
  SortType,
} from "../types/index";
import { priceValue, pricingOf } from "./metrics";
export const searchMatches = (item: Resource, query: string): boolean => {
  const text = [
    item.name,
    item.description,
    ...item.categories,
    ...item.tags,
    ...(item.kind === "tool" ? item.platform : []),
    ...(item.kind === "web" ? [...(item.players ?? []), ...(item.playStyles ?? [])] : []),
    item.kind === "api" || item.kind === "tool" ? item.provider : item.kind === "bot" ? "discord bot" : item.kind === "web" ? item.section : "weird web",
  ]
    .join(" ")
    .toLocaleLowerCase();
  return query
    .toLocaleLowerCase()
    .trim()
    .split(/\s+/)
    .every((word) => text.includes(word));
};
export function matchesCollection(
  item: Resource,
  collection: CollectionDefinition,
): boolean {
  if (
    collection.resourceType !== "all" &&
    item.kind !== collection.resourceType
  )
    return false;
  const r = collection.rules;
  if (r.categories && !r.categories.some((c) => item.categories.includes(c)))
    return false;
  if (r.tags && !r.tags.some((t) => item.tags.includes(t))) return false;
  const pricing = pricingOf(item);
  if (r.pricing && (!pricing || !r.pricing.includes(pricing))) return false;
  if (
    r.auth &&
    (item.kind !== "api" || !item.authType || !r.auth.includes(item.authType))
  )
    return false;
  if (
    r.freeTier !== undefined &&
    (item.kind !== "api" || item.freeTier !== r.freeTier)
  )
    return false;
  if (r.minUsefulness !== undefined && (!("usefulnessScore" in item) || item.usefulnessScore < r.minUsefulness))
    return false;
  if (r.minWeirdness !== undefined && (!("weirdnessScore" in item) || item.weirdnessScore < r.minWeirdness))
    return false;
  if (
    r.minBeginnerScore !== undefined &&
    (item.kind !== "api" || item.beginnerScore < r.minBeginnerScore)
  )
    return false;
  if (
    r.openSource !== undefined &&
    ((item.kind !== "bot" && item.kind !== "tool") || item.isOpenSource !== r.openSource)
  )
    return false;
  return true;
}
export interface Filters {
  query: string;
  category: string;
  pricing: string;
  auth: string;
  openSource: string;
  sort: SortType;
  platform?: string;
  players?: string;
  playStyle?: string;
}
export function sortResources<T extends Resource>(
  items: T[],
  sort: SortType,
): T[] {
  return [...items].sort((a, b) => {
    let result = 0;
    if (sort === "weirdness-desc" || sort === "weirdness-asc") {
      const left = a.kind === "weird" ? a.weirdness?.level : undefined;
      const right = b.kind === "weird" ? b.weirdness?.level : undefined;
      result = left === undefined ? (right === undefined ? 0 : 1)
        : right === undefined ? -1
        : sort === "weirdness-desc" ? right - left : left - right;
    } else if (sort === "price") {
      const pa = a.kind === "api" ? priceValue(a) : pricingOf(a) === "free" ? 0 : null,
        pb = b.kind === "api" ? priceValue(b) : pricingOf(b) === "free" ? 0 : null;
      result = pa === null ? (pb === null ? 0 : 1) : pb === null ? -1 : pa - pb;
    } else if (sort === "weird") result = ("weirdnessScore" in b ? b.weirdnessScore : 0) - ("weirdnessScore" in a ? a.weirdnessScore : 0);
    else if (sort === "useful") result = ("usefulnessScore" in b ? b.usefulnessScore : 0) - ("usefulnessScore" in a ? a.usefulnessScore : 0);
    else if (sort === "beginner")
      result =
        (b.kind === "api" ? b.beginnerScore : 0) -
        (a.kind === "api" ? a.beginnerScore : 0);
    else result = Number(b.kind === "api" && b.featured) - Number(a.kind === "api" && a.featured);
    return result || a.name.localeCompare(b.name);
  });
}
export function filterResources<T extends Resource>(
  items: T[],
  f: Filters,
): T[] {
  return sortResources(
    items.filter(
      (item) =>
        searchMatches(item, f.query) &&
        (!f.players || f.players === "all" || (item.kind === "web" && item.players?.some(value => value === f.players))) &&
        (!f.playStyle || f.playStyle === "all" || (item.kind === "web" && item.playStyles?.some(value => value === f.playStyle))) &&
        (!f.platform || f.platform === "all" || (item.kind === "tool" && item.platform.includes(f.platform))) &&
        (f.category === "all" || item.categories.includes(f.category)) &&
        (f.pricing === "all" || (pricingOf(item) ?? "unknown") === f.pricing) &&
        (f.auth === "all" ||
          (item.kind === "api" && (item.authType ?? "unknown") === f.auth)) &&
        (f.openSource === "all" ||
          ((item.kind === "bot" || item.kind === "tool") &&
            (f.openSource === "yes"
              ? item.isOpenSource === true
              : f.openSource === "no"
                ? item.isOpenSource === false
                : item.isOpenSource === null))),
    ),
    f.sort,
  );
}
export function relatedApis(api: Api, items: Api[]): Api[] {
  return items
    .filter(
      (a) =>
        a.id !== api.id && a.categories.some((c) => api.categories.includes(c)),
    )
    .sort((a, b) => b.usefulnessScore - a.usefulnessScore)
    .slice(0, 3);
}
export function randomResource(
  items: Resource[],
  previousId?: string,
  rng: () => number = Math.random,
): Resource | undefined {
  const choices =
    items.length > 1 ? items.filter((i) => i.id !== previousId) : items;
  return choices[Math.floor(rng() * choices.length)];
}
