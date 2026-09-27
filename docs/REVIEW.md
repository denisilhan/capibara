# v2 release review — 2026-09-27

Version: 0.2.0. Release checks completed locally before publication.

- 19 new AI tools and one new board-game platform; 200 unique catalog records in total.

- Homepage discovery and all three lower recommendation lists are sampled on each request; browser refresh verified changed picks without hydration errors. AI is available in discovery tabs and random discovery.

- Website sign-in labels distinguish required, not required, and not verified across rows and details.

- Five AI use cases share existing `/tools/[slug]` detail pages. Overlapping use cases do not duplicate entries or saved IDs.

- Official sources and review dates are recorded with each new tool. Unknown pricing and license status stay unknown; no generated popularity or capability scores.

- Strict TypeScript, ESLint and production build passed. Build generated 225 pages.

- 20 logic tests and 11 route tests passed, including all catalog detail routes, existing filters/collections, redirects, missing slugs, AI classification, and combined type/platform filters.

- Browser checks: AI tab changes reset previous filters, search combines with tool type, detail links return to the right AI section, and light/dark mode persists between pages.

- 19 representative page types checked at 1280px and 320px, including directories, details, collections, saved, random, search, and 404. Found and fixed a 320px extensions heading/link overflow. Light and dark themes checked; no browser console errors recorded.

## Final code audit

Fixed before the V2 release:

- Invalid query filter values now fall back to real available options; hidden filter controls no longer silently constrain unrelated directories.

- Global search ArrowUp starts at the last suggestion correctly. Dropdowns support typing letters to focus matching choices, following [WAI listbox guidance](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/).

- Detail tags are deduplicated before rendering; REST Countries had a repeated geography key.

- Tool arrows labeled official site now open the product website. Documentation remains available on details.

- Unknown paid starting prices are omitted from API snapshots.

- Removed five unused Next.js starter SVGs, unused metric/chart/resource-icon components, an unused number formatter, and 77 unused CSS rules (336 lines).

- Kept `public/design-lab.html`: it is the requested historical name/logo study, not an accidental generated file. Existing compatibility routes remain.

- Removed an unnecessary type assertion in discovery selection construction.

- Added existing rendered-route tests to GitHub CI. The commands pass locally; the updated hosted workflow will run after push.

Architecture: catalog data, domain helpers, shared UI, and routes remain separate. The main maintenance debt is the layered historical stylesheet; this pass removes proven dead rules without replacing the working cascade. No dependencies added.

Catalog integrity: 200 unique resource IDs; official destinations are HTTPS. Discohook's bot and editor intentionally share a provider site but represent distinct resources. No environment files, dependency folders, build output, or test caches are tracked. This is not a security penetration test or a fresh live check of all third-party services.

## Final catalog additions

OpenCode, Penpot, Replit Agent, and Board Game Arena were added after reviewing their official pages. Source links and verification dates are stored with each entry. AI tools remain canonical developer-tool records. No extra top-level sections were introduced.

Limits: source review is not a live provider availability check. Provider pricing, output quality, and third-party app behavior are not tested. Current production screenshots show the light discovery page, dark AI view, and mobile game search in the README.

---

# previous release review — 2026-09-27

## verified

- Production build: 204 generated pages; TypeScript and lint passed.

- 16 logic tests and 8 route integration tests passed against the production server.

- All 180 catalog detail routes, primary directory pages, collections, and invalid-slug 404s checked.

- Unknown pricing hidden; known free values retained; mixed price sorting keeps free bots and websites ahead of unknown prices.

- Games, useful sites, and weird web separated from extensions. The previous web extensions URL redirects to `/extensions`.

- API and mixed-directory metadata columns aligned on desktop.

- Keyboard dropdown navigation, combined search/auth filters, and empty results exercised in-browser.

- Save, reload, saved-list navigation, and removal exercised in-browser.

- 18 representative route states checked at 390px width: no horizontal page overflow; dark mode persisted across navigation and 404s.

- Light-mode mobile games and desktop light/dark screenshots captured from the production build. No console warnings or errors recorded during that browser pass.

- Catalog IDs, source URL schemes, collection membership, browser/game filters, unknown values, and duplicate web destinations covered by tests.

## scope and limits

This review checks the directory and its recorded data, not the operation of every third-party service. Provider prices, availability, permissions, and quotas still require confirmation at the source. Responsive checks used a Chromium-based browser viewport, not physical-device or full cross-browser testing.

Saved entries use browser storage and do not sync between computers. Interactive filters use local page state; query parameters can initialize filters, but changing a dropdown does not update the URL.

No database, authentication, analytics backend, or additional dependencies were introduced for this release.
