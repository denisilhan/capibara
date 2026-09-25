import { notFound } from "next/navigation";
import { weird } from "@/data/weird";
import { CatalogDetail } from "@/components/catalog-detail";
export function generateStaticParams() { return weird.map((item) => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; return { title: weird.find((item) => item.slug === slug)?.name ?? "site not found" };
}
export default async function WeirdPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const item = weird.find((entry) => entry.slug === slug);
  if (!item) notFound(); return <CatalogDetail item={item} />;
}

