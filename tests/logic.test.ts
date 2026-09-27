import { sampleItems } from "../src/lib/sample";
import { createDiscoverySelection } from "../src/data/discovery";
import { signInLabel } from "../src/lib/access";
import { test } from "node:test";
import assert from "node:assert/strict";
import { apis } from "../src/data/apis";
import { bots } from "../src/data/bots";
import { aiSections, isAiTool } from "../src/lib/ai";
import { parseFilters } from "../src/lib/query";
import { tools, developerTools, extensions } from "../src/data/tools";
import { weird } from "../src/data/weird";
import { websites } from "../src/data/web";
import { resources } from "../src/data/index";
import { collections } from "../src/data/collections";
import {
  getMetrics,
  median,
  medianPrice,
  priceValue,
} from "../src/lib/metrics";
import {
  sanitizeFilters,
  filterResources,
  matchesCollection,
  randomResource,
  sortResources,
} from "../src/lib/filtering";
import { isBrowserExtension, catalogSection } from "../src/lib/catalog";
import { verifiedInviteUrl } from "../src/lib/links";
import type { Api } from "../src/types/index";
test("seed records have unique IDs/slugs, reviewed HTTPS sources, and valid editorial scores", () => {
  assert.equal(apis.length, 60);
  assert.equal(tools.length, 54);
  assert.equal(weird.length, 23);
  assert.equal(bots.length, 34);
  assert.equal(new Set(resources.map((r) => r.id)).size, resources.length);
  for (const r of resources) {
    assert.ok(r.sourceVerifiedAt);
    assert.ok(r.sources.length);
    for (const s of r.sources) assert.equal(new URL(s.url).protocol, "https:");
    if ("usefulnessScore" in r) assert.ok(r.usefulnessScore >= 0 && r.usefulnessScore <= 10);
    if ("weirdnessScore" in r) assert.ok(r.weirdnessScore >= 0 && r.weirdnessScore <= 10);
  }
});
test("lowest price puts free first, numeric prices next, and nulls last without mutation", () => {
  const base = apis[0];
  const sample: Api[] = [
    { ...base, id: "unknown", pricingType: "freemium", startingPrice: null },
    { ...base, id: "paid", pricingType: "paid", startingPrice: 9 },
    { ...base, id: "free", pricingType: "free", startingPrice: null },
    { ...base, id: "paid-low", pricingType: "paid", startingPrice: 4 },
  ];
  assert.deepEqual(
    sortResources(sample, "price").map((a) => a.id),
    ["free", "paid-low", "paid", "unknown"],
  );
  assert.equal(sample[0].id, "unknown");
  assert.equal(priceValue(sample[0]), null);
  assert.equal(priceValue(sample[2]), 0);
});
test("median handles empty, odd, even, unknown and mixed-currency inputs", () => {
  assert.equal(median([]), null);
  assert.equal(median([9, 1, 3]), 3);
  assert.equal(median([10, 2, 6, 4]), 5);
  const paid = {
    ...apis[0],
    pricingType: "paid" as const,
    pricePeriod: "month" as const,
    currency: "USD",
  };
  assert.deepEqual(
    medianPrice([
      { ...paid, startingPrice: 9 },
      { ...paid, startingPrice: 3 },
      { ...paid, startingPrice: null },
    ]),
    { value: 6, currency: "USD" },
  );
  assert.equal(
    medianPrice([
      { ...paid, startingPrice: 4, currency: "EUR" },
      { ...paid, startingPrice: 5 },
    ]),
    null,
  );
  assert.equal(
    medianPrice([{ ...paid, pricingType: "free", startingPrice: 0 }]),
    null,
  );
});
test("filters combine search, pricing, category and auth; metrics recalculate on results", () => {
  const result = filterResources(apis, {
    query: "typicode",
    category: "tools",
    pricing: "free",
    auth: "none",
    openSource: "all",
    sort: "useful",
  });
  assert.equal(result.length, 1);
  assert.equal(result[0].slug, "jsonplaceholder");
  const m = getMetrics(result);
  assert.equal(m.total, 1);
  assert.equal(m.freeTier, 1);
  assert.equal(m.noAuth, 1);
  assert.equal(m.freeTierPercent, 100);
  assert.equal(m.medianPrice, null);
  const empty = getMetrics([]);
  assert.equal(empty.averageUsefulness, 0);
  assert.equal(empty.noAuthPercent, 0);
});
test("bot filtering includes source status and excludes unknown source records", () => {
  const result = filterResources(bots, {
    query: "",
    category: "all",
    pricing: "all",
    auth: "all",
    openSource: "yes",
    sort: "useful",
  });
  assert.equal(result.length, 4);
  assert.ok(result.every((r) => r.isOpenSource === true));
});
test("collections are serializable and declarative rules reject wrong resource kinds", () => {
  const copy = JSON.parse(JSON.stringify(collections)) as typeof collections;
  for (const c of copy) {
    assert.ok(resources.some((r) => matchesCollection(r, c)));
    assert.deepEqual(
      resources.filter((r) => matchesCollection(r, c)).map((r) => r.id),
      resources
        .filter((r) =>
          matchesCollection(
            r,
            collections.find((x) => x.id === c.id)!,
          ),
        )
        .map((r) => r.id),
    );
  }
  const free = collections.find((c) => c.id === "no-auth")!;
  assert.ok(
    resources
      .filter((r) => matchesCollection(r, free))
      .every((r) => r.kind === "api" && r.freeTier && r.authType === "none"),
  );
  assert.equal(matchesCollection(bots[0], free), false);
});
test("random discovery excludes the previous item and gracefully handles singleton/empty pools", () => {
  assert.notEqual(
    randomResource(resources, resources[0].id, () => 0)?.id,
    resources[0].id,
  );
  assert.equal(
    randomResource([resources[0]], resources[0].id)?.id,
    resources[0].id,
  );
  assert.equal(randomResource([]), undefined);
});
test("invite gate rejects missing verification, unsafe schemes and unreviewed redirects", () => {
  const bot = bots.find((b) => b.slug === "sapphire")!;
  assert.equal(verifiedInviteUrl(bot), "https://sapph.xyz/invite");
  assert.equal(verifiedInviteUrl({ ...bot, verifiedInvite: false }), null);
  assert.equal(verifiedInviteUrl({ ...bot, inviteSourceUrl: null }), null);
  assert.equal(
    verifiedInviteUrl({ ...bot, inviteUrl: "https://evil.example/invite" }),
    null,
  );
  assert.equal(
    verifiedInviteUrl({ ...bot, inviteUrl: "javascript:alert(1)" }),
    null,
  );
  assert.equal(
    verifiedInviteUrl({
      ...bot,
      inviteUrl:
        "https://discord.com.evil.example/oauth2/authorize?client_id=123&scope=bot",
    }),
    null,
  );
  for (const b of bots.filter((b) => !b.verifiedInvite))
    assert.equal(verifiedInviteUrl(b), null);
});
test("new catalogs participate in search, collections, and random selection", () => {
  assert.equal(resources.length, apis.length + bots.length + tools.length + weird.length + websites.length);
  const defaults = {
    query: "",
    category: "all",
    pricing: "all",
    auth: "all",
    openSource: "all",
    sort: "trending" as const,
  };
  assert.deepEqual(filterResources(resources, { ...defaults, query: "bruno" }).map((item) => item.slug), ["bruno"]);
  assert.deepEqual(filterResources(resources, { ...defaults, query: "zoomquilt" }).map((item) => item.slug), ["zoomquilt"]);
  const openTools = collections.find((item) => item.slug === "open-source-tools")!;
  assert.ok(tools.filter((item) => matchesCollection(item, openTools)).length > 0);
  assert.deepEqual(filterResources(weird, { ...defaults, pricing: "free" }).map((item) => item.slug), ["evolution-of-trust"]);
  assert.equal(weird.find((item) => item.slug === "chrome-music-lab")?.loginRequired, false);
  assert.equal(weird.find((item) => item.slug === "zoomquilt")?.pricing, null);
  assert.notEqual(randomResource(tools, tools[0].id, () => 0)?.id, tools[0].id);
});


 test("tool source filters distinguish true, false and unknown; browser search combines with extension category", () => {
  const base = tools[0];
  const sample = [true, false, null].map((isOpenSource, i) => ({ ...base, id: String(i), isOpenSource }));
  const f = { query: "", category: "all", pricing: "all", auth: "all", openSource: "all", sort: "trending" as const };
  for (const [value, expected] of [["yes", "0"], ["no", "1"], ["unknown", "2"]]) {
    assert.deepEqual(filterResources(sample, { ...f, openSource: value }).map(r => r.id), [expected]);
  }
  const result = filterResources(tools, { ...f, query: "brave", category: "browser extensions" });
  assert.deepEqual(result.map(r => r.slug), ["bitwarden", "singlefile"]);
});

