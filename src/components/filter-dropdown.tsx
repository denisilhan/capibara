"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type Option = { value: string; label: string };

export function FilterDropdown({ label, value, options, onChange }: {
  label: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const listId = useId();
  const selected = Math.max(0, options.findIndex((option) => option.value === value));

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [open]);

  const focusOption = (index: number) => {
    root.current?.querySelectorAll<HTMLElement>("[role=option]")[index]?.focus();
  };
  const choose = (next: string) => {
    onChange(next);
    setOpen(false);
    trigger.current?.focus();
  };

  return (
    <div className="filter-field" ref={root} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }}>
      <span className="filter-label" id={`${listId}-label`}>{label}</span>
      <button
        ref={trigger}
        type="button"
        className="filter-trigger"
        aria-label={`${label}: ${options[selected]?.label ?? value}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            setOpen(true);
            requestAnimationFrame(() => focusOption(selected));
          } else if (event.key === "Escape") setOpen(false);
        }}
      >
        <span>{options[selected]?.label ?? value}</span>
        <ChevronDown size={13} aria-hidden="true" />
      </button>
      {open && <div
        id={listId}
        className="filter-menu"
        role="listbox"
        aria-labelledby={`${listId}-label`}
        onKeyDown={(event) => {
          const current = Array.from(root.current?.querySelectorAll<HTMLElement>("[role=option]") ?? []).indexOf(document.activeElement as HTMLElement);
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            focusOption((current + (event.key === "ArrowDown" ? 1 : -1) + options.length) % options.length);
          } else if (event.key === "Home") { event.preventDefault(); focusOption(0); }
          else if (event.key === "End") { event.preventDefault(); focusOption(options.length - 1); }
          else if (event.key === "Escape") { event.preventDefault(); setOpen(false); trigger.current?.focus(); }
          else if (event.key === "Tab") setOpen(false);
        }}
      >
        {options.map((option) => <button
          type="button"
          role="option"
          aria-selected={option.value === value}
          tabIndex={-1}
          key={option.value}
          onClick={() => choose(option.value)}
          className="filter-option"
        >{option.label}</button>)}
      </div>}
    </div>
  );
}
