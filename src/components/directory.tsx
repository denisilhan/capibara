"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import type { Filters } from "@/lib/filtering";
import { filterResources } from "@/lib/filtering";
import { getMetrics } from "@/lib/metrics";
import type { Resource, SortType } from "@/types";
import { EmptyState } from "./ui";
import { ResourceRows } from "./rows";
import { FilterDropdown } from "./filter-dropdown";

const defaults: Filters = {
  query: "", category: "all", pricing: "all", auth: "all",
  openSource: "all", platform: "all", players: "all", playStyle: "all", sort: "trending",
};
const sorts: { value: SortType; label: string }[] = [
  { value: "trending", label: "featured" },
  { value: "useful", label: "most useful" },
  { value: "weird", label: "weirdest" },
  { value: "beginner", label: "beginner friendly" },
  { value: "price", label: "lowest price" },
];
type Kind = "api" | "bot" | "tool" | "weird" | "extension" | "web" | "game" | "all";

export function Directory({ items, kind, initial = {} }: {
  items: Resource[];
  kind: Kind;
  initial?: Partial<Filters>;
}) {
  const alphabetical = kind === "tool" || kind === "extension" || kind === "web" || kind === "game";
  const hasSourceFilter = kind === "bot" || kind === "tool" || kind === "extension";
  const hasAuthFilter = kind === "api" || kind === "all";
  const visibleSorts: { value: SortType; label: string }[] = kind === "weird"
    ? [{ value: "trending", label: "name" }, { value: "weirdness-desc", label: "weirdness: highest first" }, { value: "weirdness-asc", label: "weirdness: lowest first" }]
    : alphabetical ? [{ value: "trending", label: "name" }]
    : kind === "bot" ? sorts.filter((s) => s.value !== "beginner" && s.value !== "price").map((s) => s.value === "trending" ? { ...s, label: "name" } : s) : sorts;
  const [filters, setFilters] = useState<Filters>({
    ...defaults, ...initial,
    sort: visibleSorts.some((option) => option.value === initial.sort) ? initial.sort! : defaults.sort,
  });
  const filtered = filterResources(items, filters);
  const stats = getMetrics(filtered);
  const platforms = [...new Set(items.flatMap((item) => item.kind === "tool" ? item.platform : []))].sort();
  const categories = getMetrics(items).categories.filter((category) => kind !== "extension" || category !== "browser extensions");
  const change = <K extends keyof Filters>(key: K, value: Filters[K]) =>
    setFilters((prev) => ({ ...prev, [key]: value }));
  const clear = () => setFilters({ ...defaults });
  const label = kind === "game" ? "games" : kind === "web" ? "websites" : kind === "extension" ? "extensions" : kind === "bot" ? "bots" : kind === "tool" ? "tools" : kind === "weird" ? "weird web" : kind === "all" ? "services" : "apis";


  return (
    <div className="directory">
      <div className="filter-panel">
        <div className="search-box filter-search">
          <Search size={17} aria-hidden="true" />
          <input
            aria-label={`search ${label}`}
            value={filters.query}
            onChange={(event) => change("query", event.target.value)}
            placeholder={`search ${label}, categories, tags...`}
          />
        </div>
        <div className="filter-controls">
          <FilterDropdown label={kind === "game" ? "genre" : "category"} value={filters.category} onChange={(value) => change("category", value)} options={[
            { value: "all", label: "all categories" },
            ...categories.map((category) => ({ value: category, label: category })),
          ]} />
          {kind === "game" && <>
            <FilterDropdown label="players" value={filters.players ?? "all"} onChange={(value) => change("players", value)} options={["all", "solo", "group"].map(value => ({ value, label: value === "all" ? "any players" : value }))} />
            <FilterDropdown label="play style" value={filters.playStyle ?? "all"} onChange={(value) => change("playStyle", value)} options={["all", ...new Set(items.flatMap(item => item.kind === "web" ? item.playStyles ?? [] : []))].map(value => ({ value, label: value === "all" ? "any style" : value }))} />
          </>}
          {kind === "extension" && <FilterDropdown label="browser" value={filters.platform ?? "all"} onChange={(value) => change("platform", value)} options={[
            { value: "all", label: "all browsers" },
            ...platforms.map((value) => ({ value, label: value })),
          ]} />}
          {kind !== "weird" && <FilterDropdown label="pricing" value={filters.pricing} onChange={(value) => change("pricing", value)} options={
            ["all", "free", "freemium", "paid", "unknown"].map((value) => ({ value, label: value === "all" ? "all pricing" : value }))
          } />}
          {hasAuthFilter && <FilterDropdown label="authentication" value={filters.auth} onChange={(value) => change("auth", value)} options={
            ["all", "none", "api-key", "oauth", "unknown"].map((value) => ({ value, label: value === "all" ? "all authentication" : value === "none" ? "no auth" : value }))
          } />}
          {hasSourceFilter && <FilterDropdown label="source code" value={filters.openSource} onChange={(value) => change("openSource", value)} options={[
            { value: "all", label: "any source status" },
            { value: "yes", label: "open source" },
            { value: "no", label: "closed source" },
            { value: "unknown", label: "unknown" },
          ]} />}
          {!alphabetical && <FilterDropdown label="sort by" value={filters.sort} onChange={(value) => {
            const sort = visibleSorts.find((option) => option.value === value);
            if (sort) change("sort", sort.value);
          }} options={
            visibleSorts.map((sort) => ({ value: sort.value, label: alphabetical ? "name" : sort.label }))
          } />}
          <button className="button subtle" onClick={clear} aria-label="clear filters">reset</button>
        </div>
      </div>
      <div className="result-line" aria-live="polite">
        <span>{filtered.length} {kind === "weird" ? "sites" : label} found{hasAuthFilter ? ` · ${stats.noAuth} no-auth` : ""}</span>
        <span>{alphabetical ? "a–z" : kind === "weird" ? visibleSorts.find((option) => option.value === filters.sort)?.label : filters.sort === "trending" ? (kind === "bot" ? "a–z" : "featured first") : filters.sort === "price" ? "unknown prices last" : "editorial order"}</span>
      </div>
      <div className={kind === "all" || kind === "web" ? "directory-table mixed-directory" : "directory-table"}>
        {kind === "api" && <div className="api-table-head" aria-hidden="true"><span>service / what it does</span><span>auth</span><span>pricing</span><span>free tier</span><span>docs</span></div>}
        {filtered.length ? <ResourceRows items={filtered} detailed showKind={kind === "all" || kind === "web"} /> : <EmptyState onReset={clear} />}
      </div>
      {kind === "api" && <p className="note">unknown pricing and access details are left unlisted. check the official documentation before use.</p>}
    </div>
  );
}

