import Link from "next/link";
import { notFound } from "next/navigation";
import { collections } from "@/data/collections";
import { resources } from "@/data";
import { matchesCollection } from "@/lib/filtering";
import { CollectionIcon, EmptyState } from "@/components/ui";
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
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
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
          {c.resourceType === "api"
            ? "apis"
            : c.resourceType === "bot"
              ? "bots"
              : c.resourceType === "tool" ? "tools" : c.resourceType === "weird" ? "sites" : "services"}
        </span>
      </div>
      <div className="panel directory">
        {items.length ? (
          <ResourceRows items={items} detailed />
        ) : (
          <EmptyState />
        )}
      </div>
      <MetricNote />
    </>
  );
}
