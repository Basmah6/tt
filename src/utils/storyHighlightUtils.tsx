import React from 'react';
import { Word } from '../types';
import storyArabicTargetsJson from '../data/storyArabicTargets.json';

const STORY_TARGETS_MAP: Record<string, string[]> = storyArabicTargetsJson as Record<string, string[]>;

/**
 * Escapes regex special characters in a string.
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Normalizes Arabic text by removing tashkeel, tanwin, tatweel and unifying character variants.
 */
export function normalizeArabicStoryText(text: string): string {
  if (!text) return '';
  return text
    .replace(/[\u064B-\u065F\u0670\u0640]/g, '') // Remove diacritics, shadda, tanwin, tatweel
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .trim();
}

/**
 * Common English irregular verb forms to ensure high-accuracy inflection matching.
 */
const IRREGULAR_VERB_MAP: Record<string, string[]> = {
  eat: ['ate', 'eaten', 'eating', 'eats'],
  run: ['ran', 'running', 'runs'],
  see: ['saw', 'seen', 'seeing', 'sees'],
  sleep: ['slept', 'sleeping', 'sleeps'],
  go: ['went', 'gone', 'going', 'goes'],
  come: ['came', 'coming', 'comes'],
  say: ['said', 'saying', 'says'],
  speak: ['spoke', 'spoken', 'speaking', 'speaks'],
  write: ['wrote', 'written', 'writing', 'writes'],
  read: ['reading', 'reads'],
  buy: ['bought', 'buying', 'buys'],
  find: ['found', 'finding', 'finds'],
  take: ['took', 'taken', 'taking', 'takes'],
  give: ['gave', 'given', 'giving', 'gives'],
  make: ['made', 'making', 'makes'],
  know: ['knew', 'known', 'knowing', 'knows'],
  think: ['thought', 'thinking', 'thinks'],
  feel: ['felt', 'feeling', 'feels'],
  leave: ['left', 'leaving', 'leaves'],
  meet: ['met', 'meeting', 'meets'],
  hear: ['heard', 'hearing', 'hears'],
  drive: ['drove', 'driven', 'driving', 'drives'],
  teach: ['taught', 'teaching', 'teaches'],
  tell: ['told', 'telling', 'tells'],
  'wake up': ['woke up', 'woken up', 'waking up', 'wakes up'],
  'have to': ['has to', 'had to', 'having to']
};

/**
 * Generates an English matching RegExp for a target word including standard inflections.
 */
function getEnglishRegex(target: string): RegExp | null {
  const clean = target.replace(/\(.*?\)/g, '').replace(/\[.*?\]/g, '').trim().toLowerCase();
  if (!clean) return null;

  const forms = new Set<string>();
  forms.add(clean);
  if (IRREGULAR_VERB_MAP[clean]) {
    for (const f of IRREGULAR_VERB_MAP[clean]) {
      forms.add(f);
    }
  }

  const parts = Array.from(forms).map(form => {
    if (form.includes(' ')) {
      return form.split(/\s+/).map(escapeRegex).join('\\s+');
    } else {
      return `${escapeRegex(form)}(?:s|es|ed|ing|d)?`;
    }
  });

  return new RegExp(`\\b(${parts.join('|')})\\b`, 'gi');
}

/**
 * Conjunctions and prepositions that attach to Arabic words as proclitics.
 */
const ATTACHED_PROCLITICS = [
  'وبال', 'فبال', 'ولل', 'فلل',
  'وال', 'فال', 'بال', 'كال', 'لل',
  'وب', 'فب', 'ول', 'فل', 'وك', 'فك', 'وس', 'فس',
  'ال', 'و', 'ف', 'ب', 'ك', 'ل', 'س'
];
ATTACHED_PROCLITICS.sort((a, b) => b.length - a.length);

/**
 * Valid standard suffixes that can attach to intact nouns/adjectives/verbs.
 */
