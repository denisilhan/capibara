import type { CSSProperties, ReactNode } from "react";
import {
  ArrowUpRight,
  SearchX,
  CloudSun,
  Gamepad2,
  Rocket,
  Globe2,
  Utensils,
  Coins,
  Code2,
  Spade,
  Terminal,
  BookOpen,
  Dog,
  Users,
  Braces,
  Newspaper,
  Palette,
  Laugh,
  Bot,
  Shield,
  Music2,
  Sparkles,
  Ticket,
  GraduationCap,
  FlaskConical,
  UnlockKeyhole,
  Database,
  Sprout,
  FolderOpen,
  Trophy,
  Tv,
} from "lucide-react";
import type { Resource } from "@/types";

export function Metric({
  value,
  label,
  small = false,
  className = "",
}: {
  value: ReactNode;
  label: string;
  small?: boolean;
  className?: string;
}) {
  return (
    <div className={`metric ${small ? "small" : ""} ${className}`}>
      <span className="metric-value">{value}</span>
      <span className="metric-label">{label}</span>
    </div>
  );
}
export function StatsStrip({
  items,
}: {
  items: { value: ReactNode; label: string }[];
}) {
  return (
    <div
      className="stats-strip"
      style={{ "--cells": items.length } as CSSProperties}
    >
      {items.map((i) => (
        <Metric key={i.label} {...i} />
      ))}
    </div>
  );
}
export function Tag({ children }: { children: ReactNode }) {
  return <span className="tag">{children}</span>;
}
export function StatusIndicator({ value }: { value: string | null }) {
  if (!value) return null;
  return (
    <span className={`badge ${value}`}>{value}</span>
  );
}
export function ExternalLink({
  href,
  children,
  className = "text-link",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}{" "}
      <ArrowUpRight
        size={12}
        aria-label="opens in a new tab"
        style={{ display: "inline", verticalAlign: "middle" }}
      />
    </a>
  );
}
export function EmptyState({ onReset }: { onReset?: () => void }) {
  return (
    <div className="empty">
      <SearchX size={28} />
      <h2>nothing in this corner of the internet.</h2>
      <p>try a different search or loosen a filter.</p>
      {onReset && (
        <button className="button" onClick={onReset}>
          clear filters
        </button>
      )}
    </div>
  );
}
const icons = {
  "open-meteo": CloudSun,
  pokeapi: Gamepad2,
  "nasa-apod": Rocket,
  "rest-countries": Globe2,
  "open-food-facts": Utensils,
  coingecko: Coins,
  github: Code2,
  "deck-of-cards": Spade,
  "wttr-in": Terminal,
  "open-library": BookOpen,
  "dog-ceo": Dog,
  "random-user": Users,
  jsonplaceholder: Braces,
  "hacker-news": Newspaper,
  "art-institute": Palette,
  "exchange-rate": Coins,
  icanhazdadjoke: Laugh,
  gutendex: BookOpen,
  balldontlie: Trophy,
  jikan: Tv,
  "carl-bot": Shield,
  dyno: Shield,
  fredboat: Music2,
  sapphire: Sparkles,
  disboard: Globe2,
  midjourney: Palette,
  yagpdb: Terminal,
  red: Bot,
  "discord-tickets": Ticket,
  poketwo: Gamepad2,
};
export function ResourceIcon({ resource }: { resource: Resource }) {
  const Icon = icons[resource.slug as keyof typeof icons] ?? Braces;
  const color =
    resource.kind === "bot"
      ? "purple"
      : ("weirdnessScore" in resource && resource.weirdnessScore >= 7)
        ? "amber"
        : resource.categories.includes("data")
          ? "green"
          : "blue";
  return (
    <span className="resource-icon" data-color={color}>
      <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
    </span>
  );
}
const collectionIcons = {
  graduation: GraduationCap,
  flask: FlaskConical,
  unlock: UnlockKeyhole,
  database: Database,
  bot: Bot,
  sprout: Sprout,
  code: Code2,
  sparkles: Sparkles,
};
export function CollectionIcon({ name }: { name: string }) {
  const Icon =
    collectionIcons[name as keyof typeof collectionIcons] ?? FolderOpen;
  return <Icon size={19} strokeWidth={1.6} aria-hidden="true" />;
}
export function DistributionBar({
  label,
  count,
  total,
  color,
}: {
  label: string;
  count: number;
  total: number;
  color?: string;
}) {
  return (
    <div className="bar-row">
      <div className="bar-label">
        <span>{label}</span>
        <span className="mono">{count}</span>
      </div>
      <div className="bar-track" aria-hidden="true">
        <div
          className="bar-fill"
          style={{
            width: `${total ? (count / total) * 100 : 0}%`,
            background: color,
          }}
        />
      </div>
    </div>
  );
}
