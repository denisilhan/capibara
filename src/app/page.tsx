import Link from "next/link";
import { apis } from "@/data/apis";
import { bots } from "@/data/bots";
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
          <h1>apis, bots and developer oddities.</h1>
          <p>find an API for your app, a bot for your server, or something unexpected for your browser.</p>
        </div>
      </div>
      <nav className="directory-guide" aria-label="explore the directory">
        <Link href="/apis"><strong>apis <span>→</span></strong><p>data and features you can use in your own app.</p></Link>
        <Link href="/bots"><strong>discord bots <span>→</span></strong><p>games, RPG, chat, and tools for your server.</p></Link>
        <Link href="/tools"><strong>developer tools <span>→</span></strong><p>build, test, and debug with less busywork.</p></Link>
        <Link href="/web"><strong>web <span>→</span></strong><p>useful sites, games, and unexpected corners of the internet.</p></Link>
      </nav>
      <p className="list-help"><Link className="text-link" href="/random">surprise me ↝</Link></p>
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

