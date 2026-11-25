import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for "One Emoji, One Smile".
// Exactly one emoji and nothing else. The judge is shown two emojis
// at a time and picks the warmer of the pair; the warmest emoji wins
// the most comparisons. Chosen: 🥹 — a smile holding back happy
// tears. Warmer than a plain smile (😊) because it carries
// tenderness, not just cheer; more human than a heart (❤️), which
// reads as a symbol rather than a feeling — and the tears are the
// warmth, not the smile alone.
const EMOJI = "🥹";

function main(): void {
  if ([...EMOJI].length !== 1) {
    throw new Error("entry must be exactly one emoji");
  }
  console.log(`entry OK (${EMOJI})`);
  console.log(EMOJI);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", EMOJI, "utf8");
}

main();
