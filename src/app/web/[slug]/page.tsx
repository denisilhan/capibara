import { notFound } from "next/navigation";
import { websites } from "@/data/web";
import { CatalogDetail } from "@/components/catalog-detail";
export function generateStaticParams() { return websites.map((item) => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; return { title: websites.find((item) => item.slug === slug)?.name ?? "site not found" };
}
export default async function WebDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const item = websites.find((entry) => entry.slug === slug);
  if (!item) notFound(); return <CatalogDetail item={item} />;
}
