"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

function subscribe(notify: () => void) {
  const sync = (event: StorageEvent) => {
    if (event.key === "capybara-theme" || event.key === null) {
      document.documentElement.dataset.theme = event.newValue === "dark" ? "dark" : "light";
      notify();
    }
  };
  window.addEventListener("capybara-theme", notify);
  window.addEventListener("storage", sync);
  return () => {
    window.removeEventListener("capybara-theme", notify);
    window.removeEventListener("storage", sync);
  };
}

export function ThemeToggle() {
  useEffect(() => {
    // A not-found response can replace the root attributes after the head script.
    try {
      document.documentElement.dataset.theme = localStorage.getItem("capybara-theme") === "dark" ? "dark" : "light";
      window.dispatchEvent(new Event("capybara-theme"));
    } catch { /* Keep the default theme if storage is unavailable. */ }
  }, []);
  const theme = useSyncExternalStore(subscribe,
    () => document.documentElement.dataset.theme === "dark" ? "dark" : "light",
    () => "light",
  );
  const next = theme === "light" ? "dark" : "light";
  return <button type="button" className="theme-toggle" aria-label={`switch to ${next} mode`} onClick={() => {
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("capybara-theme", next); } catch { /* The toggle still works when storage is unavailable. */ }
    window.dispatchEvent(new Event("capybara-theme"));
  }}>
    {theme === "light" ? <Moon size={16} aria-hidden="true" /> : <Sun size={16} aria-hidden="true" />}
    <span>{next} mode</span>
  </button>;
}