test("extensions and tools form disjoint catalogs with honest AI classifications", () => {
 assert.equal(extensions.length, 18);
 assert.equal(developerTools.length, 36);
 assert.equal(extensions.length + developerTools.length, tools.length);
 assert.ok(extensions.every(isBrowserExtension));
 assert.ok(developerTools.every(r => !isBrowserExtension(r)));
 assert.equal(catalogSection(tools.find(r => r.slug === "gemini-in-chrome")!), "tool");
 assert.equal(catalogSection(tools.find(r => r.slug === "claude-in-chrome")!), "extension");
 assert.equal(tools.find(r => r.slug === "sider")?.provider, "sider");
 for (const r of tools) assert.equal(r.categories.includes("browser extensions"), isBrowserExtension(r));
 const metrics = getMetrics(resources);
 assert.equal(metrics.apis + metrics.bots + metrics.tools + metrics.extensions + metrics.weird + metrics.web, resources.length);
 for (const kind of ["api", "bot", "tool", "extension", "weird"]) assert.ok(resources.some(r => catalogSection(r) === kind));
});


test("browser filter combines with category and search and leaves other kinds out", () => {
 const defaults = { query: "", category: "all", pricing: "all", auth: "all", openSource: "all", sort: "trending" as const };
 const result = filterResources(resources, { ...defaults, platform: "firefox" });
 assert.ok(result.length > 0);
 assert.ok(result.every(item => item.kind === "tool" && item.platform.includes("firefox")));
 assert.deepEqual(filterResources(extensions, { ...defaults, platform: "chrome", query: "shazam" }).map(item => item.slug), ["shazam"]);
 assert.equal(filterResources(extensions, { ...defaults, platform: "firefox", query: "shazam" }).length, 0);
 assert.equal(filterResources(extensions, { ...defaults, platform: "all" }).length, extensions.length);
});


