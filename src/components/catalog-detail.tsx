import Link from "next/link";
import type { DeveloperTool, WeirdWeb } from "@/types";
import { resourcePath } from "@/lib/links";
import { ExternalLink, Tag } from "./ui";
import { SourcePanel } from "./details";

export function CatalogDetail({ item }: { item: DeveloperTool | WeirdWeb }) {
  const isTool = item.kind === "tool";
  return (
    <>
      <div className="breadcrumb">
        <Link href={isTool ? "/tools" : "/weird"}>{isTool ? "developer tools" : "weird web"}</Link>
        <span>/</span><span>{item.slug}</span>
      </div>
      <div className="detail-top">
        <div>
          <p className="eyebrow">/ {isTool ? "developer tool" : "weird web"}</p>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <div className="tags">{[...item.categories, ...item.tags].map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
        </div>
      </div>
      <div className="detail-actions">
        <ExternalLink href={item.officialUrl}>official website</ExternalLink>
        {isTool && item.docsUrl && <ExternalLink href={item.docsUrl}>documentation</ExternalLink>}
        {isTool && item.githubUrl && <ExternalLink href={item.githubUrl}>github</ExternalLink>}
      </div>
      <div className="detail-grid">
        <section className="detail-section">
          <h2>overview</h2><p>{item.description}</p>
          <dl className="fact-list catalog-facts">
            {isTool && <><div><dt>provider</dt><dd>{item.provider}</dd></div><div><dt>type</dt><dd>{item.toolType}</dd></div><div><dt>platform</dt><dd>{item.platform.join(", ")}</dd></div><div><dt>open source</dt><dd>{item.isOpenSource === null ? "unknown" : item.isOpenSource ? "yes" : "no"}</dd></div></>}
            {!isTool && <div><dt>login required</dt><dd>{item.loginRequired === null ? "unknown" : item.loginRequired ? "yes" : "no"}</dd></div>}
            <div><dt>pricing</dt><dd>{item.pricing ?? "not listed"}</dd></div>
          </dl>
        </section>
        <SourcePanel resource={item} />
      </div>
      <p className="note">provider details can change; check the official site before use.</p>
      <Link className="text-link" href={resourcePath(item)}>↑ this entry</Link>
    </>
  );
}

