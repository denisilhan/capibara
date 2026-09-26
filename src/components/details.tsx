import { verifiedInviteUrl } from "@/lib/links";
import type { Resource, Api, DiscordBot } from "@/types";
import { ExternalLink } from "./ui";

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
export function ResourceBasics({ resource }: { resource: Api | DiscordBot }) {
  const facts = resource.kind === "api"
    ? [
        { label: "access", value: resource.authType === "none" ? "public access available" : resource.authType ?? "check provider docs" },
        { label: "request example", value: resource.curlSample ? "included below" : "see official quickstart" },
      ]
    : [
        { label: "use it for", value: resource.categories.join(" / ") },
        { label: "setup", value: verifiedInviteUrl(resource) ? "official invite available" : resource.tags.includes("self-hosted") ? "self-hosted" : "via provider website" },
      ];
  return <dl className="resource-basics">{facts.map(({ label, value }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>;
}

export function ResourceOverview({ resource }: { resource: Resource }) {
  const guidance = resource.overview ?? (resource.kind === "api"
    ? `${resource.buildIdeas[0] ? `a starting idea: ${resource.buildIdeas[0]}. ` : ""}open the documentation for the request format and setup steps.`
    : resource.kind === "bot"
      ? "choose the commands that match your server’s needs, then follow the provider’s setup guide. a server manager may need to install it first."
      : resource.kind === "tool"
        ? `use this when you need ${resource.toolType} in your workflow. it is available for ${resource.platform.join(", ")}. start with the official website or documentation for setup instructions.`
        : "this is a website you can explore directly. open the official site to try the experience; account and pricing details below are only shown when known.");
  return <p className="overview-guidance">{guidance}</p>;
}
