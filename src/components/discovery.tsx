"use client";
import { useState } from "react";
import Link from "next/link";
import { ListFilter, Zap, FlaskConical, Sprout } from "lucide-react";
import { apis } from "@/data/apis";
import { sortResources } from "@/lib/filtering";
import type { SortType } from "@/types";
import { ResourceRows } from "./rows";
export function Discovery() {
  const [sort, setSort] = useState<SortType>("trending");
  const tabs = [
    { sort: "trending", label: "featured", icon: ListFilter },
    { sort: "useful", label: "actually useful", icon: Zap },
    { sort: "weird", label: "weirdest", icon: FlaskConical },
    { sort: "beginner", label: "beginner friendly", icon: Sprout },
  ] as const;
  return (
    <section>
      <div className="section-heading">
        <h2>
          <CompassMark /> worth a look
        </h2>
        <Link href="/apis" className="text-link">
          all apis →
        </Link>
      </div>
      <div className="directory-table">
        <div className="tabs" aria-label="discovery order">
          {tabs.map(({ sort: mode, label, icon: Icon }) => (
            <button
              key={mode}
              aria-pressed={sort === mode}
              onClick={() => setSort(mode)}
            >
              <Icon size={13} />
              {label}
            </button>
          ))}
        </div>
        <div className="api-table-head" aria-hidden="true">
          <span>service / what it does</span><span>auth</span><span>pricing</span><span>free tier</span><span>docs</span>
        </div>
        <ResourceRows items={sortResources(apis, sort).slice(0, 8)} />
        <div
          className="panel-heading"
          style={{
            justifyContent: "center",
            borderTop: "1px solid var(--border)",
            borderBottom: 0,
          }}
        >
          <Link className="text-link" href={`/apis?sort=${sort}`}>
            explore all {apis.length} apis →
          </Link>
        </div>
      </div>

    </section>
  );
}
function CompassMark() {
  return <span className="amber mono">↳</span>;
}
