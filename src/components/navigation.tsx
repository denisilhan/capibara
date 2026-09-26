"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { Search, ChevronRight } from "lucide-react";
import { catalogSection, isBrowserExtension } from "@/lib/catalog";
import { resources } from "@/data";
import { tools } from "@/data/tools";
import { searchMatches } from "@/lib/filtering";
import { resourcePath } from "@/lib/links";

export function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const results = resources.filter((r) => searchMatches(r, query)).slice(0, 6);
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const target = event.target;
      if (
        event.key === "/" &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey &&
        !(
          target instanceof HTMLElement &&
          (target.matches("input,textarea,select") || target.isContentEditable)
        )
      ) {
        event.preventDefault();
        input.current?.focus();
      }
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);
  return (
    <div
      className="global-search"
      ref={wrapper}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          const links = Array.from(
            wrapper.current?.querySelectorAll<HTMLAnchorElement>(
              ".search-popup a",
            ) ?? [],
          );
          if (!links.length) return;
          e.preventDefault();
          const index = links.indexOf(
            document.activeElement as HTMLAnchorElement,
          );
          links[
            (index + (e.key === "ArrowDown" ? 1 : -1) + links.length) %
              links.length
          ].focus();
        }
      }}
    >
      <form action="/search" className="search-box" role="search">
        <Search size={15} aria-hidden="true" />
        <input
          ref={input}
          name="q"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="search apis, bots, extensions, tools..."
          aria-label="search all services"
          autoComplete="off"
        />
        <kbd aria-hidden="true">/</kbd>
      </form>
      {open && query.trim() && (
        <div className="search-popup">
          <p className="eyebrow" style={{ padding: "8px 10px" }}>
            quick results
          </p>
          {results.length ? (
            results.map((r) => (
              <Link
                key={r.id}
                href={resourcePath(r)}
                onClick={() => setOpen(false)}
              >
                <span>{r.name}</span>
                <span className="muted">
                  {r.kind === "weird" ? "weird web" : catalogSection(r)} ↗
                </span>
              </Link>
            ))
          ) : (
            <p style={{ padding: 10 }} className="muted">
              no matching services
            </p>
          )}
          <Link
            href={`/search?q=${encodeURIComponent(query)}`}
            onClick={() => setOpen(false)}
          >
            all search results <ChevronRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
}
export function TopNav() {
  const pathname = usePathname();
  const extensionDetail = tools.some((item) => isBrowserExtension(item) && resourcePath(item) === pathname);
  const activePath = extensionDetail || pathname === "/collections/browser-extensions" ? "/extensions" : pathname.startsWith("/weird") ? "/web" : pathname;
  return (
    <header className="topnav">
      <div className="nav-inner">
        <Link className="brand" href="/" aria-label="capibara home">
          <span className="brand-animal" aria-hidden="true" />
          <span>c<span className="brand-api">api</span>bara</span>
        </Link>
        <nav className="nav-links" aria-label="main navigation">
          {[
            ["/", "discover"],
            ["/apis", "apis"],
            ["/bots", "discord bots"],
            ["/tools", "developer tools"],
            ["/web", "web"],
            ["/extensions", "extensions"],
            ["/saved", "saved"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={
                activePath === href ||
                (href !== "/" && activePath.startsWith(`${href}/`))
                  ? "active"
                  : ""
              }
              aria-current={activePath === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <GlobalSearch />
        <ThemeToggle />
      </div>
    </header>
  );
}
