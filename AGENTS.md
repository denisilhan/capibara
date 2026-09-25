# capybara agent rules

## execution
- inspect existing code before editing.
- never re-scaffold or reinstall the project unless explicitly requested.
- make the smallest safe change that solves the current task.
- prefer targeted edits over whole-file rewrites.
- do not modify unrelated files.
- do not add dependencies unless clearly necessary.
- preserve existing routes, data, filters, and working behavior.

## efficiency
- inspect only the files needed for the task.
- avoid repeated terminal commands.
- if the same error persists after 2 meaningful attempts, stop and explain the blocker.
- use lightweight checks first; run a full production build only when useful or before a milestone.

## design
- brand and product ui copy should be lowercase where practical.
- visual direction: dense developer infrastruc# capybara agent rules

## project identity
- product name is always `capybara`.
- use lowercase ui copy wherever practical.
- standard technical acronyms such as API, REST, OAuth, JSON, SDK may keep conventional casing.
- capybara is a discovery directory for:
  - apis
  - discord bots
  - developer tools
  - weird web
- the site should feel like a maintained technical index, not a demo dashboard or generic saas landing page.

---

## execution
- inspect existing code before editing.
- never re-scaffold or reinstall the project unless explicitly requested.
- make the smallest safe change that solves the current task.
- prefer targeted edits over whole-file rewrites.
- do not modify unrelated files.
- do not add dependencies unless clearly necessary.
- preserve existing routes, data, filters, sorting, and working behavior unless the task explicitly requires changing them.
- do not replace working implementations merely because another approach is possible.

---

## efficiency
- inspect only the files needed for the current task.
- avoid printing large unrelated file trees, logs, or datasets.
- avoid repeated terminal commands.
- do not rerun the same failing command without changing something relevant.
- if the same issue persists after 2 meaningful attempts, stop and explain the blocker instead of looping.
- use lightweight verification first.
- run a full production build mainly before a milestone, after architectural changes, or when required to verify correctness.
- avoid unnecessary browser/tool loops.

---

## code quality
- use strict typescript.
- do not weaken types to bypass errors.
- prefer simple readable code over clever abstractions.
- do not introduce abstraction layers for one-off logic.
- keep reusable domain logic in shared helpers when it is actually reused.
- keep data separate from ui components.
- preserve null handling and missing-data states.
- favor serializable data structures for anything that may later move to a database.

---

## visual direction
- visual target: quiet, understated, compact developer tooling.
- inspiration: railway / val town / infrastructure dashboards, but do not copy existing products.
- interface should feel:
  - restrained
  - editorial
  - technical
  - slightly warm
  - information-dense
  - handcrafted
- interface should not feel:
  - cyberpunk
  - gaming ui
  - ai-generated saas template
  - analytics demo
  - startup marketing landing page

### palette
- base background: `#0b0d11`
- surfaces: `#0e1117`
- borders: `#1b212d`
- warm accent: use sparingly, preferably muted around `#c28a52`
- primary text: soft neutral, not pure white everywhere
- secondary text: muted zinc/neutral
- status colors should be subtle and not dominate the interface

### layout
- prefer dense horizontal rows, tables, thin separators, and compact metadata.
- use whitespace and typography before adding containers.
- use borders only when they improve structure.
- avoid turning every region into a bordered card.
- aim for at least 6–8 directory entries visible in a normal desktop viewport.
- mobile layouts may stack fields but must not introduce horizontal page scrolling.

### typography
- use sans-serif for most content.
- use monospace selectively for:
  - numerical values
  - endpoints
  - auth types
  - curl commands
  - technical metadata
- numerical information may be prominent, but should not look like fake dashboard KPIs.
- avoid excessive bold weights.
- use medium / semibold for service names where sufficient.
- keep labels small, quiet, and lowercase.

---

## forbidden ui patterns
- no giant marketing hero sections.
- no gradients or glowing decorative blobs.
- no glassmorphism.
- no oversized rounded cards.
- no decorative square icon containers beside every list item.
- no emoji-filled icon grids.
- no duplicate action-button clusters.
- no unnecessary `view docs` + `inspect` + `learn more` combinations.
- no excessive vertical whitespace.
- no dashboard KPI widgets created purely to fill space.
- no fake charts created from invented data.
- no meaningless decorative animation.
- no startup-style slogans if a simple descriptive line communicates the product better.

---

## real-world product principle
- capybara should feel like a real directory used by developers.
- prioritize useful structured metadata over decorative visual elements.
- prefer:
  - provider
  - service type
  - auth
  - pricing model
  - free tier
  - known limits
  - categories
  - tags
  - official docs
  - official website
  - endpoint examples
  - open-source status
  - verified discord invite
  - platform support
- avoid prioritizing synthetic engagement statistics.

---

## data integrity
- never invent:
  - pricing
  - rate limits
  - request quotas
  - latency
  - uptime
  - server counts
  - user counts
  - popularity
  - request volume
  - provider usage
  - verification status
  - oauth permissions
  - invite urls
- do not add placeholder or pilot statistics merely to make the interface look populated.
- if reliable external data is unknown, keep the field null or omit it.
- unknown values should render gracefully as:
  - `not listed`
  - `unknown`
  - or no field at all