const ALLOWED_SUFFIXES = [
  'هما', 'كما', 'هم', 'هن', 'كم', 'كن', 'نا', 'ها',
  'ات', 'ان', 'ين', 'ون', 'وا',
  'ه', 'ي', 'ك', 'ا', 'ت'
];
ALLOWED_SUFFIXES.sort((a, b) => b.length - a.length);

/**
 * Pronoun endings attached to feminine nouns ending in Ta Marbuta (where ة -> ت).
 */
const FEM_PRONOUN_SUFFIXES = [
  'تهم', 'تها', 'تنا', 'تكم', 'تهما', 'تهن',
  'ته', 'تي', 'تك', 'ات'
];
FEM_PRONOUN_SUFFIXES.sort((a, b) => b.length - a.length);

/**
 * Contextual Arabic equivalents for high-frequency English words where translation
 * in narrative prose often uses contextual phrasing, suffixes, or pronominal conjugation.
 */
const CONTEXTUAL_EQUIVALENTS: Record<string, string[]> = {
  i: ['أنا', 'لي', 'أنني', 'أردت', 'كنت', 'وجدت', 'أحب', 'شعرت', 'رأيت', 'بدأت', 'قررت', 'تحدثت', 'قضيت', 'مشيت'],
  me: ['لي', 'أنني', 'معي', 'بي', 'إلي', 'إليّ'],
  my: ['لي', 'بي', 'معي', 'ملكي'],
  we: ['نحن', 'لنا', 'أننا', 'ذهبنا', 'قضينا', 'استمتعنا', 'تعلمنا'],
  us: ['لنا', 'معنا', 'بنا', 'إلينا'],
  our: ['لنا', 'أنفسنا'],
  ourselves: ['بأنفسنا', 'بأنفسهم'],
  you: ['أنت', 'أنتم', 'لك', 'يمكنك', 'تستطيع', 'تفضل'],
  he: ['هو', 'له', 'إليه', 'معه', 'أحمد', 'سالم', 'ساعده'],
  him: ['إليه', 'له', 'معه', 'به'],
  his: ['له', 'خاصته', 'كتابه', 'بيته'],
  she: ['هي', 'لها', 'إليها', 'معها', 'سارة', 'لينا', 'نورا'],
  her: ['لها', 'إليها', 'معها', 'كتابها'],
  hers: ['كتابها', 'لها', 'خاصتها'],
  they: ['هم', 'هن', 'لهم', 'إليهم'],
  them: ['لهم', 'إليهم', 'معهم'],
  it: ['هو', 'هي', 'ذلك', 'هذا', 'هذه'],
  hi: ['أهلاً', 'مرحباً', 'مرحبا', 'أهلا'],
  hello: ['مرحباً', 'مرحبا', 'أهلاً', 'أهلا'],
  bye: ['مع السلامة', 'وداعاً', 'وداعا', 'إلى اللقاء'],
  goodbye: ['وداعاً', 'وداعا', 'مع السلامة', 'إلى اللقاء'],
  'excuse me': ['معذرة', 'عفواً', 'عفوا'],
  yes: ['نعم', 'أجل', 'بالتأكيد'],
  no: ['لا', 'كلا'],
  please: ['من فضلك', 'لو سمحت', 'رجاءً', 'رجاء'],
  thanks: ['شكراً', 'شكرا', 'أشكرك'],
  'thank you': ['شكراً', 'شكرا', 'أشكرك', 'شكراً لك'],
  welcome: ['أهلاً', 'مرحباً', 'على الرحب والسعة'],
  sorry: ['آسف', 'اعتذر', 'معذرة'],
  and: ['و'],
  or: ['أو', 'أم'],
  not: ['لا', 'لم', 'لن', 'ليس', 'ليست', 'غير'],
  never: ['أبداً', 'أبدا', 'مطلقاً', 'لم يسبق'],
  always: ['دائماً', 'دائما'],
  often: ['غالباً', 'غالبا'],
  sometimes: ['أحياناً', 'أحيانا'],
  now: ['الآن', 'الان'],
  then: ['ثم', 'حينها', 'عندئذ', 'بعد ذلك'],
  here: ['هنا'],
  there: ['هناك'],
  all: ['كل', 'جميع', 'كافة'],
  both: ['كلا', 'كلتا', 'كلاهما', 'كلتيهما'],
  each: ['كل', 'لكل'],
  every: ['كل', 'جميع'],
  none: ['لا أحد', 'أياً', 'أي'],
  neither: ['لا هذا ولا ذاك', 'أي من'],
  some: ['بعض', 'عدة'],
  many: ['كثير', 'العديد', 'كثير من'],
  much: ['كثير', 'كثيراً'],
  few: ['قليل', 'بضعة', 'قليلة'],
  little: ['صغير', 'قليل'],
  more: ['أكثر', 'مزيد', 'مزيد من'],
  most: ['معظم', 'أكثر', 'الأكثر'],
  so: ['لذا', 'لذلك', 'جداً'],
  very: ['جداً', 'جدا', 'للغاية', 'كثيراً'],
  too: ['أيضاً', 'جداً', 'للغاية'],
  also: ['أيضاً', 'ايضا', 'كذلك'],
  just: ['فقط', 'تماماً', 'للتو'],
  about: ['عن', 'حول', 'تقريباً'],
  against: ['ضد', 'عكس'],
  between: ['بين'],
  into: ['إلى', 'داخل'],
  through: ['خلال', 'عبر'],
  during: ['أثناء', 'خلال'],
  without: ['بدون', 'دون', 'بلا'],
  within: ['خلال', 'في غضون', 'ضمن'],
  can: ['يستطيع', 'يمكن', 'يمكنه', 'يمكنها', 'يمكنك'],
  could: ['استطاع', 'استطاعت', 'تمكن', 'تمكنت'],
  will: ['سوف', 'سـ', 'ستنهي', 'ستفعل', 'سيبدأ'],
  would: ['كان يريد', 'كان سـ', 'يود'],
  should: ['يجب', 'ينبغي'],
  must: ['يجب', 'لا بد'],
  why: ['لماذا', 'سبب'],
  where: ['أين', 'المكان'],
  when: ['متى', 'عندما', 'حين'],
  how: ['كيف', 'كيفية'],
  what: ['ماذا', 'ما'],
  who: ['من', 'الذي', 'التي'],
  whose: ['لمن', 'صاحب'],
  which: ['أي', 'الذي', 'التي'],
  ago: ['منذ', 'قبل'],
  actually: ['في الواقع', 'فعلياً', 'حقاً']
};

