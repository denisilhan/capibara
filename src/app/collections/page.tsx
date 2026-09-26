import Link from "next/link";
import { collections } from "@/data/collections";
import { resources } from "@/data";
import { matchesCollection } from "@/lib/filtering";
import { CollectionIcon } from "@/components/ui";
export const metadata = { title: "collections" };
export default function CollectionsPage() {
  return (
    <>
      <div className="page-heading">
        <div>
          <h1>collections.</h1>
          <p>
            find a starting point for your next project, server, or afternoon online.
          </p>
        </div>
        <span className="eyebrow">/ collections</span>
      </div>
      <div className="collections-grid">
        {collections.map((c) => (
          <Link
            href={`/collections/${c.slug}`}
            className="panel collection-card"
            key={c.id}
          >
            <CollectionIcon name={c.icon} />
            <h2>{c.title}</h2>
            <p>{c.description}</p>
            <span>
              {resources.filter((r) => matchesCollection(r, c)).length}{" "}
              {c.slug === "browser-extensions" ? "extensions" : c.resourceType === "api"
                ? "apis"
                : c.resourceType === "bot"
                  ? "bots"
                  : c.resourceType === "tool" ? "tools" : c.resourceType === "weird" ? "sites" : "services"}{" "}
              <span aria-hidden="true">↗</span>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
