import { SaveButton } from "@/components/save-button";
import Link from "next/link";
import type { DeveloperTool, WebSite, WeirdWeb } from "@/types";
import { isBrowserExtension } from "@/lib/catalog";
import { resourcePath } from "@/lib/links";
import { ExternalLink, Tag } from "./ui";
import { WeirdnessMeter } from "./weirdness-meter";
import { SourcePanel, ResourceOverview } from "./details";

export function CatalogDetail({ item }: { item: DeveloperTool | WeirdWeb | WebSite }) {
  const isTool = item.kind === "tool";
  const isExtension = isBrowserExtension(item);
  return (
    <>
      <div className="breadcrumb">
        <Link href={isExtension ? "/extensions" : isTool ? "/tools" : item.kind === "web" ? `/web?section=${item.section}` : "/web?section=weird"}>{isExtension ? "extensions" : isTool ? "developer tools" : item.kind === "web" ? item.section : "weird web"}</Link>
        <span>/</span><span>{item.slug}</span>
      </div>
      <div className="detail-top">
        <div>
          <p className="eyebrow">/ {isExtension ? "browser extension" : isTool ? "developer tool" : item.kind === "web" ? item.section : "weird web"}</p>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <div className="tags">{[...item.categories, ...item.tags].map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
        </div>
      </div>
      <div className="detail-actions">
        <ExternalLink href={item.officialUrl}>official website</ExternalLink>
        {isTool && item.docsUrl && <ExternalLink href={item.docsUrl}>documentation</ExternalLink>}
        {isTool && item.githubUrl && <ExternalLink href={item.githubUrl}>github</ExternalLink>}
        <SaveButton id={item.id} />
      </div>
      <div className="detail-grid">
        <section className="detail-section">
          <h2>overview</h2><ResourceOverview resource={item} />
          {item.kind === "weird" && <div className="weirdness-detail"><WeirdnessMeter rating={item.weirdness} /><p className="note">{item.weirdness?.reason} capibara editorial assessment; more filled segments mean more unusual, not better quality.</p></div>}
          <dl className="fact-list catalog-facts">
            {item.kind === "web" && item.section === "games" && <><div><dt>players</dt><dd>{item.players?.join(" / ") ?? "not listed"}</dd></div><div><dt>play style</dt><dd>{item.playStyles?.join(" / ") ?? "not listed"}</dd></div></>}
            {isTool && <><div><dt>provider</dt><dd>{item.provider}</dd></div><div><dt>type</dt><dd>{item.toolType}</dd></div><div><dt>platform</dt><dd>{item.platform.join(", ")}</dd></div><div><dt>open source</dt><dd>{item.isOpenSource === null ? "unknown" : item.isOpenSource ? "yes" : "no"}</dd></div></>}
            {!isTool && <div><dt>login required</dt><dd>{item.loginRequired === null ? "unknown" : item.loginRequired ? "yes" : "no"}</dd></div>}
            {item.pricing && <div><dt>pricing</dt><dd>{item.pricing}</dd></div>}
          </dl>
        </section>
        <SourcePanel resource={item} />
      </div>
      <p className="note">provider details can change; check the official site before use.</p>
      <Link className="text-link" href={resourcePath(item)}>↑ this entry</Link>
    </>
  );
}