test("weirdness sort uses three levels, keeps missing ratings last and does not mutate", () => {
 const sample = [
  { ...weird[0], id: "unknown", name: "a unknown", weirdness: undefined },
  { ...weird[0], id: "high", name: "z high", weirdness: { level: 3 as const, reason: "test" } },
  { ...weird[0], id: "low", name: "a low", weirdness: { level: 1 as const, reason: "test" } },
  { ...weird[0], id: "tie", name: "a high", weirdness: { level: 3 as const, reason: "test" } },
 ];
 assert.deepEqual(sortResources(sample, "weirdness-desc").map(r => r.id), ["tie", "high", "low", "unknown"]);
 assert.deepEqual(sortResources(sample, "weirdness-asc").map(r => r.id), ["low", "tie", "high", "unknown"]);
 assert.deepEqual(sample.map(r => r.id), ["unknown", "high", "low", "tie"]);
});

test("game filters separate players, genre and play style without mixing other catalogs", () => {
 const f = { query: "", category: "all", pricing: "all", auth: "all", openSource: "all", sort: "trending" as const };
 assert.deepEqual(filterResources(resources, { ...f, players: "solo", playStyle: "time attack" }).map(r => r.slug), ["polytrack", "tetr-io"]);
 const geography = filterResources(resources, { ...f, players: "solo", category: "geography" });
 assert.equal(geography.length, 5);
 assert.ok(geography.some(r => r.slug === "timeguessr"));
 assert.equal(filterResources(resources, { ...f, players: "group", category: "geography" }).length, 0);
 assert.ok(filterResources(resources, { ...f, players: "group" }).every(r => r.kind === "web" && r.section === "games"));
 assert.ok(!filterResources(websites, { ...f, pricing: "free" }).some(r => r.pricing === null));
});


test("web and weird catalogs do not duplicate destinations", () => {
 const urls = [...websites, ...weird].map(r => r.officialUrl.replace(/\/$/, ""));
 assert.equal(new Set(urls).size, urls.length);
});


