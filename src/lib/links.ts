import type { DiscordBot, Resource } from "../types/index";
export const resourcePath = (resource: Resource) =>
  `/${({ api: "apis", bot: "bots", tool: "tools", weird: "weird" } as const)[resource.kind]}/${resource.slug}`;
// Exact provider redirects are reviewed, never synthesized from a bot name.
const reviewedRedirects = new Set(["https://sapph.xyz/invite"]);
export function verifiedInviteUrl(bot: DiscordBot): string | null {
  if (!bot.verifiedInvite || !bot.inviteUrl || !bot.inviteSourceUrl)
    return null;
  try {
    const url = new URL(bot.inviteUrl);
    if (url.protocol !== "https:" || url.username || url.password) return null;
    const discordOAuth =
      url.hostname === "discord.com" &&
      ["/oauth2/authorize", "/api/oauth2/authorize"].includes(url.pathname) &&
      /^\d+$/.test(url.searchParams.get("client_id") ?? "") &&
      (url.searchParams.get("scope") ?? "").split(" ").includes("bot");
    return discordOAuth || reviewedRedirects.has(url.href)
      ? bot.inviteUrl
      : null;
  } catch {
    return null;
  }
}
