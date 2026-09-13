import { Word } from '../types';

/**
 * Normalizes Arabic text by removing tashkeel/tatweel and unifying character variants.
 */
export function normalizeArabic(text: string): string {
  if (!text) return "";
  return text
    // Remove diacritics (tashkeel & tatweel)
    .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
    // Normalize alef forms (أ, إ, آ, ٱ -> ا)
    .replace(/[أإآٱ]/g, "ا")
    // Normalize teh marbuta and alef maksura
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .trim()
    .toLowerCase();
}

/**
 * Normalizes English text for resilient matching.
 */
export function normalizeEnglish(text: string): string {
  if (!text) return "";
  return text
    .trim()
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9\s,\/]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Splits text into individual words or phrase components.
 */
export function tokenize(text: string): string[] {
  if (!text) return [];
  return text
    .split(/[\s,\/،]+/)
    .map(t => t.trim())
    .filter(Boolean);
}

/**
 * Calculates a relevance score for a word against a search query.
 * Higher score = higher priority. Score 0 = no match (filtered out).
 */
export function getWordSearchScore(word: Word, rawQuery: string): number {
  const trimmed = rawQuery.trim();
  if (!trimmed) return 0;

  const qEn = normalizeEnglish(trimmed);
  const qAr = normalizeArabic(trimmed);
  const wEn = normalizeEnglish(word.word);
  const wAr = normalizeArabic(word.arabic);
  const pronAr = normalizeArabic(word.pronunciation);

  const tokensEn = tokenize(wEn);
  const tokensAr = tokenize(wAr);

  let score = 0;

  // 1. English Matching
  if (qEn) {
    // Exact full match (e.g. "an" === "an")
    if (wEn === qEn) {
      score = Math.max(score, 100000 - wEn.length);
    }
    // Exact token match (e.g. "an" in "a, an")
    else if (tokensEn.includes(qEn)) {
      score = Math.max(score, 90000 - wEn.length);
    }
    // Starts with search query (e.g. "advance" starts with "ad", "answer" starts with "an")
    else if (wEn.startsWith(qEn)) {
      score = Math.max(score, 70000 - wEn.length);
    }
    // Any token starts with search query (e.g. "credit card" -> "card" starts with "car")
    else if (tokensEn.some(t => t.startsWith(qEn))) {
      score = Math.max(score, 60000 - wEn.length);
    }
    // Substring match only for queries of 3 or more characters to avoid flooding with 1-2 letter noise
    else if (qEn.length >= 3) {
      const boundaryRegex = new RegExp(`\\b${qEn}`);
      if (boundaryRegex.test(wEn)) {
        score = Math.max(score, 40000 - wEn.length);
      } else if (wEn.includes(qEn)) {
        score = Math.max(score, 20000 - wEn.length);
      }
    }
  }

  // 2. Arabic Matching
  if (qAr) {
    // Exact full match in Arabic
    if (wAr === qAr) {
      score = Math.max(score, 100000 - wAr.length);
    }
    // Exact token match in Arabic (e.g. "عائلة" in "عائلة / أسرة")
    else if (tokensAr.includes(qAr)) {
      score = Math.max(score, 90000 - wAr.length);
    }
    // Starts with Arabic query
    else if (wAr.startsWith(qAr)) {
      score = Math.max(score, 70000 - wAr.length);
    }
    // Any Arabic token starts with query
    else if (tokensAr.some(t => t.startsWith(qAr))) {
      score = Math.max(score, 60000 - wAr.length);
    }
    // Arabic contains query
    else if (wAr.includes(qAr)) {
      score = Math.max(score, 40000 - wAr.length);
    }
    // Pronunciation match (fallback)
    else if (pronAr && pronAr.includes(qAr)) {
      score = Math.max(score, 15000);
    }
  }

  return score;
}

/**
 * Filters and ranks words strictly by relevance to the search query.
 * Exact matches and prefixes appear first. Unrelated words are excluded.
 */
export function searchAndRankWords(words: Word[], rawQuery: string): Word[] {
  const trimmed = rawQuery.trim();
  if (!trimmed) return words;

  const scored: Array<{ word: Word; score: number }> = [];

  for (const w of words) {
    const score = getWordSearchScore(w, trimmed);
    if (score > 0) {
      scored.push({ word: w, score });
    }
  }

  // Sort by score descending (highest priority first)
  scored.sort((a, b) => b.score - a.score);

  return scored.map(item => item.word);
}
