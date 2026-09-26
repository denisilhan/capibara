import { bots } from "@/data/bots";
import { Directory } from "@/components/directory";
import { parseFilters } from "@/lib/query";
export const metadata = { title: "discord bots" };
export default async function BotsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const initial = parseFilters(await searchParams);
  return (
    <>
      <div className="page-heading">
        <div>
          <h1>discord bots.</h1>
          <p>
            find a bot for games, roleplay, chat, events, or server management.
            open an entry to see what it does and how to add it.
          </p>
        </div>
        <span className="eyebrow">/ bots</span>
      </div>
      <Directory
        key={JSON.stringify(initial)}
        kind="bot"
        items={bots}
        initial={initial}
      />
    </>
  );
}