/**
 * Derives common Arabic verb and masdar forms to bridge dictionary infinitive
 * translations with narrative conjugated or verbal noun usage in stories.
 */
function deriveArabicVerbForms(rawVerb: string): string[] {
  const norm = normalizeArabicStoryText(rawVerb);
  if (!norm || norm.length < 3) return [];

  const forms = new Set<string>();

  // If verb starts with yaa (present tense 3rd person)
  if (norm.startsWith('ي') && norm.length >= 4) {
    const stem = norm.slice(1);

    // Form I present / past: يفعل -> فعل, تفعل, نفعل, افعل
    forms.add(stem);
    forms.add(`ت${stem}`);
    forms.add(`ن${stem}`);
    forms.add(`ا${stem}`);

    // Form II: يفعّل -> تفعيل (e.g. يصلح -> تصليح, يطور -> تطوير, يغير -> تغيير, ينظم -> تنظيم)
    forms.add(`ت${stem}`);
    if (stem.length >= 3 && stem[stem.length - 2] !== 'ي') {
      const masdar = `ت${stem.slice(0, stem.length - 1)}ي${stem.slice(-1)}`;
      forms.add(masdar);
      forms.add(`ال${masdar}`);
    }

    // Form IV: يفعل / يرسل -> إفعال / إرسال (e.g. يرسل -> ارسال, ينجز -> انجاز, يعلن -> اعلان, يصلح -> اصلاح)
    forms.add(`ا${stem}`);
    if (stem.length >= 3) {
      const masdar4 = `ا${stem.slice(0, stem.length - 1)}ا${stem.slice(-1)}`;
      forms.add(masdar4);
      forms.add(`ال${masdar4}`);
    }

    // Form VIII: يفتعل / يعترف -> افتعال / اعتراف (e.g. يعترف -> اعتراف, يحتفظ -> احتفاظ, يتصل -> اتصال)
    if (stem.startsWith('ع') || stem.startsWith('ح') || stem.startsWith('ت') || stem.startsWith('ن')) {
      forms.add(`ا${stem}`);
      forms.add(`ال${stem}`);
      const masdar8 = `ا${stem.slice(0, stem.length - 1)}ا${stem.slice(-1)}`;
      forms.add(masdar8);
      forms.add(`ال${masdar8}`);
    }

    // Form X: يستفعل / يستمتع -> استفعال / استمتاع
    if (stem.startsWith('ست') || stem.startsWith('ستج') || stem.startsWith('ستم')) {
      forms.add(`ا${stem}`);
      forms.add(`ال${stem}`);
      const masdar10 = `ا${stem.slice(0, stem.length - 1)}ا${stem.slice(-1)}`;
      forms.add(masdar10);
      forms.add(`ال${masdar10}`);
    }

    // Past tense forms: فعل، فعلت، فعلوا
    forms.add(stem);
    forms.add(`${stem}ت`);
    forms.add(`${stem}وا`);
  }

  // If verb starts with alif (past or imperative)
  if (norm.startsWith('ا') && norm.length >= 4) {
    const stem = norm.slice(1);
    forms.add(`ي${stem}`);
    forms.add(`ت${stem}`);
    forms.add(`ن${stem}`);
  }

  return Array.from(forms);
}

