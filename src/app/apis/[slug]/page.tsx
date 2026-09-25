import Link from "next/link";
import { notFound } from "next/navigation";
import { apis } from "@/data/apis";
import { relatedApis } from "@/lib/filtering";
import { formatMoney } from "@/lib/metrics";
import {
  ExternalLink,
  Tag,
  StatusIndicator,
} from "@/components/ui";
import { ResourceMetrics, SourcePanel } from "@/components/details";
import { CopyButton } from "@/components/copy-button";
import { ResourceRows, MetricNote } from "@/components/rows";
export function generateStaticParams() {
  return apis.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: apis.find((a) => a.slug === slug)?.name ?? "api not found" };
}
export default async function ApiPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = apis.find((a) => a.slug === slug);
  if (!a) notFound();
  const related = relatedApis(a, apis);
  return (
    <>
      <div className="breadcrumb">
        <Link href="/apis">apis</Link>
        <span>/</span>
        <span>{a.slug}</span>
      </div>
      <div className="detail-top">
        <div>
          <h1>{a.name}</h1>
          <p>by {a.provider}</p>
          <p>{a.description}</p>
          <div className="tags">
            {[...a.categories, ...a.tags].map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </div>
      <div className="detail-actions">
        <ExternalLink href={a.docsUrl} className="button primary">
          view docs
        </ExternalLink>
        <ExternalLink href={a.officialUrl} className="button">
          official website
        </ExternalLink>
      </div>
      <ResourceMetrics resource={a} />
      <div className="detail-grid">
        <div>
          <section className="detail-section">
            <h2>overview</h2>
            <p>
              {a.description} the links here take you directly to {a.provider}.
              access and terms are managed by the provider.
            </p>
          </section>
          <section className="detail-section">
            <h2>pricing</h2>
            <p>{a.pricingNote}</p>
          </section>
          <section className="detail-section">
            <h2>authentication</h2>
            <p>{a.authNote}</p>
          </section>
          <section className="detail-section">
            <h2>usage</h2>
            <p>
              {a.freeRequests
                ? `recorded free allowance: ${a.freeRequests} / ${a.requestPeriod}. other limits and conditions may apply.`
                : "quota not listed. review the provider’s usage guidance before integrating."}{" "}
              cache responses where appropriate and keep credentials out of
              client-side code.
            </p>
          </section>
          <section className="detail-section">
            <h2>example request</h2>
            {a.curlSample ? (
              <div className="panel">
                <div className="code-heading">
                  <span>terminal / curl</span>
                  <CopyButton text={a.curlSample} />
                </div>
                <pre>
                  <code>{a.curlSample}</code>
                </pre>
              </div>
            ) : (
              <div className="panel rail-body">
                <p>
                  no verified request example recorded.{" "}
                  <ExternalLink href={a.docsUrl}>
                    open the provider’s quickstart
                  </ExternalLink>
                </p>
              </div>
            )}
            <p className="note">
              examples are for you to run. capybara does not call or proxy this
              API.
            </p>
          </section>
          {a.responseSample && (
            <section className="detail-section">
              <h2>sample response</h2>
              <div className="panel">
                <div className="code-heading">
                  JSON / provider documentation example
                </div>
                <pre>
                  <code>{a.responseSample}</code>
                </pre>
              </div>
            </section>
          )}
          <section className="detail-section">
            <h2>what can i build with it?</h2>
            <ul>
              {a.buildIdeas.map((idea) => (
                <li key={idea}>{idea}</li>
              ))}
            </ul>
            <p className="note">
              project ideas from capybara, not provider guarantees.
            </p>
          </section>
        </div>
        <aside>
          <section className="panel" style={{ marginBottom: 20 }}>
            <div className="panel-heading">
              <h2>technical snapshot</h2>
            </div>
            <dl className="fact-list">
              <div>
                <dt>pricing</dt>
                <dd>
                  <StatusIndicator value={a.pricingType} />
                </dd>
              </div>
              <div>
                <dt>paid starting price</dt>
                <dd>
                  {a.startingPrice !== null && a.currency
                    ? `${formatMoney(a.startingPrice, a.currency)} / ${a.pricePeriod}`
                    : "not listed"}
                </dd>
              </div>
              <div>
                <dt>authentication</dt>
                <dd>
                  {a.authType === "none"
                    ? "no auth"
                    : (a.authType ?? "unknown")}
                </dd>
              </div>
              <div>
                <dt>free tier</dt>
                <dd>
                  {a.freeTier === null ? "unknown" : a.freeTier ? "yes" : "no"}
                </dd>
              </div>
              <div>
                <dt>free allowance</dt>
                <dd>
                  {a.freeRequests
                    ? `${a.freeRequests} / ${a.requestPeriod}`
                    : "quota not listed"}
                </dd>
              </div>
            </dl>
          </section>
          <SourcePanel resource={a} />
        </aside>
      </div>
      {related.length > 0 && (
        <section style={{ marginTop: 20 }}>
          <div className="section-heading">
            <h2>keep exploring</h2>
            <Link href="/apis" className="text-link">
              all apis →
            </Link>
          </div>
          <div className="panel">
            <ResourceRows items={related} />
          </div>
        </section>
      )}
      <MetricNote />
    </>
  );
}
