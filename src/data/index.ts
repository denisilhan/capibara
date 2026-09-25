import { apis } from "./apis";
import { bots } from "./bots";
import { tools } from "./tools";
import { weird } from "./weird";
import type { Resource } from "../types/index";
export const resources: Resource[] = [...apis, ...bots, ...tools, ...weird];
