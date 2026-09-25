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
          capybara is an independent discovery directory. product names and
          trademarks belong to their respective owners.
          <br />
          data may change. check official provider documentation before
          production use.
        </p>
        <Link href="/collections">made for curious developers. ↗</Link>
      </footer>
    </>
  );
}
