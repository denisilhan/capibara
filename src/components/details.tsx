import type { Resource, Api, DiscordBot } from "@/types";
import { ExternalLink, StatsStrip } from "./ui";

export function SourcePanel({ resource }: { resource: Resource }) {
  return (
    <section className="panel">
      <div className="panel-heading">
        <h2>source notes</h2>
      </div>
      <div className="source-list">
        <p className="mono">
          reviewed {resource.sourceVerifiedAt ?? "not yet"}
          <br />
          documentation review, not a live availability check.
        </p>
        {resource.sources.map((source, i) => (
          <div key={`${source.url}-${i}`}>
            <ExternalLink href={source.url}>{source.label}</ExternalLink>
            <p>{source.facts}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export function ResourceMetrics({ resource }: { resource: Api | DiscordBot }) {
  return (
    <StatsStrip
      items={[
        { value: resource.usefulnessScore.toFixed(1), label: "usefulness¹" },
        { value: resource.weirdnessScore.toFixed(1), label: "weirdness¹" },
        ...(resource.kind === "api"
          ? [
              {
                value: resource.beginnerScore.toFixed(1),
                label: "beginner score¹",
              },
            ]
          : []),

      ]}
    />
  );
}
