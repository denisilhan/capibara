/** Sample without replacement, leaving the source catalog untouched. */
export function sampleItems<T>(items: readonly T[], count: number, rng: () => number = Math.random): T[] {
  const pool = [...items];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.max(0, count));
}
