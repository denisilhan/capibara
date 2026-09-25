import { resources } from "@/data";
import { randomResource } from "@/lib/filtering";
import { RandomDiscovery } from "@/components/random-discovery";
export const dynamic = "force-dynamic";
export const metadata = { title: "random discovery" };
export default function RandomPage() {
  const initial = randomResource(resources)!;
  return (
    <>
      <div className="page-heading">
        <div>
          <h1>random discovery.</h1>
          <p>find another entry from the directory.</p>
        </div>
        <span className="eyebrow">/ random</span>
      </div>
      <RandomDiscovery initial={initial} />
    </>
  );
}
