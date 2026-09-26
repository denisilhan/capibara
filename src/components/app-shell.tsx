import type { ReactNode } from "react";
import Link from "next/link";
import { TopNav } from "./navigation";
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">
        skip to content
      </a>
      <TopNav />
      <div className="workspace">
        <main className="main" id="main">
          {children}
        </main>
      </div>
      <footer className="footer">
        <p>
          capibara is an independent discovery directory. product names and
          trademarks belong to their respective owners.
          <br />
          data may change. check official provider documentation before
          production use.
        </p>
        <nav className="footer-links" aria-label="directory feedback">
          <Link href="/saved">saved entries</Link>
          <a href="https://github.com/denisilhan/capybara/issues/new?title=Incorrect%20information" target="_blank" rel="noopener noreferrer">report an issue ↗</a>
          <a href="https://github.com/denisilhan/capybara/issues/new?title=Suggest%20a%20resource" target="_blank" rel="noopener noreferrer">suggest a resource ↗</a>
        </nav>
      </footer>
    </>
  );
}
