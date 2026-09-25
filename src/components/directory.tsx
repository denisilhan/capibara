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
  openSource: "all", sort: "trending",
};
const sorts: { value: SortType; label: string }[] = [
  { value: "trending", label: "featured" },
  { value: "useful", label: "most useful" },
  { value: "weird", label: "weirdest" },
  { value: "beginner", label: "beginner friendly" },
  { value: "price", label: "lowest price" },
];
type Kind = "api" | "bot" | "tool" | "weird" | "all";

export function Directory({ items, kind, initial = {} }: {
  items: Resource[];
  kind: Kind;
  initial?: Partial<Filters>;
}) {
  const [filters, setFilters] = useState<Filters>({ ...defaults, ...initial, sort: kind === "tool" || kind === "weird" ? "trending" : initial.sort ?? defaults.sort });
  const filtered = filterResources(items, filters);
  const stats = getMetrics(filtered);
  const categories = getMetrics(items).categories;
  const change = (key: keyof Filters, value: string) =>
    setFilters((prev) => ({ ...prev, [key]: value }));
  const clear = () => setFilters({ ...defaults });
  const label = kind === "bot" ? "bots" : kind === "tool" ? "tools" : kind === "weird" ? "weird web" : "apis";
  const visibleSorts = kind === "tool" || kind === "weird"
    ? sorts.slice(0, 1)
    : kind === "bot" ? sorts.filter((s) => s.value !== "beginner" && s.value !== "price") : sorts;

  return (
    <div className="directory">
      <div className="catalog-counts" aria-live="polite">
        <span><strong>{stats.total}</strong> matching</span>
        {(kind === "bot" || kind === "tool") &&
          <span><strong>{filtered.filter((item) => (item.kind === "bot" || item.kind === "tool") && item.isOpenSource === true).length}</strong> open source</span>}
        {(kind === "api" || kind === "all") && <>
          <span><strong>{stats.freeTier}</strong> api free tiers</span>
          <span><strong>{stats.noAuth}</strong> no-auth apis</span>
        </>}
      </div>
      <div className="result-line">
        <span>{filtered.length} {kind === "weird" ? "sites" : kind === "all" ? "services" : label} found</span>
        <span>{kind === "tool" || kind === "weird" ? "alphabetical" : filters.sort === "trending" ? "featured first" : filters.sort === "price" ? "unknown prices last" : "capybara editorial selection"}</span>
      </div>
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
          <FilterDropdown label="category" value={filters.category} onChange={(value) => change("category", value)} options={[
            { value: "all", label: "all categories" },
            ...categories.map((category) => ({ value: category, label: category })),
          ]} />
          {kind !== "weird" && <FilterDropdown label="pricing" value={filters.pricing} onChange={(value) => change("pricing", value)} options={
            ["all", "free", "freemium", "paid", "unknown"].map((value) => ({ value, label: value === "all" ? "all pricing" : value }))
          } />}
          {(kind === "api" || kind === "all") && <FilterDropdown label="authentication" value={filters.auth} onChange={(value) => change("auth", value)} options={
            ["all", "none", "api-key", "oauth", "unknown"].map((value) => ({ value, label: value === "all" ? "all authentication" : value === "none" ? "no auth" : value }))
          } />}
          {(kind === "bot" || kind === "tool") && <FilterDropdown label="source code" value={filters.openSource} onChange={(value) => change("openSource", value)} options={[
            { value: "all", label: "any source status" },
            { value: "yes", label: "open source" },
            { value: "no", label: "closed source" },
            { value: "unknown", label: "unknown" },
          ]} />}
          <FilterDropdown label="sort by" value={filters.sort} onChange={(value) => change("sort", value)} options={
            visibleSorts.map((sort) => ({ value: sort.value, label: kind === "tool" || kind === "weird" ? "name" : sort.label }))
          } />
          <button className="button subtle" onClick={clear} aria-label="clear filters">reset</button>
        </div>
      </div>
      <div className="directory-table">
        {kind === "api" && <div className="api-table-head" aria-hidden="true"><span>service / what it does</span><span>auth</span><span>pricing</span><span>free tier</span><span>docs</span></div>}
        {filtered.length ? <ResourceRows items={filtered} detailed /> : <EmptyState onReset={clear} />}
      </div>
      {kind === "api" && <p className="note">unknown pricing and access details are left unlisted. check the official documentation before use.</p>}
    </div>
  );
}

