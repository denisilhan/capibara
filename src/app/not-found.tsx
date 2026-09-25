import Link from "next/link";
export default function NotFound() {
  return (
    <div className="empty">
      <p className="eyebrow">404 / unexplored territory</p>
      <h1>nothing to inspect here.</h1>
      <p>that service or collection isn’t in the directory.</p>
      <Link href="/" className="button primary">
        back to discover →
      </Link>
    </div>
  );
}