- never treat unknown values as zero.
- provider facts should come from official documentation or official provider pages whenever possible.
- do not copy provider marketing text verbatim.
- write concise original summaries.
- clearly distinguish editorial capybara metadata from provider facts.
- clearly distinguish actual capybara analytics from seeded demo values.
- if real analytics do not exist yet, do not pretend they do.

---

## editorial scores
- usefulness, weirdness, beginner-friendliness, or similar scores are capybara editorial ratings.
- they must never be presented as external measurements.
- do not make them the dominant visual focus.
- if editorial scores make the product feel artificial, reduce their prominence or move them mainly to detail pages.
- editorial scores should supplement real metadata, not replace it.

---

## catalog structure

### apis
prioritize:
- name
- provider
- description
- categories
- tags
- pricing model
- free tier
- auth type
- official docs
- official website
- endpoint sample
- verified request limits where available
- open source status where relevant

### discord bots
prioritize:
- name
- description
- categories
- pricing
- official website
- verified add-to-discord link
- github if available
- open-source status
- platform relevance
- tags

only show `add to discord` when the invite url is verified and official.

### developer tools
this category may include:
- cli tools
- hosted developer services
- debugging tools
- webhook tools
- api testing tools
- json utilities
- mock api services
- tunneling tools
- observability utilities
- database tools
- deployment tools
- developer productivity tools

for developer tools, useful metadata may include:
- tool type
- platform
- web / cli / desktop
- pricing
- open source
- github
- official docs
- install command if official and verified
- supported environments
- tags

do not add arbitrary popularity metrics.

### weird web
this category is for unusual, interesting, experimental, or entertaining web services.

examples may include:
- strange generators
- internet toys
- novelty utilities
- experimental websites
- unusual data visualizations
- creative coding projects
- weird but functional tools

rules:
- only include active, real websites.
- do not turn this section into spam or random link dumping.
- every entry should have a reason to exist in the directory.
- show:
  - name
  - short original description
  - category
  - tags
  - official url
  - whether login is required when verified
  - whether the service is free when verified
- avoid fake scores or engagement numbers.

---

## catalog expansion
- prioritize quality over raw count.
- do not add dead, abandoned, duplicate, or unverifiable services just to increase totals.
- when expanding the api catalog, target approximately 40–60 solid APIs before adding more.
- maintain useful category coverage:
  - developer tools
  - ai
  - data
  - weather
  - maps
  - finance
  - gaming
  - media
  - science
  - government/open data
  - food
  - books
  - animals
  - transport
  - utilities
- new catalog sections should grow only when enough real entries exist to justify them.

---

## homepage
- homepage should behave like a discovery index, not a marketing site.
- restrained intro copy is preferred.
- example:
  `apis, bots and developer oddities.`
- expose actual directory content quickly.
- if a stats strip exists, only use real derived catalog facts such as:
  - number of APIs
  - number of bots
  - number of developer tools
  - number of weird web entries
  - number of categories
  - number of free-tier APIs
- derive these values from the real local dataset.
- do not show fake engagement or activity numbers.

---

## directory rows
- prefer compact horizontal rows.
- service name / detail area may be clickable.
- external destination should use one minimal action such as `↗`.
- do not place multiple large buttons on every row.
- keep descriptions to one line on desktop where practical.
- tags must be subtle and compact.
- status colors should be minimal.
- technical metadata should align consistently across rows.
- do not let missing data break alignment.

---

## search and filtering
- search should operate on meaningful fields such as:
  - name
  - provider
  - description
  - categories
  - tags
- filters should be generated from real data when practical.
- filtered statistics must derive from the active result set.
- do not hardcode counts that can become stale.
- unknown prices must not be treated as free.
- when sorting by price:
  - free = 0
  - known numeric prices use their real value
  - unknown prices sort after known prices

---

## external links
- use official destinations whenever possible.
- external links should use:
  - `target="_blank"`
  - `rel="noopener noreferrer"`
- do not fabricate deep links.
- do not create fake install or invite links.
- if an official action cannot be verified, link to the official product page instead.

---

## verification
- after a focused ui change, use the cheapest relevant check first.
- after data/schema changes, verify:
  - types
  - null handling
  - filters
  - sorting
  - counts
  - affected routes
- before a major milestone, run:
  - lint
  - typescript validation
  - production build
- fix errors instead of merely reporting them when the fix is within scope.

---

## project scope discipline
- do not add a database unless requested.
- do not add login/authentication unless requested.
- do not add payments unless requested.
- do not add an admin dashboard unless requested.
- do not add provider accounts unless requested.
- do not add real-time analytics infrastructure unless requested.
- do not proxy third-party APIs unless requested.
- finish the discovery experience before adding platform complexity.ture ui, influenced by railway / val town.
- base: #0b0d11
- surfaces: #0e1117
- borders: #1b212d
- accent: #d97706
- prefer dense rows, tables, separators, and compact metadata.
- numerical information should be visually prominent.
- aim for 6–8 directory entries visible on a desktop viewport.

## forbidden ui patterns
- no giant hero sections.
- no gradients or glowing decorative blobs.
- no glassmorphism.
- no oversized rounded cards.
- no decorative square icon boxes beside list items.
- no duplicate action buttons such as "view docs" + "inspect".
- no excessive vertical whitespace.
- no generic ai-generated saas dashboard styling.

## data integrity
- never invent provider pricing, limits, usage counts, uptime, latency, or invite urls.
- unknown provider data must remain null / unknown.
- clearly distinguish capybara metrics from provider metrics.
