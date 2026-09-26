import { isBrowserExtension } from "../lib/catalog";
import type { DeveloperTool } from "../types/index";

type Seed = Pick<DeveloperTool, "slug" | "name" | "provider" | "description" | "categories" | "toolType" | "platform" | "officialUrl"> & Partial<DeveloperTool>;
function tool(seed: Seed): DeveloperTool {
  return {
    kind: "tool",
    id: `tool-${seed.slug}`,
    tags: [],
    pricing: null,
    docsUrl: null,
    githubUrl: null,
    isOpenSource: null,
    installCommand: null,
    sourceVerifiedAt: "2026-09-25",
    sources: [{ url: seed.docsUrl ?? seed.officialUrl, label: "official documentation", facts: "product purpose and listed platforms reviewed; unknown commercial terms are omitted." }],
    ...seed,
  };
}
export const tools: DeveloperTool[] = [
  tool({ slug: "postman", overview: "keep related API requests together so you can rerun them while building or debugging an integration. begin with a single request before creating a collection.", name: "postman", provider: "postman", description: "an API workspace for sending requests, organizing collections, and testing endpoints with teammates.", categories: ["api testing"], tags: ["requests", "collections"], toolType: "api client", platform: ["web", "desktop"], officialUrl: "https://www.postman.com/", docsUrl: "https://learning.postman.com/docs/" }),
  tool({ slug: "bruno", overview: "use this to keep API requests alongside your project and review changes with your team. the official guide explains the collection format and setup.", name: "bruno", provider: "bruno", description: "a desktop API client that keeps request collections in files suitable for version control.", categories: ["api testing"], tags: ["requests", "git"], toolType: "api client", platform: ["desktop", "cli"], officialUrl: "https://www.usebruno.com/", docsUrl: "https://docs.usebruno.com/", githubUrl: "https://github.com/usebruno/bruno", isOpenSource: true }),
  tool({ slug: "hoppscotch", overview: "try an HTTP request in the browser, inspect the response, then adjust the method, headers, or body while debugging.", name: "hoppscotch", provider: "hoppscotch", description: "a web-first API development workspace for composing requests and sharing collections.", categories: ["api testing"], tags: ["requests", "web"], toolType: "api client", platform: ["web", "desktop", "cli"], officialUrl: "https://hoppscotch.io/", docsUrl: "https://docs.hoppscotch.io/", githubUrl: "https://github.com/hoppscotch/hoppscotch", isOpenSource: true }),
  tool({ slug: "ngrok", name: "ngrok", provider: "ngrok", description: "exposes a local service through a public endpoint for webhook testing and remote previews.", categories: ["networking"], tags: ["tunnels", "webhooks"], toolType: "tunneling", platform: ["cli", "web"], officialUrl: "https://ngrok.com/", docsUrl: "https://ngrok.com/docs" }),
  tool({ slug: "grafana", name: "grafana", provider: "grafana labs", description: "builds dashboards and visualizations from connected data sources for system observability.", categories: ["observability"], tags: ["dashboards", "metrics"], toolType: "observability", platform: ["web"], officialUrl: "https://grafana.com/", docsUrl: "https://grafana.com/docs/grafana/latest/visualizations/" }),
  tool({ slug: "docker", name: "docker", provider: "docker", description: "packages applications and dependencies into containers that can run across development environments.", categories: ["deployment"], tags: ["containers", "cli"], toolType: "container tooling", platform: ["desktop", "cli"], officialUrl: "https://www.docker.com/", docsUrl: "https://docs.docker.com/engine/" }),
  tool({ slug: "httpie", overview: "use this when you want to inspect an HTTP endpoint from a terminal. begin with the official CLI examples, then adapt the request URL and headers to your own API.", name: "httpie", provider: "httpie", description: "a command-line HTTP client with readable request syntax and formatted responses.", categories: ["api testing"], tags: ["http", "cli"], toolType: "http client", platform: ["cli"], officialUrl: "https://httpie.io/", docsUrl: "https://httpie.io/docs/cli" }),
  tool({ slug: "sentry", name: "sentry", provider: "sentry", description: "collects application errors and traces to help developers investigate production issues.", categories: ["observability"], tags: ["errors", "tracing"], toolType: "error monitoring", platform: ["web"], officialUrl: "https://sentry.io/" }),
  tool({
    "slug": "excalidraw",
    "name": "excalidraw",
    "provider": "excalidraw",
    "description": "sketch diagrams and explain ideas on a shared, hand-drawn-style whiteboard.",
    "overview": "use it to map an API flow, sketch a screen, or explain a system to someone else. shapes, arrows, and text make it easy to turn rough notes into a diagram.",
    "categories": [
      "design",
      "developer tools"
    ],
    "tags": [
      "diagrams",
      "whiteboard"
    ],
    "toolType": "diagramming",
    "platform": [
      "web"
    ],
    "officialUrl": "https://excalidraw.com/",
    "githubUrl": "https://github.com/excalidraw/excalidraw",
    "isOpenSource": true,
    "sources": [
      {
        "url": "https://github.com/excalidraw/excalidraw",
        "label": "official repository",
        "facts": "official MIT-licensed whiteboard project and diagramming features."
      }
    ],
    "sourceVerifiedAt": "2026-09-26"
  }),
  tool({
    "slug": "regex101",
    "name": "regex101",
    "provider": "regex101",
    "description": "test regular expressions against sample text and see what each part matches.",
    "overview": "paste a small test string, write your expression, and inspect the highlighted matches. the explanation panel helps you understand unfamiliar regex syntax before using it in code.",
    "categories": [
      "debugging",
      "utilities"
    ],
    "tags": [
      "regex",
      "text"
    ],
    "toolType": "regex tester",
    "platform": [
      "web"
    ],
    "officialUrl": "https://regex101.com/",
    "sources": [
      {
        "url": "https://regex101.com/",
        "label": "official website",
        "facts": "regex editor, supported flavors, explanations, and match details. pricing not recorded."
      }
    ],
    "sourceVerifiedAt": "2026-09-26"
  }),
  tool({
    "slug": "jq-playground",
    "name": "jq playground",
    "provider": "jq project",
    "description": "try jq queries on JSON and see the resulting output in your browser.",
    "overview": "paste example JSON and write a query to select, filter, or reshape it. the official page says queries are processed locally; snippets are sent to the server only when you choose to share them.",
    "categories": [
      "utilities",
      "data"
    ],
    "tags": [
      "json",
      "jq"
    ],
    "toolType": "JSON playground",
    "platform": [
      "web"
    ],
    "officialUrl": "https://play.jqlang.org/",
    "isOpenSource": true,
    "sources": [
      {
        "url": "https://play.jqlang.org/",
        "label": "official website",
        "facts": "browser-local processing, explicit snippet sharing, and MIT-licensed open-source status."
      }
    ],
    "sourceVerifiedAt": "2026-09-26"
  }),
  tool({
    "slug": "webhook-site",
    "name": "webhook.site",
    "provider": "webhook.site",
    "description": "inspect incoming HTTP requests while developing and testing webhooks.",
    "overview": "point a test webhook at the URL provided by the service, trigger an event, and inspect what arrived. this helps check headers and payloads before connecting your own handler.",
    "categories": [
      "api testing",
      "debugging"
    ],
    "tags": [
      "webhooks",
      "http"
    ],
    "toolType": "webhook inspector",
    "platform": [
      "web"
    ],
    "officialUrl": "https://webhook.site/",
    "sources": [
      {
        "url": "https://webhook.site/",
        "label": "official website",
        "facts": "HTTP request inspection and webhook testing. pricing and retention limits not recorded."
      }
    ],
    "sourceVerifiedAt": "2026-09-26"
  }),
  tool({
  "slug": "bitwarden",
  "name": "bitwarden",
  "provider": "bitwarden",
  "description": "save and fill passwords from a browser vault.",
  "overview": "use a password manager across your browsers instead of keeping separate lists of logins. choose your browser on the official download page.",
  "categories": [
    "browser extensions",
    "everyday"
  ],
  "tags": [
    "chrome",
    "firefox",
    "brave",
    "opera",
    "edge",
    "safari"
  ],
  "toolType": "browser extension",
  "platform": [
    "chrome",
    "firefox",
    "brave",
    "opera",
    "edge",
    "safari"
  ],
  "officialUrl": "https://bitwarden.com/download/",
  "isOpenSource": null,
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://bitwarden.com/download/",
      "label": "official project",
      "facts": "purpose and listed browser support; commercial terms are not recorded."
    }
  ]
}),
  tool({
  "slug": "dark-reader",
  "name": "dark reader",
  "provider": "dark reader",
  "description": "adjust website brightness, contrast, and dark themes.",
  "overview": "use it when a website has no comfortable dark theme. adjust each site separately if its own colors do not work well.",
  "categories": [
    "browser extensions",
    "everyday"
  ],
  "tags": [
    "chrome",
    "firefox",
    "edge",
    "safari"
  ],
  "toolType": "browser extension",
  "platform": [
    "chrome",
    "firefox",
    "edge",
    "safari"
  ],
  "officialUrl": "https://darkreader.org/",
  "isOpenSource": true,
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://darkreader.org/",
      "label": "official project",
      "facts": "purpose and listed browser support; commercial terms are not recorded."
    }
  ]
}),
  tool({
  "slug": "singlefile",
  "name": "singlefile",
  "provider": "singlefile",
  "description": "save a complete web page as one HTML file.",
  "overview": "keep a readable copy of a reference page for later. the official installation guide lists supported browsers and their store links.",
  "categories": [
    "browser extensions",
    "power user"
  ],
  "tags": [
    "chrome",
    "firefox",
    "brave",
    "opera",
    "edge",
    "safari"
  ],
  "toolType": "browser extension",
  "platform": [
    "chrome",
    "firefox",
    "brave",
    "opera",
    "edge",
    "safari"
  ],
  "officialUrl": "https://github.com/gildas-lormeau/SingleFile",
  "isOpenSource": true,
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://github.com/gildas-lormeau/SingleFile",
      "label": "official project",
      "facts": "purpose and listed browser support; commercial terms are not recorded."
    }
  ],
  "githubUrl": "https://github.com/gildas-lormeau/SingleFile"
}),
  tool({
  "slug": "vimium",
  "name": "vimium",
  "provider": "vimium",
  "description": "navigate pages, links, and tabs with keyboard shortcuts.",
  "overview": "try keyboard link hints and tab switching when you want to browse without reaching for the mouse. the help dialog lists the available shortcuts.",
  "categories": [
    "browser extensions",
    "power user"
  ],
  "tags": [
    "chrome",
    "firefox",
    "edge"
  ],
  "toolType": "browser extension",
  "platform": [
    "chrome",
    "firefox",
    "edge"
  ],
  "officialUrl": "https://github.com/philc/vimium",
  "isOpenSource": true,
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://github.com/philc/vimium",
      "label": "official project",
      "facts": "purpose and listed browser support; commercial terms are not recorded."
    }
  ],
  "githubUrl": "https://github.com/philc/vimium"
}),
  tool({
  "slug": "sponsorblock",
  "name": "sponsorblock",
  "provider": "sponsorblock",
  "description": "skip community-marked sponsor segments in YouTube videos.",
  "overview": "choose which segment categories to skip. the timestamps come from community submissions, so coverage varies by video.",
  "categories": [
    "browser extensions",
    "everyday"
  ],
  "tags": [
    "chrome",
    "firefox",
    "edge"
  ],
  "toolType": "browser extension",
  "platform": [
    "chrome",
    "firefox",
    "edge"
  ],
  "officialUrl": "https://sponsor.ajay.app/",
  "isOpenSource": true,
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://sponsor.ajay.app/",
      "label": "official project",
      "facts": "purpose and listed browser support; commercial terms are not recorded."
    },
    {
      "url": "https://github.com/ajayyy/SponsorBlock",
      "label": "official project",
      "facts": "official Chrome, Firefox and Edge distribution links and open-source license."
    }
  ]
}),
  tool({
  "slug": "refined-github",
  "name": "refined github",
  "provider": "refined github",
  "description": "add small navigation and code-review improvements to GitHub.",
  "overview": "use it for everyday repository browsing: clearer diffs, extra navigation, and configurable interface helpers. disable individual features you do not need.",
  "categories": [
    "browser extensions",
    "developer"
  ],
  "tags": [
    "chrome",
    "firefox",
    "safari"
  ],
  "toolType": "browser extension",
  "platform": [
    "chrome",
    "firefox",
    "safari"
  ],
  "officialUrl": "https://github.com/refined-github/refined-github",
  "isOpenSource": true,
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://github.com/refined-github/refined-github",
      "label": "official project",
      "facts": "purpose and listed browser support; commercial terms are not recorded."
    }
  ],
  "githubUrl": "https://github.com/refined-github/refined-github"
}),
  tool({
  "slug": "chatgpt-search",
  "name": "chatgpt search",
  "description": "start a ChatGPT search from the Chrome address bar.",
  "categories": [
    "browser extensions",
    "ai",
    "search"
  ],
  "tags": [
    "chrome"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "openai",
  "overview": "this official extension changes the default address-bar search destination. it opens a ChatGPT conversation; it is not a general page-control assistant.",
  "toolType": "browser extension",
  "platform": [
    "chrome"
  ],
  "officialUrl": "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt"
}),
  tool({
  "slug": "claude-in-chrome",
  "name": "claude in chrome",
  "description": "work with Claude in a side panel that can read and act on web pages.",
  "categories": [
    "browser extensions",
    "ai",
    "automation"
  ],
  "tags": [
    "chrome"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "anthropic",
  "overview": "the official extension requires a paid Claude plan. Anthropic lists Google Chrome support only, excluding other Chromium browsers and mobile. review its requested access before connecting sites.",
  "toolType": "browser extension",
  "platform": [
    "chrome"
  ],
  "officialUrl": "https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome",
  "pricing": "paid"
}),
  tool({
  "slug": "sider",
  "name": "sider",
  "description": "use GPT, Claude, and Gemini from a third-party browser sidebar.",
  "categories": [
    "browser extensions",
    "ai",
    "productivity"
  ],
  "tags": [
    "chrome",
    "gpt",
    "claude",
    "gemini"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://sider.ai/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "sider",
  "overview": "Sider is a separate provider, not an official OpenAI, Anthropic, or Google extension. it offers page explanations, translation, and summaries; model access depends on its own plans.",
  "toolType": "browser extension",
  "platform": [
    "chrome"
  ],
  "officialUrl": "https://sider.ai/"
}),
  tool({
  "slug": "shazam",
  "name": "shazam",
  "description": "identify music playing in your browser.",
  "categories": [
    "browser extensions",
    "audio",
    "everyday"
  ],
  "tags": [
    "chrome",
    "edge"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://www.shazam.com/apps",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "apple",
  "overview": "start recognition while a tab plays a song, then open the matching track information. this entry is the browser add-on; the phone app is a separate installation.",
  "toolType": "browser extension",
  "platform": [
    "chrome",
    "edge"
  ],
  "officialUrl": "https://www.shazam.com/apps"
}),
  tool({
  "slug": "volume-master",
  "name": "volume master",
  "description": "adjust and boost the volume of individual browser tabs.",
  "categories": [
    "browser extensions",
    "audio",
    "everyday"
  ],
  "tags": [
    "chrome"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://chromewebstore.google.com/detail/volume-master/jghecgabfgfdldnmbfkhmffcabddioke",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "peta sittek",
  "overview": "use it when one tab is much quieter than the others. the publisher notes that Chrome full-screen behavior changes while extension audio processing is active.",
  "toolType": "browser extension",
  "platform": [
    "chrome"
  ],
  "officialUrl": "https://chromewebstore.google.com/detail/volume-master/jghecgabfgfdldnmbfkhmffcabddioke",
  "pricing": "free"
}),
  tool({
  "slug": "tampermonkey",
  "name": "tampermonkey",
  "description": "manage userscripts that change how websites look or behave.",
  "categories": [
    "browser extensions",
    "automation",
    "power user"
  ],
  "tags": [
    "chrome",
    "firefox",
    "edge",
    "opera",
    "safari"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://www.tampermonkey.net/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "jan biniok",
  "overview": "install a script for a specific site or write a small customization yourself. each script runs code in your browser, so check what it does before enabling it.",
  "toolType": "browser extension",
  "platform": [
    "chrome",
    "firefox",
    "edge",
    "opera",
    "safari"
  ],
  "officialUrl": "https://www.tampermonkey.net/"
}),
  tool({
  "slug": "ublock-origin",
  "name": "ublock origin",
  "description": "filter unwanted page content with configurable blocking rules.",
  "categories": [
    "browser extensions",
    "privacy",
    "power user"
  ],
  "tags": [
    "firefox"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://github.com/gorhill/uBlock",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "raymond hill",
  "overview": "the full uBlock Origin is listed here for Firefox. its Chrome Web Store version was removed; Chrome users should look at the separate uBlock Origin Lite entry.",
  "toolType": "browser extension",
  "platform": [
    "firefox"
  ],
  "officialUrl": "https://github.com/gorhill/uBlock",
  "pricing": "free",
  "isOpenSource": true,
  "githubUrl": "https://github.com/gorhill/uBlock"
}),
  tool({
  "slug": "ublock-origin-lite",
  "name": "ublock origin lite",
  "description": "block unwanted content using browser-managed filtering rules.",
  "categories": [
    "browser extensions",
    "privacy",
    "everyday"
  ],
  "tags": [
    "chrome",
    "firefox",
    "edge",
    "safari"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://github.com/uBlockOrigin/uBOL-home",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "raymond hill",
  "overview": "this is the Manifest V3 edition. it uses declarative browser rules and has a different feature set from the full uBlock Origin.",
  "toolType": "browser extension",
  "platform": [
    "chrome",
    "firefox",
    "edge",
    "safari"
  ],
  "officialUrl": "https://github.com/uBlockOrigin/uBOL-home",
  "isOpenSource": true,
  "githubUrl": "https://github.com/uBlockOrigin/uBOL-home"
}),
  tool({
  "slug": "firefox-containers",
  "name": "firefox multi-account containers",
  "description": "keep website sessions separate in named Firefox containers.",
  "categories": [
    "browser extensions",
    "privacy",
    "productivity"
  ],
  "tags": [
    "firefox"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "mozilla",
  "overview": "use separate containers for work and personal accounts so their cookies and logins remain apart. this extension is specifically for Firefox.",
  "toolType": "browser extension",
  "platform": [
    "firefox"
  ],
  "officialUrl": "https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/"
}),
  tool({
  "slug": "react-devtools",
  "name": "react developer tools",
  "description": "inspect React component trees and profile rendering.",
  "categories": [
    "browser extensions",
    "developer",
    "debugging"
  ],
  "tags": [
    "chrome",
    "firefox",
    "edge"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://react.dev/learn/react-developer-tools",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "react team",
  "overview": "open the Components or Profiler panel on a React site to investigate props and rendering behavior. this is a developer debugging extension.",
  "toolType": "browser extension",
  "platform": [
    "chrome",
    "firefox",
    "edge"
  ],
  "officialUrl": "https://react.dev/learn/react-developer-tools"
}),
  tool({
  "slug": "wappalyzer",
  "name": "wappalyzer",
  "description": "identify technologies used by a website.",
  "categories": [
    "browser extensions",
    "developer",
    "research"
  ],
  "tags": [
    "chrome",
    "firefox",
    "edge",
    "safari"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://www.wappalyzer.com/apps/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "wappalyzer",
  "overview": "inspect a site to discover detected frameworks, services, and other technologies. detections are clues for research, not a complete audit of the site.",
  "toolType": "browser extension",
  "platform": [
    "chrome",
    "firefox",
    "edge",
    "safari"
  ],
  "officialUrl": "https://www.wappalyzer.com/apps/"
}),
  tool({
  "slug": "colorzilla",
  "name": "colorzilla",
  "description": "pick colors from web pages and inspect color values.",
  "categories": [
    "browser extensions",
    "design",
    "developer"
  ],
  "tags": [
    "chrome"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://www.colorzilla.com/chrome/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "colorzilla",
  "overview": "sample a page color while building or reviewing a design. this entry links to the publisher's Chrome edition.",
  "toolType": "browser extension",
  "platform": [
    "chrome"
  ],
  "officialUrl": "https://www.colorzilla.com/chrome/"
}),
  tool({
  "slug": "gemini-in-chrome",
  "name": "gemini in chrome",
  "description": "ask questions about pages using Chrome's built-in Gemini assistance.",
  "categories": [
    "ai",
    "productivity"
  ],
  "tags": [
    "gemini",
    "browser assistant"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://support.google.com/chrome/answer/16283624?hl=en",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "google",
  "overview": "this is a built-in Chrome feature, not a standalone browser extension. availability depends on the supported account, region, language, and browser requirements in Google's guide.",
  "toolType": "browser feature",
  "platform": [
    "chrome"
  ],
  "officialUrl": "https://support.google.com/chrome/answer/16283624?hl=en"
}),
  tool({
  "slug": "transform",
  "name": "transform",
  "description": "convert code and structured data between common formats.",
  "categories": [
    "utilities",
    "data"
  ],
  "tags": [
    "json",
    "conversion"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://transform.tools/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "transform",
  "overview": "paste a small example and choose a conversion, such as JSON to a type definition. inspect the generated result before using it in your project.",
  "toolType": "code converter",
  "platform": [
    "web"
  ],
  "officialUrl": "https://transform.tools/"
}),
  tool({
  "slug": "devtoys",
  "name": "devtoys",
  "description": "use a desktop collection of formatters, converters, and developer utilities.",
  "categories": [
    "utilities",
    "developer tools"
  ],
  "tags": [
    "formatting",
    "encoding"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://devtoys.app/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "devtoys",
  "overview": "keep common text and data tasks in one desktop toolbox, including formatting and encoding helpers. choose the version for your operating system on the project page.",
  "toolType": "developer toolbox",
  "platform": [
    "desktop"
  ],
  "officialUrl": "https://devtoys.app/"
}),
  tool({
  "slug": "mockoon",
  "name": "mockoon",
  "description": "create local mock APIs for development and testing.",
  "categories": [
    "api testing"
  ],
  "tags": [
    "mock",
    "http"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://mockoon.com/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "mockoon",
  "overview": "define sample routes and responses so a frontend can be developed before its backend is ready. check the project documentation for desktop and command-line workflows.",
  "toolType": "API mocking",
  "platform": [
    "desktop",
    "cli"
  ],
  "officialUrl": "https://mockoon.com/"
}),
  tool({
  "slug": "discohook",
  "name": "discohook",
  "description": "compose formatted Discord webhook messages in a web editor.",
  "categories": [
    "utilities",
    "developer tools"
  ],
  "tags": [
    "discord",
    "webhooks"
  ],
  "sourceVerifiedAt": "2026-09-26",
  "sources": [
    {
      "url": "https://discohook.org/",
      "label": "official documentation / product page",
      "facts": "product purpose and features reviewed; unrecorded pricing, quotas, and permissions remain unknown."
    }
  ],
  "provider": "discohook",
  "overview": "preview an embed before sending it to your server. this entry is the webhook editor; it is not a general-purpose Discord bot.",
  "toolType": "webhook editor",
  "platform": [
    "web"
  ],
  "officialUrl": "https://discohook.org/"
}),
];


export const extensions = tools.filter(isBrowserExtension);
export const developerTools = tools.filter((item) => !isBrowserExtension(item));
