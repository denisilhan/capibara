"use client";
import { useState } from "react";
import Link from "next/link";
import { resources } from "@/data";
import type { Resource } from "@/types";
import { randomResource } from "@/lib/filtering";
import { resourcePath } from "@/lib/links";
import { pricingOf } from "@/lib/metrics";
import { ExternalLink } from "./ui";
import { BotActions } from "./rows";

export function RandomDiscovery({ initial }: { initial: Resource }) {
  const [kind, setKind] = useState<"all" | "api" | "bot" | "tool" | "weird">("all");
  const [item, setItem] = useState(initial);
  const pool = resources.filter((r) => kind === "all" || r.kind === kind);
  function selectKind(next: typeof kind) {
    setKind(next);
    setItem(randomResource(resources.filter((r) => next === "all" || r.kind === next), item.id) ?? item);
  }
  return (
    <>
      <div className="random-controls">
        {(["all", "api", "bot", "tool", "weird"] as const).map((k) => (
          <button className="button subtle" key={k} aria-pressed={kind === k} onClick={() => selectKind(k)}>
            {k === "all" ? "all services" : k === "api" ? "apis" : k === "bot" ? "bots" : k === "tool" ? "tools" : "weird web"}
          </button>
        ))}
      </div>
      <div className="random-stage">
        <article className="random-card" aria-live="polite" aria-atomic="true">
          <p className="eyebrow">/ {item.kind}</p>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p className="random-meta">{item.categories.join(" · ")} · {pricingOf(item) ?? "pricing not listed"}</p>
          <div className="detail-actions">
            <Link className="text-link" href={resourcePath(item)}>details →</Link>
            {item.kind === "api" ? <ExternalLink href={item.docsUrl}>official docs</ExternalLink> : item.kind === "bot" ? <BotActions bot={item} /> : <ExternalLink href={item.kind === "tool" ? item.docsUrl ?? item.officialUrl : item.officialUrl}>official site</ExternalLink>}
          </div>
        </article>
        <div className="random-next">
          <button className="button" onClick={() => setItem(randomResource(pool, item.id) ?? item)}>another one ↝</button>
          <p className="note">{pool.length} possibilities</p>
        </div>
      </div>
    </>
  );
}

