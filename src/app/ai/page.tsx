import Link from "next/link";
import { tools } from "@/data/tools";
import { aiSections, isAiTool } from "@/lib/ai";
import { Directory } from "@/components/directory";
import { parseFilters } from "@/lib/query";

export const metadata = { title: "ai & agents", description: "AI tools for coding, web development, design, mobile apps, and automation." };

export default async function AiPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const selected = aiSections.find(section => section.id === params.section);
  const aiTools = tools.filter(isAiTool);
  const sections = aiSections.filter(section => aiTools.some(item => item.aiAreas?.includes(section.id)));
  const items = selected ? aiTools.filter(item => item.aiAreas?.includes(selected.id)) : aiTools;
  const initial = parseFilters(params);
  return <>
    <div className="page-heading"><div><h1>ai & agents.</h1><p>find a tool for what you want to make: code, a website, a design, an app, or a workflow.</p></div></div>
    <nav className="web-tabs" aria-label="ai use cases">
      <Link href="/ai" aria-current={!selected ? "page" : undefined}>all <span className="mono muted">{aiTools.length}</span></Link>
      {sections.map(section => <Link key={section.id} href={`/ai?section=${section.id}`} aria-current={selected?.id === section.id ? "page" : undefined}>{section.label} <span className="mono muted">{aiTools.filter(item => item.aiAreas?.includes(section.id)).length}</span></Link>)}
    </nav>
    <p className="list-help">{selected?.description ?? "choose a use case, then narrow by tool type and where it runs. some tools belong in more than one section."}</p>
    <Directory key={(selected?.id ?? "all") + JSON.stringify(initial)} items={items} kind="ai" initial={initial} />
    <p className="note">use cases are curated by capibara. platform means where you use the tool; mobile apps is what you build. provider sources are linked on each detail page.</p>
  </>;
}