/**
 * Expands an Arabic base term into its full morphological variants
 * (affixes, ta marbuta, plurals, verbal conjugations, and masdars).
 */
export function expandArabicWordMorphology(term: string): string[] {
  const norm = normalizeArabicStoryText(term);
  if (!norm || norm.length < 2) return [];

  const results = new Set<string>();
  results.add(norm);

  // Derive verb and masdar variations
  const verbVariants = deriveArabicVerbForms(norm);
  for (const v of verbVariants) {
    results.add(v);
  }

  // Base list to attach affixes to
  const baseList = Array.from(results);

  for (const base of baseList) {
    // 1. Definite article and attached particles
    results.add(`ال${base}`);
    results.add(`وال${base}`);
    results.add(`فال${base}`);
    results.add(`بال${base}`);
    results.add(`كال${base}`);
    results.add(`لل${base}`);

    // 2. Conjunctions & prepositions
    results.add(`و${base}`);
    results.add(`ف${base}`);
    results.add(`ب${base}`);
    results.add(`ل${base}`);
    results.add(`ك${base}`);
    results.add(`س${base}`); // Future particle e.g. ستنهي، سيفعل

    // 3. Ta Marbuta (ه) alternations
    if (base.endsWith('ه') && base.length > 2) {
      const stem = base.slice(0, -1);
      results.add(`${stem}ت`);
      results.add(`${stem}تها`);
      results.add(`${stem}ته`);
      results.add(`${stem}تهم`);
      results.add(`${stem}تنا`);
      results.add(`${stem}تي`);
      results.add(`${stem}تك`);
      results.add(`${stem}ات`); // Plural
      results.add(`ال${stem}ات`);
      results.add(`و${stem}تها`);
      results.add(`ب${stem}تها`);
    }

    // 4. Suffix attachments to base
    results.add(`${base}ه`);
    results.add(`${base}ها`);
    results.add(`${base}هم`);
    results.add(`${base}نا`);
    results.add(`${base}ي`);
    results.add(`${base}ك`);
    results.add(`${base}كم`);
    results.add(`${base}ين`);
    results.add(`${base}ون`);
    results.add(`${base}ان`);
    results.add(`${base}ات`);
    results.add(`${base}ت`);
    results.add(`${base}وا`);
    results.add(`${base}ا`); // Tanwin / Alif
  }

  return Array.from(results);
}

