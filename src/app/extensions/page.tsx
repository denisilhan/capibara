import Link from "next/link";
import { extensions } from "@/data/tools";
import { Directory } from "@/components/directory";
import { parseFilters } from "@/lib/query";
export const metadata = { title: "browser extensions" };
export default async function ExtensionsPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const initial = parseFilters(await searchParams);
  return <><div className="page-heading"><div><h1>browser extensions.</h1><p>audio controls, AI assistants, privacy helpers, and tools for power users. choose your browser and a category to narrow the list.</p><p className="note">browser support follows official listings. AI extensions show their actual publisher; third-party assistants are not official model-provider products.</p><Link className="text-link" href="/tools/gemini-in-chrome">looking for Gemini? see the built-in Chrome feature →</Link></div></div><Directory key={JSON.stringify(initial)} kind="extension" items={extensions} initial={initial} /></>;
}
