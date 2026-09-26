"use client";
import { useState } from "react";
import Link from "next/link";

import { discoveryItems } from "@/data/discovery";
import { catalogSection } from "@/lib/catalog";
import { ResourceRows } from "./rows";
export function Discovery() {
  const [section, setSection] = useState("all");
  const tabs = [
    { value: "all", label: "a bit of everything", href: "/collections" },
    { value: "api", label: "apis", href: "/apis" },
    { value: "bot", label: "bots", href: "/bots" },
    { value: "extension", label: "extensions", href: "/extensions" },
    { value: "tool", label: "tools", href: "/tools" },
    { value: "web", label: "sites & games", href: "/web" },
    { value: "weird", label: "weird web", href: "/web?section=weird" },
  ];
  const selected = tabs.find((tab) => tab.value === section)!;
  const items = discoveryItems.filter((item) => section === "all" || catalogSection(item) === section);
  return (
    <section>
      <div className="section-heading">
        <h2>
          <CompassMark /> a few places to start
        </h2>
        <Link href={selected.href} className="text-link">
          {section === "all" ? "browse collections" : `all ${selected.label}`} →
        </Link>
      </div>
      <p className="list-help">open a name for details; ↗ goes to the official site.</p>
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
