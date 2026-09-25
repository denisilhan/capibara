import { weird } from "@/data/weird";
import { Directory } from "@/components/directory";
import { parseFilters } from "@/lib/query";
export const metadata = { title: "weird web" };
export default async function WeirdPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const initial = parseFilters(await searchParams);
  return <><div className="page-heading"><div><h1>weird web.</h1><p>small experiments, unexpected interfaces, and curious places online.</p></div></div><Directory key={JSON.stringify(initial)} kind="weird" items={weird} initial={initial} /></>;
}

