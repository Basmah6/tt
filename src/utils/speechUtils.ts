/**
 * Utility functions for Speech Synthesis pronunciation.
 * Normalizes specific English abbreviations into their natural spoken words:
 * - Mrs. -> "missus"
 * - Mr.   -> "mister"
 * - Ms.   -> "miz"
 *
 * This ensures that browser speech synthesis pronounces them correctly
 * as honorific titles instead of spelling out individual letters.
 * The display text remains untouched.
 */

export function getSpokenText(text: string): string {
  if (!text) return "";
  return text.replace(/\b(mrs|mr|ms)\b\.?/gi, (match, title) => {
    const lower = title.toLowerCase();
    if (lower === "mrs") return "missus";
    if (lower === "mr") return "mister";
    if (lower === "ms") return "miz";
    return match;
  });
}
