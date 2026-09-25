import Link from "next/link";
import { apis } from "@/data/apis";
import { bots } from "@/data/bots";
import { tools } from "@/data/tools";
import { weird } from "@/data/weird";
import { collections } from "@/data/collections";
import { resources } from "@/data";
import { matchesCollection } from "@/lib/filtering";
import { resourcePath } from "@/lib/links";
import { Discovery } from "@/components/discovery";

export default function Home() {
  return (
    <>
      <div className="page-heading home-intro">
        <div>
          <p className="eyebrow">/ directory</p>
          <h1>apis, bots and developer oddities.</h1>
          <p>a small, maintained index of things worth building with.</p>
        </div>
      </div>
      <div className="catalog-counts">
        <span><strong>{apis.length}</strong> apis</span>
        <span><strong>{bots.length}</strong> discord bots</span>
        <span><strong>{tools.length}</strong> developer tools</span>
        <span><strong>{weird.length}</strong> weird web</span>
        <span><strong>{collections.length}</strong> collections</span>
        <span><strong>{new Set(resources.flatMap((item) => item.categories)).size}</strong> categories</span>
      </div>
      <Discovery />
      <div className="home-sections">
        <section>
          <div className="section-heading"><h2>no-auth starting points</h2><Link className="text-link" href="/collections/free-no-auth">all →</Link></div>
          <ul className="simple-list">
            {apis.filter((a) => a.freeTier === true && a.authType === "none").slice(0, 4).map((a) => (
              <li key={a.id}><Link href={resourcePath(a)}>{a.name}<span>{a.categories[0]}</span></Link></li>
            ))}
          </ul>
        </section>
        <section>
          <div className="section-heading"><h2>discord bots</h2><Link className="text-link" href="/bots">all →</Link></div>
          <ul className="simple-list">
            {bots.slice(0, 4).map((b) => (
              <li key={b.id}><Link href={resourcePath(b)}>{b.name}<span>{b.categories[0]}</span></Link></li>
            ))}
          </ul>
        </section>
        <section>
          <div className="section-heading"><h2>collections</h2><Link className="text-link" href="/collections">all →</Link></div>
          <ul className="simple-list">
            {collections.slice(0, 4).map((c) => (
              <li key={c.id}><Link href={`/collections/${c.slug}`}>{c.title}<span>{resources.filter((r) => matchesCollection(r, c)).length}</span></Link></li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

