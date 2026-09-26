import Link from "next/link";
import { notFound } from "next/navigation";
import { collections } from "@/data/collections";
import { resources } from "@/data";
import { matchesCollection } from "@/lib/filtering";
import { CollectionIcon, EmptyState } from "@/components/ui";
import { parseFilters } from "@/lib/query";
import { Directory } from "@/components/directory";
import { ResourceRows, MetricNote } from "@/components/rows";
export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title:
      collections.find((c) => c.slug === slug)?.title ?? "collection not found",
  };
}
export default async function CollectionPage({
  params, searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { slug } = await params;
  const initial = parseFilters(await searchParams);
  const c = collections.find((c) => c.slug === slug);
  if (!c) notFound();
  const items = resources.filter((r) => matchesCollection(r, c));
  return (
    <>
      <div className="breadcrumb">
        <Link href="/collections">collections</Link>
        <span>/</span>
        <span>{c.title}</span>
      </div>
      <div className="page-heading">
        <div>
          <CollectionIcon name={c.icon} />
          <h1 style={{ marginTop: 12 }}>{c.title}</h1>
          <p>{c.description}</p>
        </div>
        <span className="eyebrow">
          {items.length}{" "}
          {c.slug === "browser-extensions" ? "extensions" : c.resourceType === "api"
            ? "apis"
            : c.resourceType === "bot"
              ? "bots"
              : c.resourceType === "tool" ? "tools" : c.resourceType === "weird" ? "sites" : "services"}
        </span>
      </div>
      {c.slug === "browser-extensions" || c.resourceType === "weird" ? (
        <Directory key={c.slug + JSON.stringify(initial)} items={items} kind={c.slug === "browser-extensions" ? "extension" : "weird"} initial={initial} />
      ) : (
        <div className="directory-table directory">
          {c.resourceType === "api" && <div className="api-table-head" aria-hidden="true"><span>service / what it does</span><span>auth</span><span>pricing</span><span>free tier</span><span>docs</span></div>}
          {items.length ? <ResourceRows items={items} detailed showKind={c.resourceType === "all"} /> : <EmptyState />}
        </div>
      )}
      {(c.resourceType === "api" || c.resourceType === "bot") && <MetricNote />}
    </>
  );
}
