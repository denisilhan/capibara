import { tools } from "@/data/tools";
import { Directory } from "@/components/directory";
import { parseFilters } from "@/lib/query";
export const metadata = { title: "developer tools" };
export default async function ToolsPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const initial = parseFilters(await searchParams);
  return <><div className="page-heading"><div><h1>developer tools.</h1><p>useful clients, utilities, and infrastructure for building things.</p></div></div><Directory key={JSON.stringify(initial)} kind="tool" items={tools} initial={initial} /></>;
}

