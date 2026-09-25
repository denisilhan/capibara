"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
export function CopyButton({ text }: { text: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  return (
    <>
      <button
        className="button subtle"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(text);
            setStatus("copied");
          } catch {
            setStatus("error");
          }
        }}
      >
        {status === "copied" ? <Check size={12} /> : <Copy size={12} />}{" "}
        {status === "copied" ? "copied" : "copy"}
      </button>
      <span role="status" className="muted">
        {status === "error"
          ? "clipboard unavailable — select and copy the command below."
          : ""}
      </span>
    </>
  );
}
