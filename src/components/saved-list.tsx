"use client";
import Link from "next/link";
import { resources } from "@/data";
import { ResourceRows } from "./rows";
import { SaveButton, useSavedIds } from "./save-button";

export function SavedList() {
  const ids = useSavedIds();
  const items = resources.filter(item => ids.includes(item.id));
  if (!items.length) return <div className="empty-state"><h2>nothing saved yet</h2><p>open an entry and choose “save for later” to keep it here.</p><Link className="text-link" href="/">discover something →</Link></div>;
  return <div>{items.map(item => <section className="saved-entry mixed-directory" key={item.id}><ResourceRows items={[item]} showKind /><SaveButton id={item.id} /></section>)}</div>;
}
