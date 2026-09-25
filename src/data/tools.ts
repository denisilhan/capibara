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
  tool({ slug: "postman", name: "postman", provider: "postman", description: "an API workspace for sending requests, organizing collections, and testing endpoints with teammates.", categories: ["api testing"], tags: ["requests", "collections"], toolType: "api client", platform: ["web", "desktop"], officialUrl: "https://www.postman.com/", docsUrl: "https://learning.postman.com/docs/" }),
  tool({ slug: "bruno", name: "bruno", provider: "bruno", description: "a desktop API client that keeps request collections in files suitable for version control.", categories: ["api testing"], tags: ["requests", "git"], toolType: "api client", platform: ["desktop", "cli"], officialUrl: "https://www.usebruno.com/", docsUrl: "https://docs.usebruno.com/", githubUrl: "https://github.com/usebruno/bruno", isOpenSource: true }),
  tool({ slug: "hoppscotch", name: "hoppscotch", provider: "hoppscotch", description: "a web-first API development workspace for composing requests and sharing collections.", categories: ["api testing"], tags: ["requests", "web"], toolType: "api client", platform: ["web", "desktop", "cli"], officialUrl: "https://hoppscotch.io/", docsUrl: "https://docs.hoppscotch.io/", githubUrl: "https://github.com/hoppscotch/hoppscotch", isOpenSource: true }),
  tool({ slug: "ngrok", name: "ngrok", provider: "ngrok", description: "exposes a local service through a public endpoint for webhook testing and remote previews.", categories: ["networking"], tags: ["tunnels", "webhooks"], toolType: "tunneling", platform: ["cli", "web"], officialUrl: "https://ngrok.com/", docsUrl: "https://ngrok.com/docs" }),
  tool({ slug: "grafana", name: "grafana", provider: "grafana labs", description: "builds dashboards and visualizations from connected data sources for system observability.", categories: ["observability"], tags: ["dashboards", "metrics"], toolType: "observability", platform: ["web"], officialUrl: "https://grafana.com/", docsUrl: "https://grafana.com/docs/grafana/latest/visualizations/" }),
  tool({ slug: "docker", name: "docker", provider: "docker", description: "packages applications and dependencies into containers that can run across development environments.", categories: ["deployment"], tags: ["containers", "cli"], toolType: "container tooling", platform: ["desktop", "cli"], officialUrl: "https://www.docker.com/", docsUrl: "https://docs.docker.com/engine/" }),
  tool({ slug: "httpie", name: "httpie", provider: "httpie", description: "a command-line HTTP client with readable request syntax and formatted responses.", categories: ["api testing"], tags: ["http", "cli"], toolType: "http client", platform: ["cli"], officialUrl: "https://httpie.io/", docsUrl: "https://httpie.io/docs/cli" }),
  tool({ slug: "sentry", name: "sentry", provider: "sentry", description: "collects application errors and traces to help developers investigate production issues.", categories: ["observability"], tags: ["errors", "tracing"], toolType: "error monitoring", platform: ["web"], officialUrl: "https://sentry.io/" }),
];

