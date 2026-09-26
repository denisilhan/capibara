import { apis } from "@/data/apis";
import { Directory } from "@/components/directory";
import { parseFilters } from "@/lib/query";
export const metadata = { title: "apis" };
export default async function ApisPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const initial = parseFilters(await searchParams);
  return (
    <>
      <div className="page-heading">
        <div>
          <h1>apis.</h1>
          <p>
            find data and features for your app. compare pricing and access;
            auth tells you whether a service needs a key or an account.
          </p>
        </div>
        <span className="eyebrow">/ apis</span>
      </div>
      <Directory
        key={JSON.stringify(initial)}
        kind="api"
        items={apis}
        initial={initial}
      />
    </>
  );
}
