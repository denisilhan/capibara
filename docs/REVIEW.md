# release review — 2026-09-27

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
