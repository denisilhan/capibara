import { resources } from "./index";

// A small, interleaved editorial selection across the directory.
const ids = ["api-open-meteo", "bot-sapphire", "tool-bitwarden", "tool-httpie", "weird-pointer-pointer",
  "api-pokeapi", "bot-poketwo", "tool-shazam", "tool-excalidraw", "weird-sandspiel", "web-timeguessr", "web-photopea"];
export const discoveryItems = ids.flatMap((id) => {
  const item = resources.find((resource) => resource.id === id);
  return item ? [item] : [];
});
