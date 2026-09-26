import type { DiscordBot } from "../types/index";
type Seed = Pick<
  DiscordBot,
  "slug" | "name" | "description" | "categories" | "websiteUrl"
> &
  Partial<DiscordBot>;
const seeds: Seed[] = [
{
  "slug": "jockie-music",
  "name": "jockie music",
  "description": "coordinate music playback across multiple voice channels with companion bot instances.",
  "categories": [
    "music"
  ],
  "tags": [],
  "websiteUrl": "https://www.jockiemusic.com/",
  "overview": "use the official site to choose a bot instance for your server, then follow its music commands.",
  "sourceVerifiedAt": "2026-09-27",
  "sources": [
    {
      "url": "https://www.jockiemusic.com/",
      "label": "official documentation / creator page",
      "facts": "bot purpose and described features reviewed; unrecorded pricing and permissions remain unknown."
    }
  ]
},
{
  "slug": "fmbot",
  "name": ".fmbot",
  "description": "share listening history, compare music tastes, and create album charts in Discord.",
  "categories": [
    "music",
    "community"
  ],
  "tags": [],
  "websiteUrl": "https://fm.bot/",
  "overview": "connect your Last.fm account through the documented login command, then explore listening charts and music games.",
  "sourceVerifiedAt": "2026-09-27",
  "sources": [
    {
      "url": "https://fm.bot/",
      "label": "official documentation / creator page",
      "facts": "bot purpose and described features reviewed; unrecorded pricing and permissions remain unknown."
    }
  ]
},
{
  "slug": "appy",
  "name": "appy",
  "description": "collect server applications and forms, handle tickets, and manage member verification.",
  "categories": [
    "tools",
    "community"
  ],
  "tags": [],
  "websiteUrl": "https://appy.bot/",
  "overview": "start with a single form for your server, such as a staff application. review the dashboard settings before opening it to members.",
  "sourceVerifiedAt": "2026-09-27",
  "sources": [
    {
      "url": "https://appy.bot/",
      "label": "official documentation / creator page",
      "facts": "bot purpose and described features reviewed; unrecorded pricing and permissions remain unknown."
    }
  ],
  "pricing": "freemium",
  "pricingNote": "the site lists free features and a premium offering; current plan prices are not recorded."
},
{
  "slug": "ticket-tool",
  "name": "ticket tool",
  "description": "create private support tickets between server members and staff.",
  "categories": [
    "tools",
    "moderation"
  ],
  "tags": [],
  "websiteUrl": "https://tickettool.xyz/",
  "overview": "configure a support panel and staff access using the official dashboard. members can then open a private ticket.",
  "sourceVerifiedAt": "2026-09-27",
  "sources": [
    {
      "url": "https://docs.tickettool.xyz/",
      "label": "official documentation / creator page",
      "facts": "bot purpose and described features reviewed; unrecorded pricing and permissions remain unknown."
    }
  ],
  "inviteUrl": "https://tickettool.xyz/invite",
  "inviteSourceUrl": "https://docs.tickettool.xyz/",
  "verifiedInvite": true
},
{
  "slug": "discohook-utils",
  "name": "discohook utilities",
  "description": "create reaction roles, format mentions, and recover messages for the Discohook editor.",
  "categories": [
    "tools",
    "community"
  ],
  "tags": [],
  "websiteUrl": "https://discohook.org/",
  "overview": "this is the companion Discord bot for Discohook. the browser editor sends webhook messages; the bot adds server utilities.",
  "sourceVerifiedAt": "2026-09-27",
  "sources": [
    {
      "url": "https://discohook.org/",
      "label": "official documentation / creator page",
      "facts": "bot purpose and described features reviewed; unrecorded pricing and permissions remain unknown."
    }
  ]
},
{
  "slug": "counting",
  "name": "counting",
  "description": "turn a Discord channel into a shared counting challenge with server scoreboards.",
  "categories": [
    "gaming",
    "community"
  ],
  "tags": [],
  "websiteUrl": "https://countingbot.com/",
  "overview": "give your community a shared counting challenge and use the official support links for setup and rules.",
  "sourceVerifiedAt": "2026-09-27",
  "sources": [
    {
      "url": "https://countingbot.com/",
      "label": "official documentation / creator page",
      "facts": "bot purpose and described features reviewed; unrecorded pricing and permissions remain unknown."
    }
  ]
},
{
  "slug": "owo",
  "name": "owo",
  "description": "hunt and battle in a Discord game with a virtual economy and leaderboards.",
  "categories": [
    "gaming",
    "community"
  ],
  "tags": [],
  "websiteUrl": "https://owobot.com/",
  "overview": "an ongoing chat-based game for a server. use the official bot site for setup and its command guide for game rules.",
  "sourceVerifiedAt": "2026-09-27",
  "sources": [
    {
      "url": "https://owobot.com/",
      "label": "official documentation / creator page",
      "facts": "bot purpose and described features reviewed; unrecorded pricing and permissions remain unknown."
    }
  ]
},
  {
    slug: "carl-bot", overview: "start with one server task, such as reaction roles or moderation. configure that feature through the official guide before enabling more commands.",
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
    slug: "dyno", overview: "start with the moderation rules your community actually needs. use the official dashboard and command guide to configure them for your server.",
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
    slug: "fredboat", overview: "use the provider\u2019s music commands to manage listening in a Discord voice channel. check the current supported sources and setup guide on the official site.",
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
    slug: "sapphire", overview: "pick a moderation or automation task for your server, then configure it through the official dashboard. the verified invite above opens the provider\u2019s setup flow.",
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
  {
    "slug": "avrae",
    "name": "avrae",
    "description": "roll dice, use character sheets, and track tabletop combat inside Discord.",
    "overview": "bring this to a D&D group that plays in chat. players can import a supported character sheet and roll attacks or checks; the game master can keep track of turns and combat. start with the official command guide.",
    "categories": [
      "rpg",
      "gaming"
    ],
    "tags": [
      "dnd",
      "dice",
      "tabletop"
    ],
    "websiteUrl": "https://avrae.io/",
    "sources": [
      {
        "url": "https://avrae.io/",
        "label": "official website",
        "facts": "dice rolling, supported character sheets, and initiative tracking; pricing and direct invite not recorded."
      }
    ],
    "sourceVerifiedAt": "2026-09-26"
  },
  {
    "slug": "dank-memer",
    "name": "dank memer",
    "description": "play a Discord economy game with collecting, fishing, trading, and adventures.",
    "overview": "this adds a persistent game to your server rather than a moderation tool. players collect items, explore, and trade with each other. read the official guides for the current commands and game rules.",
    "categories": [
      "gaming"
    ],
    "tags": [
      "economy",
      "collecting",
      "social"
    ],
    "websiteUrl": "https://dankmemer.lol/",
    "sources": [
      {
        "url": "https://dankmemer.lol/",
        "label": "official website",
        "facts": "economy game, collecting, fishing, and social play. pricing and direct invite not recorded."
      }
    ],
    "sourceVerifiedAt": "2026-09-26"
  },
  {
    "slug": "tupperbox",
    "name": "tupperbox",
    "description": "send roleplay messages using characters with their own names and avatars.",
    "overview": "create a character profile, choose its message brackets, then use those brackets when chatting. useful for a roleplay scene or a tabletop conversation where one person speaks as several characters.",
    "categories": [
      "roleplay",
      "chat"
    ],
    "tags": [
      "characters",
      "rpg",
      "profiles"
    ],
    "websiteUrl": "https://tupperbox.app/",
    "inviteUrl": "https://discord.com/oauth2/authorize?client_id=431544605209788416&permissions=275415166016&scope=bot+applications.commands",
    "verifiedInvite": true,
    "inviteSourceUrl": "https://tupperbox.app/",
    "sources": [
      {
        "url": "https://tupperbox.app/",
        "label": "official website",
        "facts": "character profiles, message brackets, and dashboard. the official Add To Server link was followed to the Tupperbox Discord app authorization page; no authorization was granted."
      }
    ],
    "sourceVerifiedAt": "2026-09-26"
  },
  {
    "slug": "statbot",
    "name": "statbot",
    "description": "see message, voice, and member activity for your Discord community.",
    "overview": "use it to understand which channels people use and when your community is active. stats are available through the bot and its dashboard, with channel counters and activity-based roles also documented.",
    "categories": [
      "information",
      "community"
    ],
    "tags": [
      "stats",
      "activity",
      "server info"
    ],
    "websiteUrl": "https://statbot.net/",
    "sources": [
      {
        "url": "https://docs.statbot.net/docs/faq/general/what-is-statbot/",
        "label": "official documentation",
        "facts": "message, voice, activity and member tracking; counters and activity-based roles. pricing not recorded."
      }
    ],
    "sourceVerifiedAt": "2026-09-26"
  },
  {
    "slug": "sesh",
    "name": "sesh",
    "description": "schedule server events, collect RSVPs, and find a time that works across time zones.",
    "overview": "plan a game night or community session without a long scheduling thread. create an event, let members RSVP, and use availability polls when the time is undecided. some advanced event features are premium.",
    "categories": [
      "community",
      "information"
    ],
    "tags": [
      "events",
      "calendar",
      "gaming"
    ],
    "websiteUrl": "https://sesh.fyi/",
    "inviteUrl": "https://discord.com/oauth2/authorize?client_id=616754792965865495&permissions=17998396517440&redirect_uri=https%3A%2F%2Fdiscord.com%2Finvite%2FhJgX7Hw&response_type=code&scope=applications.commands+bot",
    "verifiedInvite": true,
    "inviteSourceUrl": "https://sesh.fyi/",
    "sources": [
      {
        "url": "https://sesh.fyi/",
        "label": "official website",
        "facts": "events, RSVP, reminders, time zones, and premium features. the official Add to Discord link was followed to the sesh Discord app authorization page; no authorization was granted."
      }
    ],
    "sourceVerifiedAt": "2026-09-26"
  },
  {
  "slug": "chip",
  "name": "chip",
  "description": "play music in Discord and adjust playback with audio controls.",
  "categories": [
    "music"
  ],
  "tags": [
    "audio",
    "equalizer"
  ],
  "websiteUrl": "https://chipbot.gg/",
  "overview": "try it for shared listening in a voice channel. check the official commands and premium page for current features.",
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://chipbot.gg/",
      "label": "official project",
      "facts": "official bot purpose and described features; pricing and invitation permissions not recorded."
    }
  ]
},
  {
  "slug": "pancake",
  "name": "pancake",
  "description": "combine music, moderation, reaction roles, and playful image commands.",
  "categories": [
    "music",
    "moderation",
    "community"
  ],
  "tags": [
    "images",
    "roles",
    "fun"
  ],
  "websiteUrl": "https://pancake.gg/",
  "overview": "a useful choice when your server wants both practical moderation and silly chat commands, including reaction images and akinator.",
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://pancake.gg/",
      "label": "official project",
      "facts": "official bot purpose and described features; pricing and invitation permissions not recorded."
    }
  ]
},
  {
  "slug": "triviabot",
  "name": "triviabot",
  "description": "run team quizzes and trivia games inside a Discord server.",
  "categories": [
    "gaming",
    "community"
  ],
  "tags": [
    "quiz",
    "trivia",
    "turkish"
  ],
  "websiteUrl": "https://triviabot.co.uk/",
  "overview": "organize a quiz night with teams and server rewards. the official site lists Turkish among its supported languages.",
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://triviabot.co.uk/",
      "label": "official project",
      "facts": "official bot purpose and described features; pricing and invitation permissions not recorded."
    }
  ]
},
  {
  "slug": "seven-spells",
  "name": "seven spells of destruction",
  "description": "explore a shared fantasy world through a multiplayer Discord RPG.",
  "categories": [
    "gaming",
    "rpg"
  ],
  "tags": [
    "quests",
    "fantasy",
    "exploration"
  ],
  "websiteUrl": "https://www.ssod.org/",
  "overview": "a more unusual alternative to utility bots: explore Cryptillia, discover lore, and search for equipment in a game played through Discord.",
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://www.ssod.org/",
      "label": "official project",
      "facts": "official bot purpose and described features; pricing and invitation permissions not recorded."
    }
  ]
},
  {
  "slug": "karuta",
  "name": "karuta",
  "description": "collect, trade, and upgrade anime character cards in Discord.",
  "categories": [
    "gaming"
  ],
  "tags": [
    "anime",
    "cards",
    "collecting"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://karuta.com/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "websiteUrl": "https://karuta.com/",
  "overview": "turn a server into a card-collecting group, with trading and upgrades between players."
},
  {
  "slug": "unbelievaboat",
  "name": "unbelievaboat",
  "description": "run a customizable virtual economy with items, games, and moderation.",
  "categories": [
    "gaming",
    "moderation"
  ],
  "tags": [
    "economy",
    "shop"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://unbelievaboat.com/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "websiteUrl": "https://unbelievaboat.com/",
  "overview": "build a server economy with custom shop items and roles. the game currency belongs to the bot experience."
},
  {
  "slug": "double-counter",
  "name": "double counter",
  "description": "screen joining members for alternate-account and raid risks.",
  "categories": [
    "moderation"
  ],
  "tags": [
    "verification",
    "anti-raid"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://doublecounter.gg/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "websiteUrl": "https://doublecounter.gg/",
  "overview": "use its member-verification workflow when managing a community. review the provider's verification process and privacy information before enabling it."
},
  {
  "slug": "reminder-bot",
  "name": "reminder bot",
  "description": "schedule reminders for Discord channels and conversations.",
  "categories": [
    "utilities",
    "community"
  ],
  "tags": [
    "reminders",
    "scheduling"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://reminder-bot.com/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "websiteUrl": "https://reminder-bot.com/",
  "overview": "set a reminder for a task or server event so it appears at the chosen time."
},
  {
  "slug": "tacoshack",
  "name": "tacoshack",
  "description": "manage a virtual taco shop with upgrades, staff, and franchises.",
  "categories": [
    "gaming"
  ],
  "tags": [
    "economy",
    "simulation"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://tacoshack.dev/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "websiteUrl": "https://tacoshack.dev/",
  "overview": "start a shop, reinvest in upgrades, and join other players in a franchise. it is an economy game played through Discord commands."
},
  {
  "slug": "mini-kraken",
  "name": "mini kraken",
  "description": "bring tabletop character sheets, dice, and campaign tools into Discord.",
  "categories": [
    "gaming",
    "rpg"
  ],
  "tags": [
    "tabletop",
    "dice",
    "character sheets"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://erpg.app/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "websiteUrl": "https://erpg.app/",
  "overview": "use the bot alongside the Mini Kraken web platform to keep sheets and campaign tools connected to server chat."
},
  {
  "slug": "probot",
  "name": "probot",
  "description": "manage welcome messages, reaction roles, moderation, and server logs.",
  "categories": [
    "moderation",
    "community"
  ],
  "tags": [
    "roles",
    "welcome",
    "logs"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://probot.io/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "websiteUrl": "https://probot.io/",
  "overview": "set up welcome images and member roles, then configure the moderation features your community needs."
},
  {
  "slug": "nekotina",
  "name": "nekotina",
  "description": "combine anime roleplay, music, virtual currency, and server utilities.",
  "categories": [
    "gaming",
    "music",
    "community"
  ],
  "tags": [
    "anime",
    "roleplay",
    "economy"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://nekotina.com/en",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "websiteUrl": "https://nekotina.com/en",
  "overview": "a playful multipurpose bot for communities that want social commands and music alongside administration."
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
