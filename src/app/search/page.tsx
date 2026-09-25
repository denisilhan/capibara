import { resources } from "@/data";
import { Directory } from "@/components/directory";
import { parseFilters } from "@/lib/query";
export const metadata = { title: "search" };
export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const initial = parseFilters(await searchParams);
  return (
    <>
      <div className="page-heading">
        <div>
          <h1>search the directory.</h1>
          <p>apis, bots, categories, and a few happy accidents.</p>
        </div>
      </div>
      <Directory
        key={JSON.stringify(initial)}
        items={resources}
        kind="all"
        initial={initial}
      />
    </>
  );
}
