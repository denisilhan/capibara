# provider source audit

Reviewed 2026-09-25 against official documentation, official websites, and official repositories. Fields marked unknown are deliberately unset. A documentation review is not a live health check.

This audit details the original 20 APIs and 10 bots. The added 20 APIs, 8 developer tools, and 8 weird web entries carry official source links and review notes in their respective `src/data` records.

## open-meteo (api)

Review date: 2026-09-25

- [forecast documentation](https://open-meteo.com/en/docs): forecast endpoint, query parameters and authentication scope.
- [provider pricing](https://open-meteo.com/en/pricing): free non-commercial access, quotas and commercial plan availability.

Pricing: freemium; paid starting price: unknown; free tier: yes; quota: 10,000 day.

free access is for non-commercial use: 600 calls/min, 5,000/hour and 10,000/day. the published monthly limit is 300,000. commercial plans are available; their price is not recorded.

Auth: none. no key for the non-commercial endpoint. commercial access uses a customer endpoint and API key.

Request example: recorded from documented endpoint. Response example: not recorded.

## pokéapi (api)

Review date: 2026-09-25

- [official documentation](https://pokeapi.co/docs/v2): service purpose and documentation reviewed. unknown fields are left unset.

Pricing: free; paid starting price: unknown; free tier: yes; quota: unknown .

free and open to use under a fair-use policy. cache responses and keep request frequency considerate.

Auth: none. read-only GET requests require no authentication.

Request example: recorded from documented endpoint. Response example: not recorded.

## nasa apod (api)

Review date: 2026-09-25

- [official documentation](https://github.com/nasa/apod-api): service purpose and documentation reviewed. unknown fields are left unset.

Pricing: unknown; paid starting price: unknown; free tier: unknown; quota: unknown .

pricing and quotas not recorded; consult the official provider.

Auth: api-key. use your NASA API key in the api_key query parameter. request your own key from NASA.

Request example: recorded from documented endpoint. Response example: not recorded.

## rest countries (api)

Review date: 2026-09-25

- [official documentation](https://restcountries.com/): service purpose and documentation reviewed. unknown fields are left unset.

Pricing: freemium; paid starting price: unknown; free tier: yes; quota: unknown .

the provider lists a free tier and paid plans. exact prices and quotas are not recorded.

Auth: api-key. the current provider site documents a bearer token. older no-key examples may refer to a different version.

Request example: not recorded. Response example: not recorded.

## open food facts (api)

Review date: 2026-09-25

- [official documentation](https://openfoodfacts.github.io/openfoodfacts-server/api/): service purpose and documentation reviewed. unknown fields are left unset.

Pricing: free; paid starting price: unknown; free tier: yes; quota: unknown .

open data with reuse and attribution obligations. product and search requests have different rate limits; consult the documentation.

Auth: none. public product reads do not require a login; write operations have separate authentication requirements.

Request example: not recorded. Response example: not recorded.

## coingecko (api)

Review date: 2026-09-25

- [plans and pricing](https://www.coingecko.com/en/api/pricing): Demo free tier, API keys, 10,000 monthly credits and Basic USD 35 monthly billing.

Pricing: freemium; paid starting price: USD 35/month; free tier: yes; quota: 10,000 credits month.

Basic starts at USD 35/month with monthly billing. the free Demo plan includes 10,000 credits/month. annual billing and paid-plan coverage differ.

Auth: api-key. this entry describes the Demo plan, which issues an API key. a separate keyless public API is also linked by the provider.

Request example: not recorded. Response example: not recorded.

## github rest api (api)

Review date: 2026-09-25

- [official documentation](https://docs.github.com/en/rest): service purpose and documentation reviewed. unknown fields are left unset.

Pricing: unknown; paid starting price: unknown; free tier: unknown; quota: unknown .

pricing and quotas not recorded; consult the official provider.

Auth: none. some public read endpoints work without authentication. private data and write operations require a token or an authenticated app; permissions vary.

Request example: not recorded. Response example: not recorded.

## deck of cards (api)

Review date: 2026-09-25

- [official documentation](https://deckofcardsapi.com/): service purpose and documentation reviewed. unknown fields are left unset.

Pricing: unknown; paid starting price: unknown; free tier: unknown; quota: unknown .

pricing and quotas not recorded; consult the official provider.

Auth: none. the documented public deck endpoints do not require a key.

Request example: recorded from documented endpoint. Response example: not recorded.

## wttr.in (api)

Review date: 2026-09-25

- [official documentation](https://github.com/chubin/wttr.in): service purpose and documentation reviewed. unknown fields are left unset.

Pricing: unknown; paid starting price: unknown; free tier: unknown; quota: unknown .

pricing and quotas not recorded; consult the official provider.

Auth: none. the documented curl endpoint does not require a key.

Request example: recorded from documented endpoint. Response example: not recorded.

## open library (api)

Review date: 2026-09-25

- [official documentation](https://openlibrary.org/developers/api): service purpose and documentation reviewed. unknown fields are left unset.

Pricing: free; paid starting price: unknown; free tier: yes; quota: unknown .

free public APIs intended for low-volume use. bulk access and high-volume integrations have separate guidance.

Auth: none. public read APIs are open. identify your application and respect provider usage guidance.

Request example: not recorded. Response example: not recorded.

## dog ceo (api)

Review date: 2026-09-25

- [official documentation](https://dog.ceo/dog-api/): service purpose and documentation reviewed. unknown fields are left unset.

Pricing: unknown; paid starting price: unknown; free tier: unknown; quota: unknown .

pricing and quotas not recorded; consult the official provider.

Auth: none. the documented random image endpoint does not require a key.

Request example: recorded from documented endpoint. Response example: not recorded.

## random user (api)

Review date: 2026-09-25

- [official documentation](https://randomuser.me/documentation): service purpose and documentation reviewed. unknown fields are left unset.

Pricing: free; paid starting price: unknown; free tier: yes; quota: unknown .

the provider describes a free random user generation service. usage quotas are not recorded.

Auth: none. the documented generator endpoint does not require credentials.

Request example: recorded from documented endpoint. Response example: not recorded.

## jsonplaceholder (api)

Review date: 2026-09-25

- [official documentation](https://jsonplaceholder.typicode.com/): service purpose and documentation reviewed. unknown fields are left unset.

Pricing: free; paid starting price: unknown; free tier: yes; quota: unknown .

free fake API for testing and prototyping.

Auth: none. public demo endpoints need no credentials. write requests are simulated rather than persisted.

Request example: recorded from documented endpoint. Response example: documentation example recorded.

## hacker news (api)

Review date: 2026-09-25

- [official documentation](https://github.com/HackerNews/API): service purpose and documentation reviewed. unknown fields are left unset.

Pricing: unknown; paid starting price: unknown; free tier: unknown; quota: unknown .

pricing and quotas not recorded; consult the official provider.

Auth: none. the documented Firebase read endpoints do not require an API key.

Request example: recorded from documented endpoint. Response example: not recorded.

## art institute of chicago (api)

Review date: 2026-09-25

- [official documentation](https://api.artic.edu/docs/): service purpose and documentation reviewed. unknown fields are left unset.

Pricing: unknown; paid starting price: unknown; free tier: unknown; quota: unknown .

pricing and quotas not recorded; consult the official provider.

Auth: none. the public collection API does not require authentication. individual image rights can differ.

Request example: not recorded. Response example: not recorded.

## exchangerate-api (api)

Review date: 2026-09-25

- [official documentation](https://www.exchangerate-api.com/docs/free): service purpose and documentation reviewed. unknown fields are left unset.

Pricing: freemium; paid starting price: USD 10/month; free tier: yes; quota: unknown .

free open-access endpoint with attribution required. the provider lists a Pro upgrade at USD 10/month; the Pro endpoint and authentication differ.

Auth: none. this entry covers the open-access endpoint, which does not require a key. other plans differ.

Request example: recorded from documented endpoint. Response example: not recorded.

## icanhazdadjoke (api)

Review date: 2026-09-25

- [official documentation](https://icanhazdadjoke.com/api): service purpose and documentation reviewed. unknown fields are left unset.

Pricing: unknown; paid starting price: unknown; free tier: unknown; quota: unknown .

the documentation describes unauthenticated public access but does not explicitly list pricing. pricing is not recorded.

Auth: none. no authentication is required. request JSON with the Accept header; use a descriptive User-Agent.

Request example: recorded from documented endpoint. Response example: not recorded.

## gutendex (api)

Review date: 2026-09-25

- [official documentation](https://gutendex.com/): service purpose and documentation reviewed. unknown fields are left unset.

Pricing: unknown; paid starting price: unknown; free tier: unknown; quota: unknown .

hosted-service pricing is not recorded. the maintainer recommends running your own server for long-term use.

Auth: none. the documented book-list endpoint does not require credentials.

Request example: recorded from documented endpoint. Response example: not recorded.

## balldontlie (api)

Review date: 2026-09-25

- [official documentation](https://www.balldontlie.io/): service purpose and documentation reviewed. unknown fields are left unset.

Pricing: freemium; paid starting price: USD 9.99/month; free tier: yes; quota: unknown .

the official site lists a free basic plan and All-Star at USD 9.99/month per sport. broader coverage has separate plans; authentication and quotas are not recorded.

Auth: unknown. check the official documentation for authentication requirements.

Request example: not recorded. Response example: not recorded.

## jikan (api)

Review date: 2026-09-25

- [official documentation](https://github.com/jikan-me/jikan): service purpose and documentation reviewed. unknown fields are left unset.

Pricing: free; paid starting price: unknown; free tier: yes; quota: unknown .

the maintainers describe a free REST service. quotas are not recorded.

Auth: none. read-only, unauthenticated access; it does not update a user’s MyAnimeList account.

Request example: not recorded. Response example: not recorded.

## carl-bot (bot)

Review date: 2026-09-25

- [official role documentation](https://github.com/botlabs-gg/carlbot-docs/blob/master/docs/roles.md): reaction roles and premium command availability.

Pricing: freemium. free features and premium commands are documented. current plan prices are not recorded.

Open source: unknown. Invite: not enabled.

## dyno (bot)

Review date: 2026-09-25

- [official provider](https://dyno.gg/): official presence and product purpose reviewed. unknown facts remain unset.

Pricing: unknown. pricing not recorded; check the official provider.

Open source: unknown. Invite: not enabled.

## fredboat (bot)

Review date: 2026-09-25

- [official documentation](https://docs.fredboat.com/): official music bot documentation exists; pricing and a current invite URL are not recorded.

Pricing: unknown. pricing not recorded; check the official provider.

Open source: unknown. Invite: not enabled.

## sapphire (bot)

Review date: 2026-09-25

- [official website and invite](https://sapph.xyz/): core bot features and free pricing. the published /invite link was followed to Discord’s login screen with an OAuth authorization destination for Sapphire; no authorization was granted.

Pricing: free. the provider describes the core bot as completely free. optional custom branding is a separate offering.

Open source: unknown. Invite: https://sapph.xyz/invite.

## disboard (bot)

Review date: 2026-09-25

- [official provider](https://disboard.org/): official presence and product purpose reviewed. unknown facts remain unset.

Pricing: unknown. pricing not recorded; check the official provider.

Open source: unknown. Invite: not enabled.

## midjourney (bot)

Review date: 2026-09-25

- [official Discord guide](https://docs.midjourney.com/hc/en-us/articles/31541509949069-Using-Midjourney-in-Discord): Discord image generation and subscription requirement.

Pricing: paid. a subscription is required. all subscription plans support Discord; exact prices are not recorded.

Open source: unknown. Invite: not enabled.

## yagpdb (bot)

Review date: 2026-09-25

- [official website](https://yagpdb.xyz/): moderation, feeds, roles and custom commands.
- [official repository](https://github.com/botlabs-gg/yagpdb): public source and license.

Pricing: unknown. pricing not recorded; check the official provider.

Open source: yes. Invite: not enabled.

## red discord bot (bot)

Review date: 2026-09-25

- [official repository](https://github.com/Cog-Creators/Red-DiscordBot): GPL-licensed, self-hosted, modular Discord bot.

Pricing: free. free open-source software. you host and maintain your own instance; infrastructure costs are separate.

Open source: yes. Invite: not enabled.

## discord tickets (bot)

Review date: 2026-09-25

- [official provider](https://github.com/discord-tickets/bot): official presence and product purpose reviewed. unknown facts remain unset.

Pricing: free. free self-hosted software; hosting and maintenance costs are separate.

Open source: yes. Invite: not enabled.

## pokétwo (bot)

Review date: 2026-09-25

- [official website and invite](https://poketwo.net/): free-to-play description and source-code link. the provider invite redirect was checked and reached a 404; invite disabled.
- [official repository](https://github.com/poketwo/poketwo): open-source bot code.

Pricing: free. the provider describes the game as free to play. optional purchases are not cataloged.

Open source: yes. Invite: not enabled.

