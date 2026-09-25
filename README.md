# capybara

A working local discovery directory for APIs, Discord bots, developer tools, and weird web. Built with Next.js App Router, strict TypeScript, React, Tailwind CSS, and lucide-react. No database, authentication, payments, API proxy, or tracking backend.

## Run

With a standard Node.js installation (20.9+; tested on Node 24):

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. For a production build:

```sh
npm run build
npm start -- --hostname 127.0.0.1 --port 3000
```

This computer has a bundled Node runtime but no npm command on PATH. The dependencies are already installed. The included PowerShell launcher works with that runtime:

```powershell
.\run.ps1 -Mode dev
# Or use the existing production build:
.\run.ps1 -Mode start
```

Stop an existing server before starting another on port 3000. `run.ps1` also supports `build`, `lint`, and `test`. Installing dependencies on another computer requires npm; the launcher is not a package installer.

## Product

- Compact homepage and directory rows with real catalog counts, official links, and responsive layouts.
- API directory with search, category/pricing/auth filters, and existing sort modes.
- Discord bot directory with source-status filters and verified-invite gating.
- Developer tools and weird web directories with dedicated detail routes.
- Ten serializable rule-based collections with counts computed from the datasets.
- Random discovery across all four resource types without an immediate repeat when alternatives exist.
- Keyboard-friendly global search across names, providers, descriptions, categories, and tags.
- Safe external links, nullable provider facts, empty results, and 404 pages.

## Structure

`src/data/apis.ts`, `bots.ts`, `tools.ts`, and `weird.ts` hold separate catalogs. `collections.ts` holds declarative collection rules, and `index.ts` combines resources for global search and random discovery. `src/lib` holds shared filtering, sorting, metrics, links, and URL parsing. Next.js routes live in `src/app`.

## Data provenance

The catalog contains **40 APIs, 10 Discord bots, 8 developer tools, and 8 weird web entries**. Each entry carries an official source link and a review date. New API records leave unverified authentication, pricing, and quota facts as `null`; absence of a recorded value never means free or unlimited. The existing provider-specific audit is in [docs/SOURCES.md](docs/SOURCES.md); the new entries carry source notes directly in their data records. A review date is not a live availability guarantee.

Synthetic capybara views, saves, and clicks have been removed from the schema and interface. Usefulness, weirdness, and beginner scores on existing APIs and bots are capybara editorial judgments, shown mainly on detail pages. They are not provider statistics or measured popularity. The default API sort puts explicitly featured entries first, then orders names alphabetically. Price sorting puts free entries first, known numeric prices next, and unknown prices last.

## Discord invites

`verifiedInviteUrl` requires all three: a non-null invite, `verifiedInvite: true`, and an official source URL. It also checks HTTPS and either a Discord OAuth URL with a bot scope/client ID or an exact reviewed provider redirect. The current provider redirect allowlist contains only `https://sapph.xyz/invite`.

Sapphire's official invite was followed to Discord's login page with its OAuth destination. No login or authorization was performed. Pokétwo's official invite redirected to a third-party 404 during verification, so its invite is null and the button is suppressed. Self-hosted bots use setup/source links instead of invented shared invites. Every external CTA uses `target="_blank"` and `rel="noopener noreferrer"`.

## Validation

```sh
npm run lint
npm test
npm run build
# With the local server running:
npm run test:routes
```

The logic tests cover seed integrity, unknown-price sorting, odd/even/empty medians, currency separation, combined filtering, reactive statistics, bot source filtering, serializable collection rules, non-repeating random selection, and invite safety. HTTP smoke tests cover all main and detail routes, 404s, and external-link attributes. Browser checks cover desktop and narrow viewports, directory interactions, and page-level overflow.

## Limitations

Data is a reviewed snapshot; provider links and terms can change. No scheduled availability checker or live analytics exists. A source review does not verify every provider fact. Bot installation still requires the user to review and complete Discord authorization. No API is automatically called, and no API keys are distributed. Filter state is client-local after initial URL parameters; reload does not persist newly selected filters. The app uses system fonts and bundled icons, so rendering does not depend on external asset requests.

## Next five improvements

1. Add a repeatable provider-review process with change history and per-field review dates.
2. Add scheduled link/redirect checks that disable broken invite links pending review.
3. Synchronize all filters with URL parameters for shareable searches.
4. Expand verified request examples, pricing coverage, and documented integration caveats.
5. Add a maintained browser accessibility/regression suite in CI before public deployment.
