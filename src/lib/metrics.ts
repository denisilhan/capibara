import type { Api, Resource } from "../types/index";
export function pricingOf(item: Resource) {
  return item.kind === "api" ? item.pricingType : item.pricing;
}
export function priceValue(api: Api): number | null {
  return api.pricingType === "free" ? 0 : api.startingPrice;
}
export function median(values: number[]): number | null {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}
// Median is of known paid monthly starting prices, not free plans. Never mix currencies.
export function medianPrice(
  items: Api[],
): { value: number; currency: string } | null {
  const priced = items.filter(
    (a) =>
      a.startingPrice !== null &&
      a.currency !== null &&
      a.pricePeriod === "month" &&
      a.pricingType !== "free",
  );
  const currencies = new Set(priced.map((a) => a.currency));
  if (currencies.size !== 1) return null;
  const value = median(priced.map((a) => a.startingPrice!));
  return value === null ? null : { value, currency: priced[0].currency! };
}
export const formatNumber = (value: number) =>
  value >= 1000 ? `${(value / 1000).toFixed(1)}k` : String(value);
export function formatMoney(value: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value);
}
export function getMetrics(items: Resource[]) {
  const apiItems = items.filter((a): a is Api => a.kind === "api");
  const freeTier = apiItems.filter((a) => a.freeTier === true).length;
  const noAuth = apiItems.filter((a) => a.authType === "none").length;
  const distribution: Record<string, number> = {
    free: 0,
    freemium: 0,
    paid: 0,
    unknown: 0,
  };
  const authDistribution: Record<string, number> = {
    none: 0,
    "api-key": 0,
    oauth: 0,
    unknown: 0,
  };
  for (const item of items) distribution[pricingOf(item) ?? "unknown"]++;
  for (const item of apiItems) authDistribution[item.authType ?? "unknown"]++;
  const scored = items.filter((a) => "usefulnessScore" in a);
  return {
    total: items.length,
    apis: apiItems.length,
    bots: items.filter((a) => a.kind === "bot").length,
    tools: items.filter((a) => a.kind === "tool").length,
    weird: items.filter((a) => a.kind === "weird").length,
    categories: [...new Set(items.flatMap((a) => a.categories))].sort(),
    freeTier,
    noAuth,
    freeTierPercent: apiItems.length
      ? Math.round((freeTier / apiItems.length) * 100)
      : 0,
    noAuthPercent: apiItems.length
      ? Math.round((noAuth / apiItems.length) * 100)
      : 0,
    averageUsefulness: scored.length
      ? items.reduce((n, a) => n + ("usefulnessScore" in a ? a.usefulnessScore : 0), 0) / scored.length
      : 0,
    averageWeirdness: scored.length
      ? items.reduce((n, a) => n + ("weirdnessScore" in a ? a.weirdnessScore : 0), 0) / scored.length
      : 0,
    medianPrice: medianPrice(apiItems),
    distribution,
    authDistribution,
  };
}
