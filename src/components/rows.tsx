"use client";
import Link from "next/link";
import type { Api, DiscordBot, DeveloperTool, WebSite, WeirdWeb, Resource } from "@/types";
import { isBrowserExtension } from "@/lib/catalog";
import { resourcePath, verifiedInviteUrl } from "@/lib/links";
import { WeirdnessMeter } from "./weirdness-meter";
import { ExternalLink } from "./ui";

export function BotActions({ bot }: { bot: DiscordBot }) {
  const invite = verifiedInviteUrl(bot);
  return (
    <>
      <ExternalLink href={invite ?? bot.websiteUrl}>
        {invite ? "add to discord" : "website"}
      </ExternalLink>
      {invite && <ExternalLink href={bot.websiteUrl}>website</ExternalLink>}
      {bot.isOpenSource === true && bot.githubUrl && (
        <ExternalLink href={bot.githubUrl}>github</ExternalLink>
      )}
    </>
  );
}

export function ApiRow({ api, showKind = false }: { api: Api; detailed?: boolean; showKind?: boolean }) {
  return (
    <li className="resource-row api-row">
      <Link className="api-main" href={resourcePath(api)}>
        <span className="api-heading">
          <span className="api-name">{api.name}</span>
        </span>
        <span className="api-description">{api.description}</span>
        <span className="resource-subline">
          {showKind && <span className="resource-kind">api</span>}
          <span className="api-provider">{api.provider}</span>
          {api.categories.slice(0, 1).map((category) => (
            <span className="api-tag" key={category}>{category}</span>
          ))}
        </span>
      </Link>
      <div className="api-cell api-auth">
        <span className="api-cell-value mono">{api.authType === "none" ? "no auth" : (api.authType ?? "unknown")}</span>
        <span className="api-cell-label">auth</span>
      </div>
      <div className="api-cell api-pricing">
        {api.pricingType && <><span className="api-cell-value">{api.pricingType}</span><span className="api-cell-label">pricing</span></>}
      </div>
      <div className="api-cell api-tier">
        <span className="api-cell-value">{api.freeTier === null ? "unknown" : api.freeTier ? "yes" : "no"}</span>
        <span className="api-cell-label">free tier</span>
      </div>
      <a className="api-docs" href={api.docsUrl} target="_blank" rel="noopener noreferrer" aria-label={`open ${api.name} documentation in a new tab`} title="official docs">↗</a>
    </li>
  );
}

export function BotRow({ bot, showKind = false }: { bot: DiscordBot; showKind?: boolean }) {
  const invite = verifiedInviteUrl(bot);
  return (
    <li className="resource-row directory-row">
      <Link className="api-main" href={resourcePath(bot)}>
        <span className="api-heading">
          <span className="api-name">{bot.name}</span>
        </span>
        <span className="api-description">{bot.description}</span>
        <span className="resource-subline">
          {showKind && <span className="resource-kind">discord bot</span>}
          <span className="api-tag">{bot.categories[0]}</span>
        </span>
      </Link>
      <div className="api-cell">
        {bot.pricing && <><span className="api-cell-value">{bot.pricing}</span><span className="api-cell-label">pricing</span></>}
      </div>
      <div className="api-cell">
        <span className="api-cell-value">{bot.isOpenSource === null ? "unknown" : bot.isOpenSource ? "yes" : "no"}</span>
        <span className="api-cell-label">open source</span>
      </div>
      <a className="api-docs" href={invite ?? bot.websiteUrl} target="_blank" rel="noopener noreferrer" aria-label={invite ? `add ${bot.name} to discord` : `open ${bot.name} website`}>↗</a>
    </li>
  );
}

export function CatalogRow({ item, showKind = false }: { item: DeveloperTool | WeirdWeb | WebSite; showKind?: boolean }) {
  const isGame = item.kind === "web" && item.section === "games";
  const destination = item.kind === "tool" ? (item.docsUrl ?? item.officialUrl) : item.officialUrl;
  return (
    <li className="resource-row directory-row">
      <Link className="api-main" href={resourcePath(item)}>
        <span className="api-heading">
          <span className="api-name">{item.name}</span>
        </span>
        <span className="api-description">{item.description}</span>
        <span className="resource-subline">
          {showKind && <span className="resource-kind">{item.kind === "weird" ? "weird web" : item.kind === "web" ? (item.section === "games" ? "game" : "website") : isBrowserExtension(item) ? "extension" : "dev tool"}</span>}
          {item.kind === "weird" && <WeirdnessMeter rating={item.weirdness} />}
          <span className="api-tag">{isBrowserExtension(item) ? item.categories[1] ?? "extension" : item.categories[0]}</span>
        </span>
      </Link>
      <div className="api-cell">
        {(isGame || item.kind === "tool" || item.pricing !== null) && <>
        <span className="api-cell-value">{isGame ? item.players?.join(" / ") ?? "not listed" : item.kind === "tool" ? (isBrowserExtension(item) ? item.provider : item.toolType) : item.pricing}</span>
        <span className="api-cell-label">{isGame ? "players" : isBrowserExtension(item) ? "publisher" : item.kind === "tool" ? "type" : "pricing"}</span></>}
      </div>
      <div className="api-cell">
        <span className="api-cell-value platform-value">{isGame ? item.playStyles?.join(" / ") ?? "not listed" : item.kind === "tool" ? item.platform.join(", ") : item.loginRequired === null ? "unknown" : item.loginRequired ? "yes" : "no"}</span>
        <span className="api-cell-label">{isGame ? "play style" : item.kind === "tool" ? "platform" : "login"}</span>
      </div>
      <a className="api-docs" href={destination} target="_blank" rel="noopener noreferrer" aria-label={`open ${item.name} official site in a new tab`}>↗</a>
    </li>
  );
}
export function ResourceRows({ items, detailed = false, showKind = false }: { items: Resource[]; detailed?: boolean; showKind?: boolean }) {
  return (
    <ul className="resource-list">
      {items.map((item) =>
        item.kind === "api" ? <ApiRow key={item.id} api={item} detailed={detailed} showKind={showKind} /> : item.kind === "bot" ? <BotRow key={item.id} bot={item} showKind={showKind} /> : <CatalogRow key={item.id} item={item} showKind={showKind} />,
      )}
    </ul>
  );
}

export function MetricNote() {
  return <p className="note">editorial ratings are capibara’s own assessments, not provider measurements.</p>;
}

