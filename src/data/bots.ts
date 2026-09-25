import type { DiscordBot } from "../types/index";
type Seed = Pick<
  DiscordBot,
  "slug" | "name" | "description" | "categories" | "websiteUrl"
> &
  Partial<DiscordBot>;
const seeds: Seed[] = [
  {
    slug: "carl-bot",
    name: "carl-bot",
    description:
      "reaction roles, moderation, and custom commands for a more organized server.",
    categories: ["moderation", "tools"],
    tags: ["roles", "automation"],
    websiteUrl: "https://carl.gg/",
    pricing: "freemium",
    pricingNote:
      "free features and premium commands are documented. current plan prices are not recorded.",
    usefulnessScore: 9.1,
    weirdnessScore: 2.1,
    sources: [
      {
        url: "https://github.com/botlabs-gg/carlbot-docs/blob/master/docs/roles.md",
        label: "official role documentation",
        facts: "reaction roles and premium command availability.",
      },
    ],
  },
  {
    slug: "dyno",
    name: "dyno",
    description:
      "server management and moderation with a configurable web dashboard.",
    categories: ["moderation", "tools"],
    tags: ["dashboard", "community"],
    websiteUrl: "https://dyno.gg/",
    pricing: null,
    usefulnessScore: 9.0,
    weirdnessScore: 1.7,
  },
  {
    slug: "fredboat",
    name: "fredboat",
    description: "a music bot for listening together in your discord server.",
    categories: ["music"],
    tags: ["audio", "community"],
    websiteUrl: "https://fredboat.com/",
    pricing: null,
    usefulnessScore: 8.6,
    weirdnessScore: 3.5,
    sources: [
      {
        url: "https://docs.fredboat.com/",
        label: "official documentation",
        facts:
          "official music bot documentation exists; pricing and a current invite URL are not recorded.",
      },
    ],
  },
  {
    slug: "sapphire",
    name: "sapphire",
    description:
      "customizable moderation, roles, and community tools in one bot.",
    categories: ["moderation", "tools"],
    tags: ["roles", "automation"],
    websiteUrl: "https://sapph.xyz/",
    inviteUrl: "https://sapph.xyz/invite",
    verifiedInvite: true,
    inviteSourceUrl: "https://sapph.xyz/",
    sources: [{url: "https://sapph.xyz/", label: "official website and invite", facts: "core bot features and free pricing. the published /invite link was followed to Discord’s login screen with an OAuth authorization destination for Sapphire; no authorization was granted."}],
    pricing: "free",
    pricingNote:
      "the provider describes the core bot as completely free. optional custom branding is a separate offering.",
    usefulnessScore: 8.9,
    weirdnessScore: 2.3,
  },
  {
    slug: "disboard",
    name: "disboard",
    description:
      "a server listing companion that helps communities get discovered.",
    categories: ["community", "tools"],
    tags: ["discovery", "servers"],
    websiteUrl: "https://disboard.org/",
    pricing: null,
    usefulnessScore: 7.8,
    weirdnessScore: 3.0,
  },
  {
    slug: "midjourney",
    name: "midjourney",
    description: "turn text prompts into images from within discord.",
    categories: ["ai", "art"],
    tags: ["images", "creative"],
    websiteUrl: "https://www.midjourney.com/",
    pricing: "paid",
    pricingNote:
      "a subscription is required. all subscription plans support Discord; exact prices are not recorded.",
    usefulnessScore: 8.8,
    weirdnessScore: 7.4,
    sources: [
      {
        url: "https://docs.midjourney.com/hc/en-us/articles/31541509949069-Using-Midjourney-in-Discord",
        label: "official Discord guide",
        facts: "Discord image generation and subscription requirement.",
      },
    ],
  },
  {
    slug: "yagpdb",
    name: "yagpdb",
    description:
      "advanced automoderation, feeds, and custom commands for hands-on server owners.",
    categories: ["moderation", "tools"],
    tags: ["automation", "feeds", "open source"],
    websiteUrl: "https://yagpdb.xyz/",
    githubUrl: "https://github.com/botlabs-gg/yagpdb",
    isOpenSource: true,
    pricing: null,
    usefulnessScore: 9.2,
    weirdnessScore: 4.5,
    sources: [
      {
        url: "https://yagpdb.xyz/",
        label: "official website",
        facts: "moderation, feeds, roles and custom commands.",
      },
      {
        url: "https://github.com/botlabs-gg/yagpdb",
        label: "official repository",
        facts: "public source and license.",
      },
    ],
  },
  {
    slug: "red",
    name: "red discord bot",
    description:
      "a modular, self-hosted bot for moderation, music, trivia, and your own extensions.",
    categories: ["tools", "moderation"],
    tags: ["self-hosted", "python", "open source"],
    websiteUrl: "https://docs.discord.red/en/stable/",
    githubUrl: "https://github.com/Cog-Creators/Red-DiscordBot",
    isOpenSource: true,
    pricing: "free",
    pricingNote:
      "free open-source software. you host and maintain your own instance; infrastructure costs are separate.",
    usefulnessScore: 8.9,
    weirdnessScore: 5.1,
    sources: [
      {
        url: "https://github.com/Cog-Creators/Red-DiscordBot",
        label: "official repository",
        facts: "GPL-licensed, self-hosted, modular Discord bot.",
      },
    ],
  },
  {
    slug: "discord-tickets",
    name: "discord tickets",
    description:
      "open-source ticket management for support conversations in your community.",
    categories: ["support", "tools"],
    tags: ["self-hosted", "tickets", "open source"],
    websiteUrl: "https://github.com/discord-tickets/bot",
    githubUrl: "https://github.com/discord-tickets/bot",
    isOpenSource: true,
    pricing: "free",
    pricingNote:
      "free self-hosted software; hosting and maintenance costs are separate.",
    usefulnessScore: 9.0,
    weirdnessScore: 1.8,
  },
  {
    slug: "poketwo",
    name: "pokétwo",
    description:
      "catch, collect, trade, and battle pokémon without leaving your server.",
    categories: ["gaming", "weird"],
    tags: ["pokémon", "community", "open source"],
    websiteUrl: "https://poketwo.net/",
    inviteUrl: null,
    verifiedInvite: false,
    inviteSourceUrl: null,
    githubUrl: "https://github.com/poketwo/poketwo",
    isOpenSource: true,
    pricing: "free",
    pricingNote:
      "the provider describes the game as free to play. optional purchases are not cataloged.",
    usefulnessScore: 7.6,
    weirdnessScore: 9.2,
    sources: [
      {
        url: "https://poketwo.net/",
        label: "official website and invite",
        facts:
          "free-to-play description and source-code link. the provider invite redirect was checked and reached a 404; invite disabled.",
      },
      {
        url: "https://github.com/poketwo/poketwo",
        label: "official repository",
        facts: "open-source bot code.",
      },
    ],
  },
];
export const bots: DiscordBot[] = seeds.map((seed) => ({
  kind: "bot",
  id: `bot-${seed.slug}`,
  tags: [],
  pricing: null,
  pricingNote: "pricing not recorded; check the official provider.",
  inviteUrl: null,
  githubUrl: null,
  verifiedInvite: false,
  inviteSourceUrl: null,
  isOpenSource: null,
  usefulnessScore: 8,
  weirdnessScore: 3,
  sourceVerifiedAt: "2026-09-25",
  sources: [
    {
      url: seed.websiteUrl,
      label: "official provider",
      facts:
        "official presence and product purpose reviewed. unknown facts remain unset.",
    },
  ],
  ...seed,
}));
