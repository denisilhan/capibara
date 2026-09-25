# capybara

A compact directory of APIs, Discord bots, developer tools, and weird web. Browse by category and practical details, then follow official links to the source.

The catalog is maintained in this repository. Provider facts may change, so unknown pricing, access, and limits stay unknown rather than being guessed.

## browse

| section | what it covers |
| --- | --- |
| [apis](src/data/apis.ts) | auth, pricing, free tiers, documentation, and example endpoints |
| [discord bots](src/data/bots.ts) | purpose, pricing, source status, and reviewed invite links |
| [developer tools](src/data/tools.ts) | CLI, desktop, and hosted tools with platform details |
| [weird web](src/data/weird.ts) | small experiments and unusual working sites |

Search, filters, collections, and random discovery connect the four sections. Each entry has a detail page; directory counts come from the catalog data.

## run locally

Requires Node.js 20.9+ and npm.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). For a production build, run `npm run build` followed by `npm start`.

## data and trust

This is an editorial snapshot, not a live provider feed. Sources and review notes are recorded in [docs/SOURCES.md](docs/SOURCES.md) and alongside newer catalog entries. A review date does not guarantee current availability. Editorial scores are capybara judgments, not usage or popularity measurements. Bot invite buttons appear only for reviewed official destinations.

No account, database, API proxy, or tracking backend is required to browse the directory.

## repository map

- `src/data/` — catalog records and collection rules
- `src/lib/` — filtering, sorting, counts, links, and query parsing
- `src/app/` — pages and detail routes
- `src/components/` — directory and detail UI
- `tests/` — catalog logic and route checks

## checks

```sh
npm run lint
npm test
npm run build
```

With the local server running, `npm run test:routes` checks the main and detail pages, 404s, and external links.
