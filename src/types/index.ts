export type PricingType = "free" | "freemium" | "paid";
export type AuthType = "none" | "api-key" | "oauth";
export type SortType = "trending" | "useful" | "weird" | "beginner" | "price" | "weirdness-desc" | "weirdness-asc";
export interface SourceNote {
  url: string;
  label: string;
  facts: string;
}
export interface CatalogBase {
  id: string;
  slug: string;
  name: string;
  description: string;
  /** Plain-language editorial guidance for using this entry. */
  overview?: string;
  categories: string[];
  tags: string[];
  sourceVerifiedAt: string | null;
  sources: SourceNote[];
}
export interface ResourceBase extends CatalogBase {
  usefulnessScore: number;
  weirdnessScore: number;
}
export interface Api extends ResourceBase {
  kind: "api";
  provider: string;
  pricingType: PricingType | null;
  startingPrice: number | null;
  currency: string | null;
  pricePeriod: "month" | null;
  pricingNote: string;
  freeTier: boolean | null;
  freeRequests: string | null;
  requestPeriod: string | null;
  authType: AuthType | null;
  authNote: string;
  endpointSample: string | null;
  curlSample: string | null;
  responseSample: string | null;
  docsUrl: string;
  officialUrl: string;
  beginnerScore: number;
  featured: boolean;
  buildIdeas: string[];
}
export interface DiscordBot extends ResourceBase {
  kind: "bot";
  pricing: PricingType | null;
  pricingNote: string;
  websiteUrl: string;
  inviteUrl: string | null;
  githubUrl: string | null;
  verifiedInvite: boolean;
  inviteSourceUrl: string | null;
  isOpenSource: boolean | null;
}
export type AiArea = "coding" | "web" | "design" | "mobile" | "automation";

export interface DeveloperTool extends CatalogBase {
  /** Editorial use cases; one tool can appear in multiple AI sections. */
  aiAreas?: AiArea[];
  kind: "tool";
  provider: string;
  toolType: string;
  platform: string[];
  pricing: PricingType | null;
  officialUrl: string;
  docsUrl: string | null;
  githubUrl: string | null;
  isOpenSource: boolean | null;
  installCommand: string | null;
}
export interface WeirdWeb extends CatalogBase {
  /** capibara editorial judgment, not a provider metric. Omit when unreviewed. */
  weirdness?: { level: 1 | 2 | 3; reason: string };
  kind: "weird";
  officialUrl: string;
  pricing: PricingType | null;
  loginRequired: boolean | null;
}
export interface WebSite extends CatalogBase {
  kind: "web";
  section: "games" | "useful";
  officialUrl: string;
  pricing: PricingType | null;
  loginRequired: boolean | null;
  players?: ("solo" | "group")[];
  playStyles?: ("daily" | "time attack" | "competitive" | "casual")[];
}
export type Resource = Api | DiscordBot | DeveloperTool | WeirdWeb | WebSite;
export interface CollectionDefinition {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  resourceType: "api" | "bot" | "tool" | "weird" | "all";
  rules: {
    categories?: string[];
    tags?: string[];
    pricing?: PricingType[];
    auth?: AuthType[];
    freeTier?: boolean;
    minUsefulness?: number;
    minWeirdness?: number;
    minBeginnerScore?: number;
    openSource?: boolean;
  };
}
