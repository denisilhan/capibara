"use client";
import { useState } from "react";
import Link from "next/link";

import type { DiscoverySelection } from "@/data/discovery";
import { ResourceRows } from "./rows";
export function Discovery({ picks }: { picks: DiscoverySelection }) {
  const [section, setSection] = useState<keyof DiscoverySelection>("all");
  const tabs: { value: keyof DiscoverySelection; label: string; href: string }[] = [
    { value: "all", label: "a bit of everything", href: "/collections" },
    { value: "api", label: "apis", href: "/apis" },
    { value: "bot", label: "bots", href: "/bots" },
    { value: "extension", label: "extensions", href: "/extensions" },
    { value: "tool", label: "tools", href: "/tools" },
    { value: "ai", label: "ai & agents", href: "/ai" },
    { value: "web", label: "sites & games", href: "/web" },
    { value: "weird", label: "weird web", href: "/web?section=weird" },
  ];
  const selected = tabs.find((tab) => tab.value === section)!;
  const items = picks[section];
  return (
    <section>
      <div className="section-heading">
        <h2>
          <CompassMark /> a few places to start
        </h2>
        <Link href="/random" className="text-link">surprise me ↝</Link>
      </div>
      <p className="list-help">fresh picks on each visit. open a name for details; ↗ goes to the official site.</p>
      <div className="directory-table mixed-directory">
        <div className="tabs" aria-label="discovery sections">
          {tabs.map(({ value: mode, label }) => (
            <button
              key={mode}
              aria-pressed={section === mode}
              onClick={() => setSection(mode)}
            >
              {label}
            </button>
          ))}
        </div>
        <ResourceRows items={items} showKind />
        <div
          className="panel-heading"
          style={{
            justifyContent: "center",
            borderTop: "1px solid var(--border)",
            borderBottom: 0,
          }}
        >
          <Link className="text-link" href={selected.href}>
            {section === "all" ? "explore collections" : `explore all ${selected.label}`} →
          </Link>
        </div>
      </div>

    </section>
  );
}
function CompassMark() {
  return <span className="amber mono">↳</span>;
}
