import Link from "next/link";
import { notFound } from "next/navigation";
import { bots } from "@/data/bots";
import { verifiedInviteUrl } from "@/lib/links";
import { Tag, StatusIndicator } from "@/components/ui";
import { ResourceMetrics, SourcePanel } from "@/components/details";
import { BotActions, MetricNote } from "@/components/rows";
export function generateStaticParams() {
  return bots.map((b) => ({ slug: b.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: bots.find((b) => b.slug === slug)?.name ?? "bot not found" };
}
export default async function BotPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const b = bots.find((b) => b.slug === slug);
  if (!b) notFound();
  const invite = verifiedInviteUrl(b);
  return (
    <>
      <div className="breadcrumb">
        <Link href="/bots">discord bots</Link>
        <span>/</span>
        <span>{b.slug}</span>
      </div>
      <div className="detail-top">
        <div>
          <h1>{b.name}</h1>
          <p>{b.description}</p>
          <div className="tags">
            {[...b.categories, ...b.tags].map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </div>
      <div className="detail-actions">
        <BotActions bot={b} />
      </div>
      <ResourceMetrics resource={b} />
      <div className="detail-grid">
        <div>
          <section className="detail-section">
            <h2>overview</h2>
            <p>{b.description}</p>
          </section>
          <section className="detail-section">
            <h2>pricing</h2>
            <p>{b.pricingNote}</p>
          </section>
          <section className="detail-section">
            <h2>source code</h2>
            <p>
              {b.isOpenSource === true
                ? "the official source repository is linked above. check its license and setup instructions before using or modifying the software."
                : b.isOpenSource === false
                  ? "the provider describes this as closed-source software."
                  : "open-source status is unknown. no source-code claim is made."}
            </p>
          </section>
          <section className="detail-section">
            <h2>adding this bot</h2>
            <p>
              {invite
                ? "the invite link was found on the official provider website. it opens the provider’s invite flow in a new tab. review the discord authorization screen before granting permissions."
                : b.tags.includes("self-hosted")
                  ? "this bot is self-hosted. follow the official setup guide to run your own instance; there is no shared invite link."
                  : "a verified direct invite has not been recorded. visit the official website for the provider’s installation flow."}
            </p>
          </section>
        </div>
        <aside>
          <section className="panel" style={{ marginBottom: 20 }}>
            <div className="panel-heading">
              <h2>bot snapshot</h2>
            </div>
            <dl className="fact-list">
              <div>
                <dt>pricing</dt>
                <dd>
                  <StatusIndicator value={b.pricing} />
                </dd>
              </div>
              <div>
                <dt>open source</dt>
                <dd>
                  {b.isOpenSource === null
                    ? "unknown"
                    : b.isOpenSource
                      ? "yes"
                      : "no"}
                </dd>
              </div>
              <div>
                <dt>invite source</dt>
                <dd>{invite ? "official provider" : "not recorded"}</dd>
              </div>
            </dl>
          </section>
          <SourcePanel resource={b} />
        </aside>
      </div>
      <MetricNote />
    </>
  );
}
