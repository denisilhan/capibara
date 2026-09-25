import { notFound } from "next/navigation";
import { tools } from "@/data/tools";
import { CatalogDetail } from "@/components/catalog-detail";
export function generateStaticParams() { return tools.map((item) => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; return { title: tools.find((item) => item.slug === slug)?.name ?? "tool not found" };
}
export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const item = tools.find((entry) => entry.slug === slug);
  if (!item) notFound(); return <CatalogDetail item={item} />;
}

