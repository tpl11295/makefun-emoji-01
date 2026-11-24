import { mkdirSync, writeFileSync } from "node:fs";

// One Emoji, One Smile entry — exactly one emoji and nothing else.
// Judge brief: the judge is shown two emojis at a time and picks the
// warmer of the pair; the warmest emoji wins the most comparisons.
// Chosen: 🥹 — a smile holding back happy tears. Warmer than a plain
// smile (😊) because it carries tenderness, not just cheer; more human
// than a heart (❤️), which reads as a symbol rather than a feeling.
const EMOJI = "🥹";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