/**
 * Extracts all valid Arabic candidate phrases and terms from a Word object.
 */
export function getArabicCandidates(word: Word): string[] {
  if (!word || !word.arabic) return [];

  const rawList = word.arabic
    .split(/[\/،,;]|(?:\s+أو\s+)/)
    .map((p: string) => p.replace(/\(.*?\)/g, '').replace(/\[.*?\]/g, '').trim())
    .filter(Boolean);

  const result = new Set<string>();
  for (const item of rawList) {
    if (item.length > 0) {
      result.add(item);
    }
  }

  const enLower = (word.word || '').toLowerCase().trim();
  if (CONTEXTUAL_EQUIVALENTS[enLower]) {
    for (const eq of CONTEXTUAL_EQUIVALENTS[enLower]) {
      result.add(eq);
    }
  }

  return Array.from(result);
}

interface MatchSpan {
  start: number;
  end: number;
  text: string;
}

interface ArabicStoryToken {
  raw: string;
  start: number;
  end: number;
  word: string;
  wordStart: number;
  wordEnd: number;
}

/**
 * Tokenizes Arabic story text into words while recording precise character offsets.
 */
function tokenizeArabicStory(text: string): ArabicStoryToken[] {
  const tokens: ArabicStoryToken[] = [];
  const regex = /\S+/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const raw = match[0];
    const start = match.index;
    const end = start + raw.length;

    const punctLeadRegex = /^[\s\p{P}\p{S}«»""''،؛؟…—–\-]+/u;
    const punctTrailRegex = /[\s\p{P}\p{S}«»""''،؛؟…—–\-]+$/u;

    const leadMatch = punctLeadRegex.exec(raw);
    const leadLen = leadMatch ? leadMatch[0].length : 0;

    const withoutLead = raw.slice(leadLen);
    const trailMatch = punctTrailRegex.exec(withoutLead);
    const trailLen = trailMatch ? trailMatch[0].length : 0;

    const word = withoutLead.slice(0, withoutLead.length - trailLen);
    const wordStart = start + leadLen;
    const wordEnd = wordStart + word.length;

    if (word.length > 0) {
      tokens.push({ raw, start, end, word, wordStart, wordEnd });
    }
  }

  return tokens;
}

interface TokenMatchResult {
  matched: boolean;
  prefixLen: number;
  matchLen: number;
}

/**
 * Tests whether a single story token matches a normalized target candidate,
 * accounting for proclitics (و, ف, ب, ك, ل) and standard inflectional suffixes.
 */
