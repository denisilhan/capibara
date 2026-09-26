import type { Api } from "../types/index";

// Facts were reviewed against the linked official sources on this date.
// Null means unverified/not recorded, never zero or unlimited.
const reviewed = "2026-09-25";
type Seed = Pick<
  Api,
  | "slug"
  | "name"
  | "provider"
  | "description"
  | "categories"
  | "docsUrl"
  | "officialUrl"
  | "buildIdeas"
> &
  Partial<Api>;
function api(seed: Seed): Api {
  return {
    kind: "api",
    id: `api-${seed.slug}`,
    tags: [],
    pricingType: null,
    startingPrice: null,
    currency: null,
    pricePeriod: null,
    pricingNote:
      "pricing and quotas not recorded; consult the official provider.",
    freeTier: null,
    freeRequests: null,
    requestPeriod: null,
    authType: null,
    authNote:
      "check the official documentation for authentication requirements.",
    endpointSample: null,
    curlSample: null,
    responseSample: null,
    usefulnessScore: 8,
    weirdnessScore: 3,
    beginnerScore: 8,
    featured: false,
    sourceVerifiedAt: reviewed,
    sources: [
      {
        url: seed.docsUrl,
        label: "official documentation",
        facts:
          "service purpose and documentation reviewed. unknown fields are left unset.",
      },
    ],
    ...seed,
  };
}
const seeds: Seed[] = [
{
  "slug": "frankfurter",
  "name": "frankfurter",
  "provider": "frankfurter",
  "description": "daily and historical currency exchange rates from central banks and official sources.",
  "categories": [
    "finance",
    "data"
  ],
  "docsUrl": "https://frankfurter.dev/",
  "officialUrl": "https://frankfurter.dev/",
  "buildIdeas": [
    "compare historical exchange rates"
  ],
  "sourceVerifiedAt": "2026-09-27",
  "authType": "none",
  "pricingType": "free",
  "endpointSample": "https://api.frankfurter.dev/v2/rates",
  "sources": [
    {
      "url": "https://frankfurter.dev/",
      "label": "official documentation / creator page",
      "facts": "purpose and documented access reviewed; unrecorded costs and quotas remain unknown."
    }
  ],
  "freeTier": true,
  "pricingNote": "the provider documents free access. follow its terms and attribution requirements.",
  "authNote": "the documented public requests do not require an API key.",
  "curlSample": "curl \"https://api.frankfurter.dev/v2/rates\""
},
{
  "slug": "gbif",
  "name": "GBIF",
  "provider": "global biodiversity information facility",
  "description": "search species names, biodiversity observations, datasets, and occurrence maps.",
  "categories": [
    "science",
    "animals",
    "data"
  ],
  "docsUrl": "https://techdocs.gbif.org/en/openapi/",
  "officialUrl": "https://techdocs.gbif.org/en/openapi/",
  "buildIdeas": [
    "build a species observation explorer"
  ],
  "sourceVerifiedAt": "2026-09-27",
  "authType": null,
  "pricingType": null,
  "endpointSample": null,
  "sources": [
    {
      "url": "https://techdocs.gbif.org/en/openapi/",
      "label": "official documentation / creator page",
      "facts": "purpose and documented access reviewed; unrecorded costs and quotas remain unknown."
    }
  ]
},
{
  "slug": "dicebear",
  "name": "dicebear",
  "provider": "dicebear",
  "description": "generate consistent SVG avatars from a style and a seed value.",
  "categories": [
    "media",
    "tools"
  ],
  "docsUrl": "https://www.dicebear.com/integrations/http-api/",
  "officialUrl": "https://www.dicebear.com/integrations/http-api/",
  "buildIdeas": [
    "give users reproducible default avatars"
  ],
  "sourceVerifiedAt": "2026-09-27",
  "authType": "none",
  "pricingType": null,
  "endpointSample": "https://api.dicebear.com/10.x/pixel-art/svg",
  "sources": [
    {
      "url": "https://www.dicebear.com/integrations/http-api/",
      "label": "official documentation / creator page",
      "facts": "purpose and documented access reviewed; unrecorded costs and quotas remain unknown."
    }
  ],
  "authNote": "the documented public requests do not require an API key.",
  "curlSample": "curl \"https://api.dicebear.com/10.x/pixel-art/svg\"",
  "overview": "choose an avatar style and seed, then use the generated image URL. check the license of your chosen style before shipping it."
},
{
  "slug": "gamerpower",
  "name": "gamerpower",
  "provider": "digiwalls media",
  "description": "find active game giveaways, beta keys, and in-game loot by platform.",
  "categories": [
    "gaming"
  ],
  "docsUrl": "https://www.gamerpower.com/api-read",
  "officialUrl": "https://www.gamerpower.com/api-read",
  "buildIdeas": [
    "build a game giveaway notifier"
  ],
  "sourceVerifiedAt": "2026-09-27",
  "authType": "none",
  "pricingType": "free",
  "endpointSample": "https://www.gamerpower.com/api/giveaways",
  "sources": [
    {
      "url": "https://www.gamerpower.com/api-read",
      "label": "official documentation / creator page",
      "facts": "purpose and documented access reviewed; unrecorded costs and quotas remain unknown."
    }
  ],
  "freeTier": true,
  "pricingNote": "free access requires attribution to GamerPower. the documentation limits requests to 10 per second.",
  "authNote": "the documented public requests do not require an API key.",
  "curlSample": "curl \"https://www.gamerpower.com/api/giveaways\""
},
{
  "slug": "nekos-best",
  "name": "nekos.best",
  "provider": "nekos.best",
  "description": "fetch anime illustrations and reaction GIFs with artist information where available.",
  "categories": [
    "media",
    "gaming"
  ],
  "docsUrl": "https://docs.nekos.best/getting-started/introduction",
  "officialUrl": "https://docs.nekos.best/getting-started/introduction",
  "buildIdeas": [
    "add reaction images to a chat bot"
  ],
  "sourceVerifiedAt": "2026-09-27",
  "authType": "none",
  "pricingType": "free",
  "endpointSample": null,
  "sources": [
    {
      "url": "https://docs.nekos.best/getting-started/introduction",
      "label": "official documentation / creator page",
      "facts": "purpose and documented access reviewed; unrecorded costs and quotas remain unknown."
    }
  ],
  "freeTier": true,
  "pricingNote": "the provider documents free access. follow its terms and attribution requirements.",
  "authNote": "the documented public requests do not require an API key."
},
{
  "slug": "disney-api",
  "name": "disney API",
  "provider": "disney API community",
  "description": "look up character information through a community-made REST and GraphQL API.",
  "categories": [
    "media"
  ],
  "docsUrl": "https://disneyapi.dev/",
  "officialUrl": "https://disneyapi.dev/",
  "buildIdeas": [
    "make a character lookup or trivia companion"
  ],
  "sourceVerifiedAt": "2026-09-27",
  "authType": null,
  "pricingType": null,
  "endpointSample": "https://api.disneyapi.dev/character",
  "sources": [
    {
      "url": "https://disneyapi.dev/",
      "label": "official documentation / creator page",
      "facts": "purpose and documented access reviewed; unrecorded costs and quotas remain unknown."
    }
  ],
  "curlSample": "curl \"https://api.disneyapi.dev/character\"",
  "overview": "a fan-built character dataset for small lookup and learning projects. this is not an official Walt Disney Company API."
},
  {
    slug: "open-meteo",
    name: "open-meteo",
    provider: "open-meteo",
    description:
      "weather forecasts from global models, with hourly conditions and historical data for location-based applications.",
    categories: ["weather", "data"],
    tags: ["forecast", "climate", "REST"],
    docsUrl: "https://open-meteo.com/en/docs",
    officialUrl: "https://open-meteo.com/",
    pricingType: "freemium",
    freeTier: true,
    freeRequests: "10,000",
    requestPeriod: "day",
    authType: "none",
    authNote:
      "no key for the non-commercial endpoint. commercial access uses a customer endpoint and API key.",
    pricingNote:
      "free access is for non-commercial use: 600 calls/min, 5,000/hour and 10,000/day. the published monthly limit is 300,000. commercial plans are available; their price is not recorded.",
    endpointSample:
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m",
    curlSample:
      'curl "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"',
    usefulnessScore: 9.4,
    weirdnessScore: 2.1,
    beginnerScore: 9.6,
    featured: true,
    buildIdeas: [
      "a weather-aware weekend planner",
      "a local forecast widget with hourly temperature charts",
    ],
    sources: [
      {
        url: "https://open-meteo.com/en/docs",
        label: "forecast documentation",
        facts: "forecast endpoint, query parameters and authentication scope.",
      },
      {
        url: "https://open-meteo.com/en/pricing",
        label: "provider pricing",
        facts:
          "free non-commercial access, quotas and commercial plan availability.",
      },
    ],
  },
  {
    slug: "pokeapi",
    name: "pokéapi",
    provider: "pokéapi contributors",
    description:
      "structured pokémon species, moves, abilities, and game data for fan tools and learning projects.",
    categories: ["gaming", "data"],
    tags: ["pokémon", "REST", "student"],
    docsUrl: "https://pokeapi.co/docs/v2",
    officialUrl: "https://pokeapi.co/",
    pricingType: "free",
    freeTier: true,
    authType: "none",
    authNote: "read-only GET requests require no authentication.",
    pricingNote:
      "free and open to use under a fair-use policy. cache responses and keep request frequency considerate.",
    endpointSample: "https://pokeapi.co/api/v2/pokemon/ditto",
    curlSample: 'curl "https://pokeapi.co/api/v2/pokemon/ditto"',
    usefulnessScore: 8.5,
    weirdnessScore: 6.8,
    beginnerScore: 9.8,
    featured: true,
    buildIdeas: [
      "a searchable pokédex",
      "a type-matchup helper for a Discord bot",
    ],
  },
  {
    slug: "nasa-apod",
    name: "nasa apod",
    provider: "nasa",
    description:
      "a daily astronomy image and its explanation from NASA's public image archive.",
    categories: ["space", "data"],
    tags: ["astronomy", "images", "education"],
    docsUrl: "https://github.com/nasa/apod-api",
    officialUrl: "https://api.nasa.gov/",
    authType: "api-key",
    authNote:
      "use your NASA API key in the api_key query parameter. request your own key from NASA.",
    endpointSample: "https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY",
    curlSample:
      'curl "https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY"',
    usefulnessScore: 8.3,
    weirdnessScore: 5.4,
    beginnerScore: 8.8,
    buildIdeas: [
      "an astronomy picture journal",
      "a daily space post for your community",
    ],
  },
  {
    slug: "rest-countries",
    name: "rest countries",
    provider: "rest countries",
    description:
      "country names, capitals, currencies, flags, and structured geographical data.",
    categories: ["data", "geography"],
    tags: ["countries", "geography"],
    docsUrl: "https://restcountries.com/",
    officialUrl: "https://restcountries.com/",
    pricingType: "freemium",
    freeTier: true,
    authType: "api-key",
    authNote:
      "the current provider site documents a bearer token. older no-key examples may refer to a different version.",
    pricingNote:
      "the provider lists a free tier and paid plans. exact prices and quotas are not recorded.",
    usefulnessScore: 9.1,
    weirdnessScore: 1.4,
    beginnerScore: 8.4,
    buildIdeas: ["a country comparison tool", "a geography quiz"],
  },
  {
    slug: "open-food-facts",
    name: "open food facts",
    provider: "open food facts",
    description:
      "look up packaged foods by barcode and inspect ingredient and nutrition records.",
    categories: ["food", "data"],
    tags: ["nutrition", "barcodes", "open data"],
    docsUrl: "https://openfoodfacts.github.io/openfoodfacts-server/api/",
    officialUrl: "https://world.openfoodfacts.org/",
    authType: "none",
    authNote:
      "public product reads do not require a login; write operations have separate authentication requirements.",
    pricingType: "free",
    freeTier: true,
    pricingNote:
      "open data with reuse and attribution obligations. product and search requests have different rate limits; consult the documentation.",
    usefulnessScore: 9.2,
    weirdnessScore: 3.8,
    beginnerScore: 7.8,
    buildIdeas: [
      "a pantry ingredient explorer",
      "a barcode-based food comparison app",
    ],
  },
  {
    slug: "coingecko",
    name: "coingecko",
    provider: "coingecko",
    description:
      "cryptocurrency market data for price trackers, research, and portfolio experiments.",
    categories: ["finance", "data"],
    tags: ["crypto", "markets"],
    docsUrl: "https://docs.coingecko.com/",
    officialUrl: "https://www.coingecko.com/en/api",
    pricingType: "freemium",
    startingPrice: 35,
    currency: "USD",
    pricePeriod: "month",
    freeTier: true,
    freeRequests: "10,000 credits",
    requestPeriod: "month",
    authType: "api-key",
    authNote:
      "this entry describes the Demo plan, which issues an API key. a separate keyless public API is also linked by the provider.",
    pricingNote:
      "Basic starts at USD 35/month with monthly billing. the free Demo plan includes 10,000 credits/month. annual billing and paid-plan coverage differ.",
    usefulnessScore: 9.0,
    weirdnessScore: 2.8,
    beginnerScore: 7.5,
    sources: [
      {
        url: "https://www.coingecko.com/en/api/pricing",
        label: "plans and pricing",
        facts:
          "Demo free tier, API keys, 10,000 monthly credits and Basic USD 35 monthly billing.",
      },
    ],
    buildIdeas: [
      "a crypto market watchlist",
      "a historical market research notebook",
    ],
  },
  {
    slug: "github",
    name: "github rest api",
    provider: "github",
    description:
      "retrieve repository metadata, issues, releases, and other data from GitHub projects.",
    categories: ["tools", "data"],
    tags: ["developer", "git", "automation"],
    docsUrl: "https://docs.github.com/en/rest",
    officialUrl: "https://github.com/",
    authType: "none",
    authNote:
      "some public read endpoints work without authentication. private data and write operations require a token or an authenticated app; permissions vary.",
    freeTier: true,
    freeRequests: "60",
    requestPeriod: "hour",
    pricingNote: "public REST reads are available without authentication. the primary limit is 60 requests/hour per IP; authenticated users generally get 5,000/hour. search and secondary limits differ. GitHub account plans are separate.",
    overview: "start with a public repository and retrieve its description, issues, or latest releases. use that data for a repository explorer or release tracker. private repositories and write operations need suitable authentication.",
    sourceVerifiedAt: "2026-09-27",
    sources: [
      { url: "https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api", label: "official rate limits", facts: "public unauthenticated access: 60 requests/hour per IP; standard authenticated user limit: 5,000/hour. secondary and endpoint-specific limits apply." },
      { url: "https://docs.github.com/en/rest/repos/repos#get-a-repository", label: "repository endpoint", facts: "GET repository metadata is available for public resources without authentication." },
    ],
    usefulnessScore: 9.7,
    weirdnessScore: 1.2,
    beginnerScore: 7.5,
    featured: true,
    buildIdeas: [
      "a release activity dashboard",
      "a public repository explorer",
    ],
  },
  {
    slug: "deck-of-cards",
    name: "deck of cards",
    provider: "deck of cards api",
    description:
      "create virtual card decks, shuffle them, and draw cards through simple requests.",
    categories: ["gaming", "weird"],
    tags: ["cards", "games", "student"],
    docsUrl: "https://deckofcardsapi.com/",
    officialUrl: "https://deckofcardsapi.com/",
    authType: "none",
    authNote: "the documented public deck endpoints do not require a key.",
    endpointSample:
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
    curlSample:
      'curl "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"',
    usefulnessScore: 7.4,
    weirdnessScore: 8.5,
    beginnerScore: 9.5,
    buildIdeas: ["a browser card game", "a probability teaching tool"],
  },
  {
    slug: "wttr-in",
    name: "wttr.in",
    provider: "igor chubin",
    description:
      "request concise weather forecasts that can be read in a browser or terminal.",
    categories: ["weather", "tools", "weird"],
    tags: ["terminal", "curl", "open source"],
    docsUrl: "https://github.com/chubin/wttr.in",
    officialUrl: "https://wttr.in/",
    authType: "none",
    authNote: "the documented curl endpoint does not require a key.",
    endpointSample: "https://wttr.in/London?format=3",
    curlSample: 'curl "https://wttr.in/London?format=3"',
    usefulnessScore: 8.2,
    weirdnessScore: 7.8,
    beginnerScore: 9.5,
    buildIdeas: [
      "a terminal morning briefing",
      "a weather line in your shell prompt",
    ],
  },
  {
    slug: "open-library",
    name: "open library",
    provider: "internet archive",
    description:
      "search books, authors, and editions in the Open Library catalog.",
    categories: ["books", "data"],
    tags: ["search", "open data", "education"],
    docsUrl: "https://openlibrary.org/developers/api",
    officialUrl: "https://openlibrary.org/",
    pricingType: "free",
    freeTier: true,
    authType: "none",
    authNote:
      "public read APIs are open. identify your application and respect provider usage guidance.",
    pricingNote:
      "free public APIs intended for low-volume use. bulk access and high-volume integrations have separate guidance.",
    usefulnessScore: 9.0,
    weirdnessScore: 3.1,
    beginnerScore: 8.7,
    buildIdeas: [
      "a personal reading discovery app",
      "an author bibliography explorer",
    ],
  },
  {
    slug: "dog-ceo",
    name: "dog ceo",
    provider: "dog ceo",
    description:
      "fetch random dog images or browse images grouped by breed.",
    categories: ["animals", "weird"],
    tags: ["dogs", "images", "student"],
    docsUrl: "https://dog.ceo/dog-api/",
    officialUrl: "https://dog.ceo/",
    authType: "none",
    authNote: "the documented random image endpoint does not require a key.",
    endpointSample: "https://dog.ceo/api/breeds/image/random",
    curlSample: 'curl "https://dog.ceo/api/breeds/image/random"',
    usefulnessScore: 6.7,
    weirdnessScore: 9.1,
    beginnerScore: 9.9,
    buildIdeas: ["a dog-of-the-day bot", "a breed discovery gallery"],
  },
  {
    slug: "random-user",
    name: "random user",
    provider: "random user generator",
    description:
      "generated profile data for prototypes that need something better than lorem ipsum.",
    categories: ["tools", "data"],
    tags: ["testing", "profiles", "student"],
    docsUrl: "https://randomuser.me/documentation",
    officialUrl: "https://randomuser.me/",
    pricingType: "free",
    freeTier: true,
    authType: "none",
    authNote: "the documented generator endpoint does not require credentials.",
    pricingNote:
      "the provider describes a free random user generation service. usage quotas are not recorded.",
    endpointSample: "https://randomuser.me/api/",
    curlSample: 'curl "https://randomuser.me/api/"',
    usefulnessScore: 8.8,
    weirdnessScore: 4.7,
    beginnerScore: 9.4,
    buildIdeas: [
      "a populated UI prototype",
      "a contact-list filtering exercise",
    ],
  },
  {
    slug: "jsonplaceholder",
    name: "jsonplaceholder",
    provider: "typicode",
    description:
      "use sample posts, tasks, and user records while prototyping frontend interfaces.",
    categories: ["tools", "data"],
    tags: ["testing", "REST", "student"],
    docsUrl: "https://jsonplaceholder.typicode.com/",
    officialUrl: "https://jsonplaceholder.typicode.com/",
    pricingType: "free",
    freeTier: true,
    authType: "none",
    authNote:
      "public demo endpoints need no credentials. write requests are simulated rather than persisted.",
    pricingNote: "free fake API for testing and prototyping.",
    endpointSample: "https://jsonplaceholder.typicode.com/todos/1",
    curlSample: 'curl "https://jsonplaceholder.typicode.com/todos/1"',
    responseSample:
      '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
    usefulnessScore: 9.3,
    weirdnessScore: 2.3,
    beginnerScore: 10,
    buildIdeas: [
      "a todo app with loading and error states",
      "a REST client learning exercise",
    ],
  },
  {
    slug: "hacker-news",
    name: "hacker news",
    provider: "y combinator",
    description:
      "browse Hacker News stories, comments, jobs, and user records.",
    categories: ["news", "data"],
    tags: ["developer", "community"],
    docsUrl: "https://github.com/HackerNews/API",
    officialUrl: "https://news.ycombinator.com/",
    authType: "none",
    authNote:
      "the documented Firebase read endpoints do not require an API key.",
    endpointSample: "https://hacker-news.firebaseio.com/v0/topstories.json",
    curlSample: 'curl "https://hacker-news.firebaseio.com/v0/topstories.json"',
    usefulnessScore: 8.6,
    weirdnessScore: 4.5,
    beginnerScore: 8.9,
    buildIdeas: [
      "a minimal news reader",
      "a daily developer discussion digest",
    ],
  },
  {
    slug: "art-institute",
    name: "art institute of chicago",
    provider: "art institute of chicago",
    description:
      "search public artwork and collection metadata from the Art Institute of Chicago.",
    categories: ["art", "data"],
    tags: ["museum", "images", "culture"],
    docsUrl: "https://api.artic.edu/docs/",
    officialUrl: "https://www.artic.edu/",
    authType: "none",
    authNote:
      "the public collection API does not require authentication. individual image rights can differ.",
    usefulnessScore: 8.6,
    weirdnessScore: 5.9,
    beginnerScore: 8.4,
    buildIdeas: ["a daily artwork explorer", "a searchable museum collection"],
  },
  {
    slug: "exchange-rate",
    name: "exchangerate-api",
    provider: "exchangerate-api",
    description:
      "open-access exchange rates for a lightweight currency converter.",
    categories: ["finance", "data"],
    tags: ["currencies", "conversion"],
    docsUrl: "https://www.exchangerate-api.com/docs/free",
    officialUrl: "https://www.exchangerate-api.com/",
    pricingType: "freemium",
    startingPrice: 10,
    currency: "USD",
    pricePeriod: "month",
    freeTier: true,
    authType: "none",
    authNote:
      "this entry covers the open-access endpoint, which does not require a key. other plans differ.",
    pricingNote:
      "free open-access endpoint with attribution required. the provider lists a Pro upgrade at USD 10/month; the Pro endpoint and authentication differ.",
    endpointSample: "https://open.er-api.com/v6/latest/USD",
    curlSample: 'curl "https://open.er-api.com/v6/latest/USD"',
    usefulnessScore: 8.8,
    weirdnessScore: 1.6,
    beginnerScore: 9.1,
    buildIdeas: [
      "a travel currency calculator",
      "a multi-currency demo storefront",
    ],
  },
  {
    slug: "icanhazdadjoke",
    name: "icanhazdadjoke",
    provider: "icanhazdadjoke",
    description:
      "retrieve short dad jokes in formats suitable for small applications and chat bots.",
    categories: ["weird", "humor"],
    tags: ["jokes", "bots", "student"],
    docsUrl: "https://icanhazdadjoke.com/api",
    officialUrl: "https://icanhazdadjoke.com/",
    pricingType: null,
    freeTier: null,
    authType: "none",
    authNote:
      "no authentication is required. request JSON with the Accept header; use a descriptive User-Agent.",
    pricingNote:
      "the documentation describes unauthenticated public access but does not explicitly list pricing. pricing is not recorded.",
    endpointSample: "https://icanhazdadjoke.com/",
    curlSample:
      'curl -H "Accept: application/json" -H "User-Agent: my-demo-app" "https://icanhazdadjoke.com/"',
    usefulnessScore: 6.2,
    weirdnessScore: 9.5,
    beginnerScore: 9.7,
    buildIdeas: [
      "a daily dad-joke Discord command",
      "a very questionable loading screen",
    ],
  },
  {
    slug: "gutendex",
    name: "gutendex",
    provider: "gareth harper",
    description:
      "search classic books with a JSON catalog of Project Gutenberg metadata.",
    categories: ["books", "data"],
    tags: ["literature", "search", "open source"],
    docsUrl: "https://gutendex.com/",
    officialUrl: "https://gutendex.com/",
    authType: "none",
    authNote: "the documented book-list endpoint does not require credentials.",
    pricingNote:
      "hosted-service pricing is not recorded. the maintainer recommends running your own server for long-term use.",
    endpointSample: "https://gutendex.com/books/?search=dickens",
    curlSample: 'curl "https://gutendex.com/books/?search=dickens"',
    usefulnessScore: 8.1,
    weirdnessScore: 4.2,
    beginnerScore: 8.8,
    buildIdeas: [
      "a public-domain book finder",
      "a classic literature recommendation experiment",
    ],
  },
  {
    slug: "balldontlie",
    name: "balldontlie",
    provider: "balldontlie",
    description:
      "structured sports data for scoreboards, stats projects, and game-day experiments.",
    categories: ["sports", "data"],
    tags: ["basketball", "statistics"],
    docsUrl: "https://www.balldontlie.io/",
    officialUrl: "https://www.balldontlie.io/",
    pricingType: "freemium",
    freeTier: true,
    startingPrice: 9.99,
    currency: "USD",
    pricePeriod: "month",
    pricingNote: "the official site lists a free basic plan and All-Star at USD 9.99/month per sport. broader coverage has separate plans; authentication and quotas are not recorded.",
    usefulnessScore: 8.5,
    weirdnessScore: 2.5,
    beginnerScore: 7.3,
    buildIdeas: [
      "a basketball statistics dashboard",
      "a game-day community bot",
    ],
  },
  {
    slug: "jikan",
    name: "jikan",
    provider: "jikan contributors",
    description:
      "an unofficial MyAnimeList API for anime discovery and catalog experiments.",
    categories: ["anime", "data"],
    tags: ["search", "community", "open source"],
    docsUrl: "https://github.com/jikan-me/jikan",
    officialUrl: "https://jikan.moe/",
    pricingType: "free",
    freeTier: true,
    authType: "none",
    authNote:
      "read-only, unauthenticated access; it does not update a user’s MyAnimeList account.",
    pricingNote:
      "the maintainers describe a free REST service. quotas are not recorded.",
    usefulnessScore: 8.2,
    weirdnessScore: 6.2,
    beginnerScore: 8.4,
    buildIdeas: [
      "an anime discovery dashboard",
      "a community anime lookup command",
    ],
  },
  {
    "slug": "openai",
    "name": "openai",
    "provider": "openai",
    "description": "generate text, images, audio, and structured outputs through programmable models and hosted API endpoints.",
    "categories": [
      "ai",
      "developer tools"
    ],
    "docsUrl": "https://developers.openai.com/api/reference/overview",
    "officialUrl": "https://developers.openai.com/",
    "buildIdeas": [
      "prototype a writing assistant"
    ]
  },
  {
    "slug": "anthropic",
    "name": "anthropic",
    "provider": "anthropic",
    "description": "build language-model features with Claude using messages, tool calls, and structured API requests.",
    "categories": [
      "ai",
      "developer tools"
    ],
    "docsUrl": "https://platform.claude.com/docs/en/api/overview",
    "officialUrl": "https://www.anthropic.com/",
    "authType": "api-key",
    "authNote": "direct API access requires a Console API key or configured workload identity federation. follow the authentication guide for the headers your setup needs.",
    "overview": "start with a small text task such as summarizing a document or answering questions about supplied text. create your credentials in Console, follow the Messages quickstart, and check model costs before integrating.",
    "sourceVerifiedAt": "2026-09-27",
    "sources": [{ "url": "https://platform.claude.com/docs/en/api/overview", "label": "official API overview", "facts": "Console account and API key or workload identity federation required; Messages API and authentication headers reviewed." }],
    "buildIdeas": [
      "prototype a document assistant"
    ]
  },
  {
    "slug": "gemini",
    "name": "gemini",
    "provider": "google",
    "description": "access Google's Gemini models for multimodal generation, analysis, and tool-connected applications.",
    "categories": [
      "ai",
      "developer tools"
    ],
    "docsUrl": "https://ai.google.dev/gemini-api/docs",
    "officialUrl": "https://ai.google.dev/",
    "buildIdeas": [
      "build a multimodal study tool"
    ]
  },
  {
    "slug": "mapbox",
    "name": "mapbox",
    "provider": "mapbox",
    "description": "add maps, geocoding, directions, and location data to web or mobile applications.",
    "categories": [
      "maps",
      "data"
    ],
    "docsUrl": "https://docs.mapbox.com/api/",
    "officialUrl": "https://www.mapbox.com/",
    "buildIdeas": [
      "plot places on an interactive map"
    ]
  },
  {
    "slug": "nominatim",
    "name": "nominatim",
    "provider": "openstreetmap foundation",
    "description": "search OpenStreetMap place names and reverse-geocode coordinates through a documented HTTP API.",
    "categories": [
      "maps",
      "data"
    ],
    "docsUrl": "https://nominatim.org/release-docs/latest/api/Overview/",
    "officialUrl": "https://nominatim.org/",
    "buildIdeas": [
      "look up a place by coordinates"
    ]
  },
  {
    "slug": "usgs-earthquakes",
    "name": "usgs earthquakes",
    "provider": "u.s. geological survey",
    "description": "query earthquake events by location, time, magnitude, and other catalog filters.",
    "categories": [
      "science",
      "government/open data"
    ],
    "docsUrl": "https://earthquake.usgs.gov/fdsnws/event/1/",
    "officialUrl": "https://earthquake.usgs.gov/",
    "buildIdeas": [
      "map recent earthquakes"
    ]
  },
  {
    "slug": "nws-weather",
    "name": "national weather service",
    "provider": "national weather service",
    "description": "retrieve U.S. forecasts, alerts, observations, and weather station information from an official service.",
    "categories": [
      "weather",
      "government/open data"
    ],
    "docsUrl": "https://www.weather.gov/documentation/services-web-api",
    "officialUrl": "https://www.weather.gov/",
    "buildIdeas": [
      "show local weather alerts"
    ]
  },
  {
    "slug": "nasa-eonet",
    "name": "nasa eonet",
    "provider": "nasa",
    "description": "browse natural events such as wildfires and storms with associated dates and locations.",
    "categories": [
      "science",
      "government/open data"
    ],
    "docsUrl": "https://eonet.gsfc.nasa.gov/docs/v3",
    "officialUrl": "https://eonet.gsfc.nasa.gov/",
    "buildIdeas": [
      "track recent natural events"
    ]
  },
  {
    "slug": "world-bank",
    "name": "world bank indicators",
    "provider": "world bank",
    "description": "retrieve development indicators and country-level time series from the World Bank data catalog.",
    "categories": [
      "data",
      "government/open data"
    ],
    "docsUrl": "https://datahelpdesk.worldbank.org/knowledgebase/articles/889392-about-the-indicators-api-documentation",
    "officialUrl": "https://data.worldbank.org/",
    "buildIdeas": [
      "compare country indicators"
    ]
  },
  {
    "slug": "crossref",
    "name": "crossref",
    "provider": "crossref",
    "description": "search scholarly publication metadata, DOI records, journals, and contributor information.",
    "categories": [
      "science",
      "books"
    ],
    "docsUrl": "https://www.crossref.org/documentation/retrieve-metadata/rest-api/",
    "officialUrl": "https://www.crossref.org/",
    "buildIdeas": [
      "build a citation lookup"
    ]
  },
  {
    "slug": "inaturalist",
    "name": "inaturalist",
    "provider": "inaturalist",
    "description": "search community observations and taxa to explore recorded biodiversity by species or location.",
    "categories": [
      "animals",
      "science"
    ],
    "docsUrl": "https://api.inaturalist.org/v1/docs/",
    "officialUrl": "https://www.inaturalist.org/",
    "buildIdeas": [
      "map nearby nature observations"
    ]
  },
  {
    "slug": "google-books",
    "name": "google books",
    "provider": "google",
    "description": "search and retrieve book volume metadata for reading lists and library applications.",
    "categories": [
      "books",
      "media"
    ],
    "docsUrl": "https://developers.google.com/books/docs/v1/using",
    "officialUrl": "https://books.google.com/",
    "buildIdeas": [
      "make a book search interface"
    ]
  },
  {
    "slug": "tmdb",
    "name": "the movie database",
    "provider": "tmdb",
    "description": "retrieve film and television metadata, artwork references, and search results for media projects.",
    "categories": [
      "media",
      "data"
    ],
    "docsUrl": "https://developer.themoviedb.org/docs/getting-started",
    "officialUrl": "https://www.themoviedb.org/",
    "buildIdeas": [
      "build a movie watchlist"
    ]
  },
  {
    "slug": "spotify",
    "name": "spotify web api",
    "provider": "spotify",
    "description": "access music catalog data and approved playback-related features through Spotify's developer platform.",
    "categories": [
      "media",
      "music"
    ],
    "docsUrl": "https://developer.spotify.com/documentation/web-api",
    "officialUrl": "https://developer.spotify.com/",
    "buildIdeas": [
      "explore artist relationships"
    ]
  },
  {
    "slug": "steam",
    "name": "steam web api",
    "provider": "valve",
    "description": "query supported Steam community and game data through the official Web API interfaces.",
    "categories": [
      "gaming",
      "data"
    ],
    "docsUrl": "https://steamcommunity.com/dev",
    "officialUrl": "https://store.steampowered.com/",
    "buildIdeas": [
      "show a game's community data"
    ]
  },
  {
    "slug": "wikimedia",
    "name": "wikimedia api",
    "provider": "wikimedia foundation",
    "description": "work with Wikimedia content and structured project data through documented API endpoints.",
    "categories": [
      "data",
      "media"
    ],
    "docsUrl": "https://api.wikimedia.org/wiki/Main_Page",
    "officialUrl": "https://www.wikimedia.org/",
    "buildIdeas": [
      "browse Wikimedia content"
    ]
  },
  {
    "slug": "tfl",
    "name": "transport for london",
    "provider": "transport for london",
    "description": "retrieve London transport lines, stops, disruptions, arrivals, and journey information.",
    "categories": [
      "transport",
      "government/open data"
    ],
    "docsUrl": "https://api-portal.tfl.gov.uk/",
    "officialUrl": "https://tfl.gov.uk/",
    "buildIdeas": [
      "show nearby transit arrivals"
    ]
  },
  {
    "slug": "usda-fooddata",
    "name": "fooddata central",
    "provider": "u.s. department of agriculture",
    "description": "search foods and nutrient records from the USDA FoodData Central catalog.",
    "categories": [
      "food",
      "government/open data"
    ],
    "docsUrl": "https://fdc.nal.usda.gov/api-guide",
    "officialUrl": "https://fdc.nal.usda.gov/",
    "buildIdeas": [
      "compare food nutrient profiles"
    ]
  },
  {
    "slug": "openalex",
    "name": "openalex",
    "provider": "openalex",
    "description": "explore scholarly works, authors, institutions, and research relationships in an open bibliographic index.",
    "categories": [
      "science",
      "data"
    ],
    "docsUrl": "https://help.openalex.org/",
    "officialUrl": "https://openalex.org/",
    "buildIdeas": [
      "visualize a research topic"
    ]
  },
  {
    "slug": "openaq",
    "name": "openaq",
    "provider": "openaq",
    "description": "access air-quality measurements and monitoring locations through the OpenAQ API.",
    "categories": [
      "science",
      "government/open data"
    ],
    "docsUrl": "https://docs.openaq.org/",
    "officialUrl": "https://openaq.org/",
    "buildIdeas": [
      "plot local air quality"
    ]
  },
  {
    "slug": "open-trivia-db",
    "name": "open trivia db",
    "provider": "open trivia database",
    "description": "get quiz questions with answer choices, categories, and difficulty levels for a trivia game.",
    "overview": "use this to build a quiz for friends or a Discord trivia command. request a set of questions, show the choices, and check the selected answer. the provider documents a five-second gap between requests per IP.",
    "categories": [
      "gaming",
      "education"
    ],
    "tags": [
      "trivia",
      "quiz"
    ],
    "docsUrl": "https://opentdb.com/api_config.php",
    "officialUrl": "https://opentdb.com/",
    "pricingType": "free",
    "freeTier": true,
    "authType": "none",
    "authNote": "the official API does not require an API key.",
    "pricingNote": "the JSON API is free to use. data is licensed under CC BY-SA 4.0; the provider documents request limits.",
    "buildIdeas": [
      "make a multiplayer trivia round"
    ],
    "sources": [
      {
        "url": "https://opentdb.com/api_config.php",
        "label": "official API documentation",
        "facts": "free JSON API, no API key, quiz configuration, licensing, and per-IP request interval."
      }
    ],
    "sourceVerifiedAt": "2026-09-26"
  },
  {
    "slug": "open5e",
    "name": "open5e",
    "provider": "open5e",
    "description": "look up tabletop RPG creatures, spells, equipment, and rules from the Open5e catalog.",
    "overview": "a useful starting point for a tabletop companion app. search for a creature or spell and show the returned information beside your campaign notes. use API v2 and check each source document before reusing its content.",
    "categories": [
      "gaming"
    ],
    "tags": [
      "rpg",
      "tabletop",
      "dnd"
    ],
    "docsUrl": "https://open5e.com/api-docs",
    "officialUrl": "https://open5e.com/",
    "endpointSample": "https://api.open5e.com/v2/search/?query=goblin",
    "buildIdeas": [
      "build a searchable tabletop spellbook"
    ],
    "sources": [
      {
        "url": "https://open5e.com/api-docs",
        "label": "official API overview",
        "facts": "v2 resources, search, filtering, pagination, and the documented goblin search endpoint."
      }
    ],
    "sourceVerifiedAt": "2026-09-26"
  },
  {
    "slug": "tvmaze",
    "name": "tvmaze",
    "provider": "tvmaze",
    "description": "find television shows, episodes, cast details, and schedules for a watchlist or TV guide.",
    "overview": "search for a show, then use its ID to fetch episodes or cast information. this fits a personal watchlist or a page showing upcoming episodes. the public API is separate from the paid user-level API.",
    "categories": [
      "media"
    ],
    "tags": [
      "television",
      "episodes"
    ],
    "docsUrl": "https://www.tvmaze.com/api",
    "officialUrl": "https://www.tvmaze.com/",
    "pricingType": "freemium",
    "freeTier": true,
    "pricingNote": "a free public API is documented. a separate user-level API is available to premium members; prices are not recorded.",
    "buildIdeas": [
      "create a TV episode watchlist"
    ],
    "sources": [
      {
        "url": "https://www.tvmaze.com/api",
        "label": "official API documentation",
        "facts": "show search, episode and cast endpoints; free public API and separate premium user API."
      }
    ],
    "sourceVerifiedAt": "2026-09-26"
  },
  {
    "slug": "datamuse",
    "name": "datamuse",
    "provider": "datamuse",
    "description": "find related words, rhymes, spelling matches, and autocomplete suggestions.",
    "overview": "use this for a word game, a rhyme helper, or search suggestions. describe the kind of word you need with query parameters. the provider has announced an API-key requirement beginning January 1, 2027.",
    "categories": [
      "utilities",
      "data"
    ],
    "tags": [
      "words",
      "language",
      "autocomplete"
    ],
    "docsUrl": "https://www.datamuse.com/api/",
    "officialUrl": "https://www.datamuse.com/",
    "authType": "none",
    "authNote": "no token is required at the review date. the provider announces that API keys will be required from January 1, 2027.",
    "endpointSample": "https://api.datamuse.com/words?ml=ringing+in+the+ears",
    "buildIdeas": [
      "make a word-finding helper"
    ],
    "sources": [
      {
        "url": "https://www.datamuse.com/api/",
        "label": "official API documentation",
        "facts": "word queries and autocomplete; current token-free access and announced January 2027 authentication change."
      }
    ],
    "sourceVerifiedAt": "2026-09-26"
  },
  {
  "slug": "chuck-norris",
  "name": "chuck norris jokes",
  "description": "retrieve searchable and categorized satirical jokes.",
  "categories": [
    "humor",
    "utilities"
  ],
  "tags": [
    "REST"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://api.chucknorris.io/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "chucknorris.io",
  "docsUrl": "https://api.chucknorris.io/",
  "officialUrl": "https://api.chucknorris.io/",
  "buildIdeas": [
    "build a random-joke command for a chat bot."
  ],
  "overview": "build a random-joke command for a chat bot. check the linked documentation for the available datasets and usage requirements.",
  "pricingType": "free",
  "freeTier": true,
  "pricingNote": "the official provider describes this API as free."
},
  {
  "slug": "rick-and-morty",
  "name": "rick and morty API",
  "description": "query characters, locations, and episodes through REST or GraphQL.",
  "categories": [
    "media",
    "gaming"
  ],
  "tags": [
    "REST"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://rickandmortyapi.com/documentation",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "rick and morty API",
  "docsUrl": "https://rickandmortyapi.com/documentation",
  "officialUrl": "https://rickandmortyapi.com/documentation",
  "buildIdeas": [
    "build a character explorer with episode links."
  ],
  "overview": "build a character explorer with episode links. check the linked documentation for the available datasets and usage requirements."
},
  {
  "slug": "dnd5e",
  "name": "d&d 5e API",
  "description": "look up structured D&D 5th edition reference data for game tools.",
  "categories": [
    "gaming"
  ],
  "tags": [
    "REST"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://www.dnd5eapi.co/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "5e-bits",
  "docsUrl": "https://www.dnd5eapi.co/",
  "officialUrl": "https://www.dnd5eapi.co/",
  "buildIdeas": [
    "build a reference helper for tabletop sessions."
  ],
  "overview": "build a reference helper for tabletop sessions. check the linked documentation for the available datasets and usage requirements."
},
  {
  "slug": "potter-db",
  "name": "potter db",
  "description": "query characters, books, movies, spells, and potions from a fan-maintained database.",
  "categories": [
    "books",
    "media"
  ],
  "tags": [
    "REST"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://docs.potterdb.com/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "potter db",
  "docsUrl": "https://docs.potterdb.com/",
  "officialUrl": "https://docs.potterdb.com/",
  "buildIdeas": [
    "build a spell browser or book companion."
  ],
  "overview": "build a spell browser or book companion. check the linked documentation for the available datasets and usage requirements."
},
  {
  "slug": "themealdb",
  "name": "themealdb",
  "description": "search recipes, ingredients, and meal categories.",
  "categories": [
    "food"
  ],
  "tags": [
    "REST"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://www.themealdb.com/api.php",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "themealdb",
  "docsUrl": "https://www.themealdb.com/api.php",
  "officialUrl": "https://www.themealdb.com/api.php",
  "buildIdeas": [
    "build a recipe finder with ingredient search."
  ],
  "overview": "build a recipe finder with ingredient search. check the linked documentation for the available datasets and usage requirements.",
  "authType": "api-key",
  "authNote": "a test key is available for development; production app-store use requires the provider's paid access.",
  "pricingType": "freemium",
  "freeTier": true,
  "pricingNote": "test access for development or education; public app-store releases require paid provider access."
},
  {
  "slug": "thecocktaildb",
  "name": "thecocktaildb",
  "description": "search drink recipes and their ingredients.",
  "categories": [
    "food"
  ],
  "tags": [
    "REST"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://www.thecocktaildb.com/api.php",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "thecocktaildb",
  "docsUrl": "https://www.thecocktaildb.com/api.php",
  "officialUrl": "https://www.thecocktaildb.com/api.php",
  "buildIdeas": [
    "build a searchable drink recipe reference."
  ],
  "overview": "build a searchable drink recipe reference. check the linked documentation for the available datasets and usage requirements.",
  "authType": "api-key",
  "authNote": "a test key is available for development; production app-store use requires the provider's paid access.",
  "pricingType": "freemium",
  "freeTier": true,
  "pricingNote": "test access for development or education; public app-store releases require paid provider access."
},
  {
  "slug": "internet-archive",
  "name": "internet archive",
  "description": "access archive metadata and developer interfaces for digital collections.",
  "categories": [
    "books",
    "media",
    "data"
  ],
  "tags": [
    "REST"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://archive.org/developers/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "internet archive",
  "docsUrl": "https://archive.org/developers/",
  "officialUrl": "https://archive.org/developers/",
  "buildIdeas": [
    "build a browser for archival collections and item metadata."
  ],
  "overview": "build a browser for archival collections and item metadata. check the linked documentation for the available datasets and usage requirements."
},
  {
  "slug": "met-norway",
  "name": "met norway",
  "description": "access weather forecast and environmental data services.",
  "categories": [
    "weather",
    "science"
  ],
  "tags": [
    "REST"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://api.met.no/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "norwegian meteorological institute",
  "docsUrl": "https://api.met.no/",
  "officialUrl": "https://api.met.no/",
  "buildIdeas": [
    "build a forecast view using a documented location service."
  ],
  "overview": "build a forecast view using a documented location service. check the linked documentation for the available datasets and usage requirements."
},
  {
  "slug": "freetogame",
  "name": "freetogame",
  "description": "retrieve free-to-play game metadata with genre and platform filters.",
  "categories": [
    "gaming"
  ],
  "tags": [
    "REST"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://www.freetogame.com/api-doc",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "freetogame",
  "docsUrl": "https://www.freetogame.com/api-doc",
  "officialUrl": "https://www.freetogame.com/api-doc",
  "buildIdeas": [
    "build a game finder with platform and genre filters."
  ],
  "overview": "build a game finder with genre and platform filters. FreeToGame requires attribution as the data source.",
  "pricingType": "free",
  "freeTier": true,
  "pricingNote": "the official provider describes this API as free.",
  "authType": "none",
  "authNote": "the official documentation states no key or account is required."
},
  {
  "slug": "fred",
  "name": "fred",
  "description": "retrieve economic time series, observations, and release metadata.",
  "categories": [
    "finance",
    "data"
  ],
  "tags": [
    "REST"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://fred.stlouisfed.org/docs/api/fred/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "federal reserve bank of st. louis",
  "docsUrl": "https://fred.stlouisfed.org/docs/api/fred/",
  "officialUrl": "https://fred.stlouisfed.org/docs/api/fred/",
  "buildIdeas": [
    "build an explorer for published economic time series."
  ],
  "overview": "build an explorer for published economic time series. check the linked documentation for the available datasets and usage requirements."
},
];
export const apis: Api[] = seeds.map(api);