test("mixed price sorting includes known free bots and websites before unknown prices", () => {
 const free = { ...bots[0], id: "free-bot", pricing: "free" as const };
 const unknown = { ...websites[0], id: "unknown-web", pricing: null };
 const paid = { ...apis[0], id: "paid-api", pricingType: "paid" as const, startingPrice: 4 };
 assert.deepEqual(sortResources([unknown, paid, free], "price").map(r => r.id), ["free-bot", "paid-api", "unknown-web"]);
});


test("AI use cases share canonical tools, have coverage, and never inflate resource counts", () => {
  const ai = resources.filter(isAiTool);
  assert.equal(ai.length, 19);
  assert.ok(ai.every(item => developerTools.includes(item)));
  assert.ok(ai.every(item => !isBrowserExtension(item)));
  for (const section of aiSections) assert.ok(ai.filter(item => item.aiAreas?.includes(section.id)).length >= 2, section.id);
  for (const item of ai) {
    assert.equal(new Set(item.aiAreas).size, item.aiAreas?.length);
    assert.ok(item.aiAreas?.every(area => aiSections.some(section => section.id === area)));
    assert.equal(resources.filter(resource => resource.id === item.id).length, 1);
  }
  assert.deepEqual(ai.find(item => item.slug === "framer")?.aiAreas, ["web", "design"]);
  assert.equal(ai.find(item => item.slug === "langgraph")?.toolType, "agent framework");
});

test("AI filters combine type, platform and search without treating missing pricing as free", () => {
  const defaults = { query: "", category: "all", pricing: "all", auth: "all", openSource: "all", sort: "trending" as const };
  const ai = tools.filter(isAiTool);
  assert.deepEqual(filterResources(ai, { ...defaults, toolType: "coding agent", platform: "cli" }).map(item => item.slug), ["claude-code", "codex", "opencode"]);
  assert.deepEqual(filterResources(ai, { ...defaults, toolType: "agent framework", query: "stateful" }).map(item => item.slug), ["langgraph"]);
  assert.equal(filterResources(ai, { ...defaults, toolType: "app builder", platform: "cli" }).length, 0);
  assert.ok(filterResources(ai, { ...defaults, pricing: "free" }).every(item => item.pricing === "free"));
  assert.equal(parseFilters({ toolType: "coding agent" }).toolType, "coding agent");
  assert.equal(parseFilters({ toolType: ["bad", "input"] }).toolType, "all");
});


test("homepage samples cover every section, do not repeat entries, and respond to new randomness", () => {
 const first = createDiscoverySelection(() => 0);
 const next = createDiscoverySelection(() => 0.99);
 for (const section of ["api", "bot", "extension", "tool", "ai", "web", "weird"] as const) {
   assert.equal(first[section].length, 4);
   assert.equal(new Set(first[section].map(item => item.id)).size, 4);
   assert.notDeepEqual(first[section].map(item => item.id), next[section].map(item => item.id));
   assert.ok(first[section].every(item => section === "ai" ? isAiTool(item) : catalogSection(item) === section));
 }
 assert.equal(first.all.length, 14);
 assert.equal(new Set(first.all.map(item => item.id)).size, 14);
 assert.ok(first.tool.every(item => !isAiTool(item)));
 const input = [1, 2, 3, 4];
 assert.equal(sampleItems(input, 2, () => 0).length, 2);
 assert.deepEqual(input, [1, 2, 3, 4]);
 assert.deepEqual(sampleItems([], 4), []);
 assert.deepEqual(sampleItems([1], 4), [1]);
 assert.equal(signInLabel(null), "not verified");
 assert.equal(signInLabel(false), "not required");
 assert.equal(signInLabel(true), "required");
});


test("invalid filter queries fall back to truthful defaults without weakening valid filters", () => {
 const f = { query: "weather", category: "missing", pricing: "banana", auth: "wrong", openSource: "typo", platform: "invalid", toolType: "made up", players: "many", playStyle: "impossible", sort: "trending" as const };
 const clean = sanitizeFilters(resources, f);
 for (const key of ["category", "pricing", "auth", "openSource", "platform", "toolType", "players", "playStyle"] as const) assert.equal(clean[key], "all", key);
 assert.equal(clean.query, "weather");
 assert.equal(sanitizeFilters(apis, { ...f, category: "weather", auth: "none" }).category, "weather");
 assert.equal(sanitizeFilters(apis, { ...f, category: "weather", auth: "none" }).auth, "none");
 assert.equal(f.category, "missing");
});