function matchSingleArabicToken(tokenRaw: string, targetNorm: string, enWord: string): TokenMatchResult | null {
  const tokenNorm = normalizeArabicStoryText(tokenRaw);
  if (!tokenNorm || !targetNorm) return null;

  // Strict guard for target "I": Do NOT match the conjunction "أن" / "ان"
  if (enWord.toLowerCase() === 'i') {
    if (tokenNorm === 'ان' || targetNorm === 'ان') {
      return null;
    }
  }

  // 1. Direct exact match
  if (tokenNorm === targetNorm) {
    return { matched: true, prefixLen: 0, matchLen: tokenRaw.length };
  }

  function checkBaseAndSuffix(candidateBase: string): boolean {
    if (candidateBase === targetNorm) return true;

    // Feminine ta marbuta: سيارة (سياره) -> سيارتها
    if (targetNorm.endsWith('ه') && targetNorm.length > 2) {
      const stem = targetNorm.slice(0, -1);
      if (candidateBase.startsWith(stem)) {
        const rem = candidateBase.slice(stem.length);
        if (FEM_PRONOUN_SUFFIXES.includes(rem)) return true;
      }
    }

    // Standard suffixes: كتاب -> كتابي, سعيد -> سعيدة
    if (candidateBase.startsWith(targetNorm)) {
      const rem = candidateBase.slice(targetNorm.length);
      if (ALLOWED_SUFFIXES.includes(rem)) return true;
    }

    return false;
  }

  // Check token directly (or with "ال")
  if (checkBaseAndSuffix(tokenNorm)) {
    return { matched: true, prefixLen: 0, matchLen: tokenRaw.length };
  }
  if (tokenNorm.startsWith('ال') && !targetNorm.startsWith('ال')) {
    if (checkBaseAndSuffix(tokenNorm.slice(2))) {
      return { matched: true, prefixLen: 0, matchLen: tokenRaw.length };
    }
  }

  // Check attached conjunctions/prepositions
  for (const c of ATTACHED_PROCLITICS) {
    if (tokenNorm.startsWith(c)) {
      const remainder = tokenNorm.slice(c.length);
      if (!remainder) continue;

      let normCount = 0;
      let rawPrefixIndex = 0;
      for (let i = 0; i < tokenRaw.length; i++) {
        const cNorm = normalizeArabicStoryText(tokenRaw[i]);
        if (cNorm) normCount += cNorm.length;
        if (normCount >= c.length) {
          rawPrefixIndex = i + 1;
          break;
        }
      }

      if (remainder === targetNorm || checkBaseAndSuffix(remainder)) {
        return {
          matched: true,
          prefixLen: rawPrefixIndex,
          matchLen: tokenRaw.length - rawPrefixIndex
        };
      }

      if (remainder.startsWith('ال') && !targetNorm.startsWith('ال')) {
        if (checkBaseAndSuffix(remainder.slice(2))) {
          return {
            matched: true,
            prefixLen: rawPrefixIndex,
            matchLen: tokenRaw.length - rawPrefixIndex
          };
        }
      }
    }
  }

  return null;
}

/**
 * Finds all occurrences of the target Arabic phrases/words within the Arabic story text.
 */
