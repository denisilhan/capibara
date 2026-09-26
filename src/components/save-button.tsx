"use client";
import { useState, useSyncExternalStore } from "react";

const key = "capibara-saved";
const eventName = "capibara-saved-change";
function subscribe(notify: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === key || event.key === null) notify();
  };
  window.addEventListener(eventName, notify);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(eventName, notify);
    window.removeEventListener("storage", onStorage);
  };
}
function snapshot() {
  try { return localStorage.getItem(key) ?? "[]"; } catch { return "[]"; }
}
function parseSaved(value: string): string[] {
  try {
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === "string") : [];
  } catch { return []; }
}
export function useSavedIds() {
  return parseSaved(useSyncExternalStore(subscribe, snapshot, () => "[]"));
}
export function SaveButton({ id }: { id: string }) {
  const ids = useSavedIds();
  const saved = ids.includes(id);
  const [error, setError] = useState(false);
  return <span className="save-control">
    <button className="button subtle" type="button" aria-pressed={saved} onClick={() => {
      try {
        const current = parseSaved(snapshot());
        localStorage.setItem(key, JSON.stringify(current.includes(id) ? current.filter(value => value !== id) : [...current, id]));
        window.dispatchEvent(new Event(eventName));
        setError(false);
      } catch { setError(true); }
    }}>{saved ? "saved ✓" : "save for later"}</button>
    {error && <span role="status" className="note">your browser could not save this entry.</span>}
  </span>;
}
