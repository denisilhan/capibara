import type { CollectionDefinition } from "../types/index";
export const collections: CollectionDefinition[] = [
  {
    id: "student",
    slug: "student-projects",
    title: "apis for student projects",
    description: "small starts, useful data, and room to learn by building.",
    icon: "graduation",
    resourceType: "api",
    rules: { freeTier: true, minBeginnerScore: 8.5 },
  },
  {
    id: "weird",
    slug: "weird-apis",
    title: "wonderfully weird apis",
    description:
      "the internet is a strange place. these are the endpoints to prove it.",
    icon: "flask",
    resourceType: "api",
    rules: { minWeirdness: 7 },
  },
  {
    id: "no-auth",
    slug: "free-no-auth",
    title: "free no-auth essentials",
    description: "skip the signup. start with a request.",
    icon: "unlock",
    resourceType: "api",
    rules: { freeTier: true, auth: ["none"] },
  },
  {
    id: "data",
    slug: "data-projects",
    title: "apis for data projects",
    description:
      "structured data for dashboards, notebooks, and curious questions.",
    icon: "database",
    resourceType: "api",
    rules: { categories: ["data"], minUsefulness: 8.5 },
  },
  {
    id: "bot-projects",
    slug: "apis-for-bots",
    title: "apis for discord bots",
    description: "give your next bot something interesting to say.",
    icon: "bot",
    resourceType: "api",
    rules: { categories: ["gaming", "humor", "weather", "news", "anime"] },
  },
  {
    id: "beginner",
    slug: "beginner-friendly",
    title: "beginner-friendly apis",
    description: "approachable first requests, selected by capibara.",
    icon: "sprout",
    resourceType: "api",
    rules: { minBeginnerScore: 9 },
  },
  {
    id: "open-bots",
    slug: "open-source-bots",
    title: "open-source discord bots",
    description: "inspect the source, learn how it works, make it yours.",
    icon: "code",
    resourceType: "bot",
    rules: { openSource: true },
  },
  {
    id: "weird-bots",
    slug: "weird-bots",
    title: "weird discord bots",
    description: "a little less moderation. a little more personality.",
    icon: "sparkles",
    resourceType: "bot",
    rules: { minWeirdness: 7 },
  },
  {
    id: "open-tools",
    slug: "open-source-tools",
    title: "open-source developer tools",
    description: "inspectable tools for requests, containers, and everyday development.",
    icon: "code",
    resourceType: "tool",
    rules: { openSource: true },
  },
  {
    id: "weird-web",
    slug: "weird-web-rabbit-hole",
    title: "weird web rabbit hole",
    description: "playful experiments and strange corners worth opening.",
    icon: "sparkles",
    resourceType: "weird",
    rules: {},
  },
  {
  "id": "browser-extensions",
  "slug": "browser-extensions",
  "title": "browser extensions",
  "description": "everyday helpers and geeky browser tools. browser names reflect official listings; follow the project page for installation.",
  "icon": "code",
  "resourceType": "tool",
  "rules": {
    "categories": [
      "browser extensions"
    ]
  }
},
];
