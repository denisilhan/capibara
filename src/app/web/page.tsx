import Link from "next/link";
import { websites } from "@/data/web";
import { weird } from "@/data/weird";
import { redirect } from "next/navigation";
import { Directory } from "@/components/directory";
import { parseFilters } from "@/lib/query";
export const metadata = { title: "web" };
const sections = [
  { id: "all", label: "all" },
  { id: "useful", label: "useful sites" },
  { id: "weird", label: "weird & wonderful" },
  { id: "games", label: "games" },
];
export default async function WebPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  if (params.section === "extensions") redirect("/extensions");
  const section = sections.some(s => s.id === params.section) ? String(params.section) : "all";
  const initial = parseFilters(params);
  const items = section === "weird" ? weird
    : section === "all" ? [...websites, ...weird] : websites.filter(item => item.section === section);
  return <>
    <div className="page-heading"><div><h1>web.</h1><p>useful websites, small games, and things worth getting distracted by.</p></div></div>
    <nav className="web-tabs" aria-label="web sections">{sections.map(s => <Link key={s.id} href={`/web?section=${s.id}`} aria-current={section === s.id ? "page" : undefined}>{s.label}</Link>)}</nav>
    {section === "games" && <p className="list-help">play solo or with friends. filter by genre and play style; match lengths vary.</p>}
    <Directory key={section + JSON.stringify(initial)} items={items} kind={section === "weird" ? "weird" : section === "games" ? "game" : "web"} initial={initial} />
  </>;
}
