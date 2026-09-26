import type { WeirdWeb } from "@/types";

export function WeirdnessMeter({ rating }: { rating: WeirdWeb["weirdness"] }) {
  if (!rating) return <span className="note">weirdness not reviewed</span>;
  const description = `weirdness: ${rating.level} of 3. capibara editorial assessment. ${rating.reason}`;
  return (
    <span className="weirdness-meter" role="img" aria-label={description} title={description}>
      <span className="weirdness-label" aria-hidden="true">weirdness</span>
      {[1, 2, 3].map((step) => (
        <span key={step} className={step <= rating.level ? "weirdness-segment filled" : "weirdness-segment"} aria-hidden="true" />
      ))}
    </span>
  );
}
