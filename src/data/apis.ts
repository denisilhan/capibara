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
];
export const apis: Api[] = seeds.map(api);
