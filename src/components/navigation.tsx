"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Compass,
  Braces,
  Bot,
  FolderOpen,
  Shuffle,
  TrendingUp,
  FlaskConical,
  Zap,
  Sprout,
  UnlockKeyhole,
  ChevronRight,
} from "lucide-react";
import { resources } from "@/data";
import { apis } from "@/data/apis";
import { bots } from "@/data/bots";
import { tools } from "@/data/tools";
import { weird } from "@/data/weird";
import { collections } from "@/data/collections";
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
          placeholder="search apis, bots, tools, weird web..."
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
                  {r.kind === "api" ? "api" : r.kind === "bot" ? "bot" : r.kind === "tool" ? "tool" : "weird web"} ↗
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
  return (
    <header className="topnav">
      <div className="nav-inner">
        <Link className="brand" href="/" aria-label="capybara home">
          <span className="brand-mark">&gt;_</span> capybara
        </Link>
        <nav className="nav-links" aria-label="main navigation">
          {[
            ["/", "discover"],
            ["/apis", "apis"],
            ["/bots", "discord bots"],
            ["/tools", "developer tools"],
            ["/weird", "weird web"],
            ["/collections", "collections"],
            ["/random", "random"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href ||
                (href !== "/" && pathname.startsWith(`${href}/`))
                  ? "active"
                  : ""
              }
              aria-current={pathname === href ? "page" : undefined}
            >
              {label === "random" && <Shuffle size={13} />} {label}
            </Link>
          ))}
        </nav>
        <GlobalSearch />
      </div>
    </header>
  );
}
export function Sidebar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "overview", icon: Compass, count: resources.length },
    { href: "/apis", label: "apis", icon: Braces, count: apis.length },
    { href: "/bots", label: "discord bots", icon: Bot, count: bots.length },
    { href: "/tools", label: "developer tools", icon: Braces, count: tools.length },
    { href: "/weird", label: "weird web", icon: FlaskConical, count: weird.length },
    {
      href: "/collections",
      label: "collections",
      icon: FolderOpen,
      count: collections.length,
    },
  ];
  const categories = [...new Set(apis.flatMap((a) => a.categories))].sort();
  return (
    <aside className="sidebar" aria-label="directory shortcuts">
      <div className="side-section">
        <p className="eyebrow">explore</p>
        {links.map(({ href, label, icon: Icon, count }) => (
          <Link
            key={href}
            href={href}
            className={`side-link ${pathname === href ? "active" : ""}`}
          >
            <Icon size={15} />
            {label}
            <span className="side-count">{count}</span>
          </Link>
        ))}
      </div>
      <div className="side-section">
        <p className="eyebrow">find your next thing</p>
        {[
          { label: "featured", href: "/apis?sort=trending", icon: TrendingUp },
          { label: "actually useful", href: "/apis?sort=useful", icon: Zap },
          { label: "weirdest", href: "/apis?sort=weird", icon: FlaskConical },
          {
            label: "beginner friendly",
            href: "/apis?sort=beginner",
            icon: Sprout,
          },
          { label: "no auth", href: "/apis?auth=none", icon: UnlockKeyhole },
        ].map(({ label, href, icon: Icon }) => (
          <Link href={href} key={label} className="side-link">
            <Icon size={14} />
            {label}
          </Link>
        ))}
      </div>
      <div className="side-section">
        <p className="eyebrow">categories</p>
        {categories.slice(0, 9).map((c) => (
          <Link
            key={c}
            href={`/apis?category=${encodeURIComponent(c)}`}
            className="side-link"
          >
            <span className="muted mono">#</span>
            {c}
            <span className="side-count">
              {apis.filter((a) => a.categories.includes(c)).length}
            </span>
          </Link>
        ))}
      </div>

    </aside>
  );
}
