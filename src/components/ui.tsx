import type { ReactNode } from "react";
import { ArrowUpRight, SearchX, GraduationCap, FlaskConical, UnlockKeyhole, Database, Bot, Sprout, Code2, Sparkles, FolderOpen } from "lucide-react";

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
