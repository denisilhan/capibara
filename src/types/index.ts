export type PricingType = "free" | "freemium" | "paid";
export type AuthType = "none" | "api-key" | "oauth";
export type SortType = "trending" | "useful" | "weird" | "beginner" | "price";
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
export interface DeveloperTool extends CatalogBase {
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
  kind: "weird";
  officialUrl: string;
  pricing: PricingType | null;
  loginRequired: boolean | null;
}
export type Resource = Api | DiscordBot | DeveloperTool | WeirdWeb;
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
