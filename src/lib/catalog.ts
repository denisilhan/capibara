import type { Resource } from "../types/index";

export const isBrowserExtension = (item: Resource): boolean =>
  item.kind === "tool" && item.toolType === "browser extension";

export const catalogSection = (item: Resource) =>
  isBrowserExtension(item) ? "extension" : item.kind;
