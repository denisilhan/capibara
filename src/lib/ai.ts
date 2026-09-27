import type { AiArea, DeveloperTool, Resource } from "../types/index";

export const aiSections: { id: AiArea; label: string; description: string }[] = [
  { id: "coding", label: "coding & agents", description: "edit an existing codebase or build your own agents. use the type filter to separate coding assistants from agent frameworks." },
  { id: "web", label: "web & frontend", description: "turn an idea into a website or web app, then refine the interface and code." },
  { id: "design", label: "design & prototyping", description: "explore screen layouts, editable designs, and interactive prototypes before building." },
  { id: "mobile", label: "mobile apps", description: "create mobile app screens and working apps. check each tool for its supported targets and publishing requirements." },
  { id: "automation", label: "automation", description: "connect models, data, and existing apps into workflows you can inspect and run." },
];

export function isAiTool(item: Resource): item is DeveloperTool {
  return item.kind === "tool" && Boolean(item.aiAreas?.length);
}