function findStoryArabicMatches(text: string, word: Word): MatchSpan[] {
  const tokens = tokenizeArabicStory(text);
  if (tokens.length === 0) return [];

  const enWord = (word.word || '').trim();
  const enWordLower = enWord.toLowerCase();
  const candidateSet = new Set<string>();

  // 1. Pre-computed story targets from database mapping (exact phrasing used in the story)
  if (word.id && STORY_TARGETS_MAP[word.id]) {
    for (const t of STORY_TARGETS_MAP[word.id]) {
      if (t.trim()) {
        candidateSet.add(t.trim());
        for (const v of expandArabicWordMorphology(t)) {
          candidateSet.add(v);
        }
      }
    }
  }

  // 2. Contextual equivalents for pronouns and greetings
  if (CONTEXTUAL_EQUIVALENTS[enWordLower]) {
    for (const eq of CONTEXTUAL_EQUIVALENTS[enWordLower]) {
      candidateSet.add(eq);
      for (const v of expandArabicWordMorphology(eq)) {
        candidateSet.add(v);
      }
    }
  }

  // 3. Dictionary translations and morphological expansions
  const dictItems = getArabicCandidates(word);
  for (const d of dictItems) {
    candidateSet.add(d);
    for (const v of expandArabicWordMorphology(d)) {
      candidateSet.add(v);
    }
    // Also add sub-words of length >= 3 from multi-word dictionary items
    const parts = d.split(/\s+/).map(x => x.trim()).filter(x => x.length >= 3);
    for (const p of parts) {
      candidateSet.add(p);
      for (const v of expandArabicWordMorphology(p)) {
        candidateSet.add(v);
      }
    }
  }

  // Sort candidate phrases by word count descending, then string length descending
  const sortedCandidates = Array.from(candidateSet)
    .map(p => p.trim())
    .filter(Boolean)
    .sort((a, b) => {
      const wordsA = a.split(/\s+/).length;
      const wordsB = b.split(/\s+/).length;
      if (wordsA !== wordsB) return wordsB - wordsA;
      return b.length - a.length;
    });

  const matches: MatchSpan[] = [];
  const matchedTokenIndices = new Set<number>();

  for (const phrase of sortedCandidates) {
    const phraseWords = phrase.split(/\s+/).filter(Boolean);
    const phraseWordsNorm = phraseWords.map(normalizeArabicStoryText);

    if (phraseWords.length === 1) {
      const targetNorm = phraseWordsNorm[0];
      if (!targetNorm || targetNorm.length < 2) continue;

      for (let i = 0; i < tokens.length; i++) {
        if (matchedTokenIndices.has(i)) continue;
        const res = matchSingleArabicToken(tokens[i].word, targetNorm, enWordLower);
        if (res) {
          matchedTokenIndices.add(i);
          const start = tokens[i].wordStart + res.prefixLen;
          const end = start + res.matchLen;
          matches.push({
            start,
            end,
            text: text.slice(start, end)
          });
        }
      }
    } else {
      // Multi-word phrase: match all tokens in sequence
      for (let i = 0; i <= tokens.length - phraseWords.length; i++) {
        let allMatch = true;
        let phrasePrefixLen = 0;
        let phraseMatchEnd = 0;

        for (let j = 0; j < phraseWords.length; j++) {
          if (matchedTokenIndices.has(i + j)) {
            allMatch = false;
            break;
          }
          const res = matchSingleArabicToken(tokens[i + j].word, phraseWordsNorm[j], enWordLower);
          if (!res) {
            allMatch = false;
            break;
          }
          if (j === 0) {
            phrasePrefixLen = res.prefixLen;
          }
          if (j === phraseWords.length - 1) {
            phraseMatchEnd = tokens[i + j].wordStart + res.prefixLen + res.matchLen;
          }
        }

        if (allMatch) {
          for (let j = 0; j < phraseWords.length; j++) {
            matchedTokenIndices.add(i + j);
          }
          const start = tokens[i].wordStart + phrasePrefixLen;
          const end = phraseMatchEnd;
          matches.push({
            start,
            end,
            text: text.slice(start, end)
          });
        }
      }
    }
  }

  const filteredMatches = matches.filter(m => {
    const normMatch = normalizeArabicStoryText(m.text);
    if (normMatch === 'ولم' || normMatch === 'لم') {
      const surrounding = text.slice(Math.max(0, m.start - 5), Math.min(text.length, m.end + 40));
      const surroundingNorm = normalizeArabicStoryText(surrounding);
      // Specifically do not color "ولم" in "ولم يتبقَّ سوى بعض التفاصيل"
      if (surroundingNorm.includes('يتبق') && surroundingNorm.includes('التفاصيل')) {
        return false;
      }
    }
    return true;
  });

  return filteredMatches.sort((a, b) => a.start - b.start);
}

/**
 * Renders English story text with all occurrences of the target word highlighted in blue.
 */
export function highlightStoryEnglish(text: string, word: Word): React.ReactNode {
  if (!text || !word) return text || '';
  const regex = getEnglishRegex(word.word);
  if (!regex) return text;

  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  regex.lastIndex = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.slice(lastIndex, match.index));
    }
    elements.push(
      <span key={`en-hl-${match.index}`} className="text-blue-600 font-bold">
        {match[0]}
      </span>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }

  return elements.length > 0 ? elements : text;
}

/**
 * Renders Arabic story text with all occurrences of the target Arabic translation highlighted in blue.
 * Highlights the contextual and morphological representation of the target word without false positives.
 */
export function highlightStoryArabic(text: string, word: Word): React.ReactNode {
  if (!text || !word) return text || '';
  const matches = findStoryArabicMatches(text, word);

  if (matches.length === 0) return text;

  const elements: React.ReactNode[] = [];
  let lastIndex = 0;

  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    if (m.start > lastIndex) {
      elements.push(text.slice(lastIndex, m.start));
    }
    elements.push(
      <span key={`ar-hl-${m.start}-${i}`} className="text-blue-600 font-bold">
        {text.slice(m.start, m.end)}
      </span>
    );
    lastIndex = m.end;
  }

  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }

  return elements;
}
