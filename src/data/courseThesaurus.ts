import { categories } from "./words";
import { Word, RelatedCourseWord } from "../types";

/**
 * Fast lookup map for all 3000 words in the course curriculum.
 */
const courseWordsMap = new Map<string, Word>();
for (const cat of categories) {
  for (const w of cat.words) {
    courseWordsMap.set(w.word.toLowerCase().trim(), w);
  }
}

/**
 * Curated list of antonym pairs (opposites) targeted directly within the course words.
 * Bidirectional: whenever [A, B] is defined, A is opposite of B and B is opposite of A.
 */
const CURATED_ANTONYM_PAIRS: [string, string][] = [
  // Adjectives
  ["happy", "sad"], ["happy", "gloomy"], ["happy", "unhappy"], ["glad", "sad"], ["cheerful", "sad"],
  ["big", "small"], ["big", "little"], ["big", "tiny"], ["large", "small"], ["huge", "tiny"], ["great", "small"],
  ["hot", "cold"], ["hot", "cool"], ["warm", "cool"], ["warm", "cold"],
  ["fast", "slow"], ["quick", "slow"], ["rapid", "slow"], ["swift", "slow"],
  ["good", "bad"], ["nice", "nasty"], ["fine", "bad"],
  ["easy", "difficult"], ["easy", "hard"], ["simple", "complex"], ["simple", "complicated"],
  ["rich", "poor"], ["wealthy", "poor"],
  ["clean", "dirty"], ["pure", "dirty"], ["tidy", "messy"],
  ["strong", "weak"], ["powerful", "weak"],
  ["heavy", "light"],
  ["dark", "light"], ["dark", "bright"],
  ["early", "late"],
  ["near", "far"], ["close", "far"], ["near", "distant"], ["close", "distant"],
  ["high", "low"], ["tall", "short"], ["long", "short"],
  ["full", "empty"],
  ["safe", "dangerous"], ["secure", "unsafe"], ["safe", "harmful"],
  ["quiet", "noisy"], ["quiet", "loud"], ["silent", "noisy"], ["silent", "loud"],
  ["calm", "stormy"], ["calm", "angry"],
  ["polite", "rude"], ["courteous", "rude"],
  ["patient", "impatient"],
  ["brave", "cowardly"], ["brave", "afraid"], ["courageous", "fearful"],
  ["generous", "stingy"], ["generous", "mean"],
  ["smart", "stupid"], ["intelligent", "stupid"], ["clever", "foolish"], ["wise", "foolish"],
  ["dry", "wet"],
  ["deep", "shallow"],
  ["wide", "narrow"], ["broad", "narrow"],
  ["thick", "thin"], ["fat", "thin"], ["fat", "slim"],
  ["old", "young"], ["old", "new"],
  ["alive", "dead"],
  ["sweet", "sour"], ["sweet", "bitter"],
  ["hard", "soft"],
  ["rough", "smooth"],
  ["sharp", "dull"],
  ["tight", "loose"],
  ["true", "false"], ["true", "fake"], ["right", "wrong"], ["correct", "incorrect"], ["correct", "wrong"],
  ["expensive", "cheap"],
  ["beautiful", "ugly"], ["pretty", "ugly"], ["attractive", "ugly"],
  ["healthy", "sick"], ["healthy", "ill"],
  ["positive", "negative"],
  ["active", "passive"], ["active", "lazy"],
  ["public", "private"],
  ["natural", "artificial"],
  ["innocent", "guilty"],
  ["famous", "unknown"],
  ["interesting", "boring"],
  ["careful", "careless"],
  ["useful", "useless"],
  ["friendly", "unfriendly"], ["friendly", "hostile"],
  ["comfortable", "uncomfortable"],
  ["possible", "impossible"],
  ["equal", "unequal"],
  ["clear", "unclear"], ["clear", "vague"],
  ["common", "rare"], ["common", "uncommon"],
  ["normal", "strange"], ["normal", "abnormal"],
  ["direct", "indirect"],
  ["formal", "informal"],
  ["legal", "illegal"],
  ["regular", "irregular"],
  ["modern", "ancient"], ["modern", "traditional"],
  ["crowded", "empty"],
  ["lucky", "unlucky"], ["fortunate", "unfortunate"],
  ["brave", "timid"], ["confident", "shy"],

  // Verbs
  ["start", "finish"], ["start", "end"], ["start", "stop"],
  ["begin", "finish"], ["begin", "end"], ["begin", "stop"],
  ["open", "close"], ["open", "shut"],
  ["buy", "sell"],
  ["win", "lose"], ["succeed", "fail"], ["pass", "fail"],
  ["love", "hate"], ["like", "dislike"], ["like", "hate"],
  ["push", "pull"],
  ["give", "take"], ["give", "receive"],
  ["send", "receive"],
  ["find", "lose"],
  ["create", "destroy"], ["build", "destroy"], ["make", "destroy"], ["create", "ruin"],
  ["increase", "decrease"], ["increase", "reduce"], ["raise", "lower"],
  ["remember", "forget"],
  ["teach", "learn"],
  ["arrive", "leave"], ["arrive", "depart"], ["enter", "exit"], ["enter", "leave"],
  ["accept", "refuse"], ["accept", "reject"], ["agree", "disagree"],
  ["allow", "forbid"], ["allow", "prevent"], ["permit", "forbid"], ["permit", "prohibit"],
  ["appear", "disappear"],
  ["rise", "fall"], ["rise", "drop"],
  ["come", "go"],
  ["ask", "answer"], ["ask", "reply"],
  ["bring", "take"],
  ["borrow", "lend"],
  ["save", "spend"], ["save", "waste"],
  ["catch", "miss"], ["catch", "drop"],
  ["connect", "disconnect"], ["join", "separate"], ["join", "divide"],
  ["show", "hide"],
  ["protect", "attack"], ["defend", "attack"],
  ["praise", "blame"], ["praise", "criticize"],
  ["reward", "punish"],
  ["lead", "follow"],
  ["stand", "sit"], ["stand", "lie"],
  ["sleep", "wake"],
  ["live", "die"],
  ["laugh", "cry"],
  ["shout", "whisper"],
  ["freeze", "melt"],
  ["lock", "unlock"],
  ["pack", "unpack"],

  // Nouns
  ["friend", "enemy"],
  ["peace", "war"],
  ["success", "failure"],
  ["victory", "defeat"],
  ["day", "night"],
  ["sun", "moon"],
  ["summer", "winter"],
  ["morning", "evening"], ["morning", "night"],
  ["truth", "lie"],
  ["question", "answer"],
  ["beginning", "end"],
  ["arrival", "departure"],
  ["entrance", "exit"],
  ["top", "bottom"],
  ["front", "back"],
  ["advantage", "disadvantage"],
  ["majority", "minority"],
  ["maximum", "minimum"],
  ["profit", "loss"],
  ["strength", "weakness"],
  ["life", "death"],
  ["land", "sea"],
  ["light", "darkness"],
  ["love", "hatred"],
  ["joy", "sorrow"],
  ["teacher", "student"],
  ["doctor", "patient"],
  ["buyer", "seller"],

  // Prepositions & Adverbs
  ["always", "never"],
  ["often", "rarely"], ["often", "seldom"],
  ["inside", "outside"], ["indoor", "outdoor"],
  ["up", "down"],
  ["above", "below"], ["above", "under"], ["over", "under"],
  ["before", "after"],
  ["first", "last"],
  ["left", "right"],
  ["north", "south"],
  ["east", "west"],
  ["together", "alone"],
  ["everywhere", "nowhere"],
  ["everyone", "nobody"], ["everybody", "nobody"],
  ["everything", "nothing"],
  ["more", "less"],
  ["many", "few"], ["much", "little"]
];

/**
 * Curated groups of synonyms targeted directly within the course words.
 * Every word in each group is a synonym of every other word in that group.
 */
const CURATED_SYNONYM_GROUPS: string[][] = [
  // Adjectives
  ["big", "large", "huge", "great", "enormous"],
  ["small", "little", "tiny"],
  ["fast", "quick", "rapid", "swift"],
  ["happy", "glad", "cheerful", "joyful"],
  ["sad", "unhappy", "sorrowful"],
  ["easy", "simple"],
  ["difficult", "hard", "tough", "challenging"],
  ["smart", "intelligent", "clever", "wise", "bright"],
  ["stupid", "foolish", "silly"],
  ["rich", "wealthy"],
  ["poor", "needy"],
  ["beautiful", "pretty", "attractive", "lovely"],
  ["correct", "right", "accurate", "true"],
  ["wrong", "incorrect", "false", "mistaken"],
  ["quiet", "silent", "calm", "peaceful"],
  ["clean", "pure", "tidy"],
  ["dirty", "polluted", "unclean"],
  ["scared", "afraid", "frightened", "fearful"],
  ["brave", "courageous", "bold", "heroic"],
  ["calm", "peaceful", "relaxed"],
  ["angry", "mad", "furious", "annoyed"],
  ["safe", "secure", "protected"],
  ["famous", "popular", "well-known"],
  ["wonderful", "amazing", "fantastic", "marvelous", "great", "awesome"],
  ["strange", "odd", "weird", "unusual"],
  ["funny", "amusing", "humorous"],
  ["near", "close", "nearby"],
  ["far", "distant", "remote"],
  ["kind", "gentle", "considerate"],
  ["cruel", "harsh", "brutal"],
  ["patient", "tolerant"],
  ["honest", "truthful", "sincere", "frank"],
  ["true", "real", "genuine"],
  ["false", "fake", "artificial"],
  ["polite", "courteous", "respectful"],
  ["rude", "impolite"],
  ["modern", "new", "recent"],
  ["ancient", "old", "historic"],
  ["clear", "obvious", "evident", "plain"],
  ["rough", "harsh", "coarse"],
  ["smooth", "even", "flat"],
  ["wet", "damp", "moist"],
  ["crowded", "packed", "busy"],
  ["empty", "vacant", "bare"],
  ["simple", "basic", "plain"],
  ["complex", "complicated"],
  ["strong", "powerful", "mighty"],
  ["weak", "fragile", "delicate"],
  ["delicious", "tasty"],
  ["awful", "terrible", "horrible"],
  ["tired", "exhausted", "weary"],
  ["lucky", "fortunate"],
  ["unlucky", "unfortunate"],

  // Verbs
  ["start", "begin"],
  ["end", "finish", "stop", "close", "conclude"],
  ["buy", "purchase"],
  ["help", "assist", "support"],
  ["make", "create", "produce", "build"],
  ["show", "display", "reveal"],
  ["tell", "inform", "explain"],
  ["speak", "talk", "converse"],
  ["answer", "reply", "respond"],
  ["ask", "inquire", "question"],
  ["choose", "select", "pick"],
  ["gather", "collect", "assemble"],
  ["allow", "permit", "let"],
  ["stop", "halt", "pause"],
  ["continue", "resume", "proceed"],
  ["complete", "finish", "accomplish", "achieve"],
  ["change", "alter", "modify"],
  ["fix", "repair", "mend"],
  ["destroy", "ruin", "damage"],
  ["protect", "defend", "guard"],
  ["join", "connect", "link", "unite"],
  ["divide", "separate", "split"],
  ["hide", "conceal"],
  ["find", "discover", "locate"],
  ["remember", "recall"],
  ["think", "believe", "consider"],
  ["wish", "hope", "desire"],
  ["need", "require"],
  ["try", "attempt"],
  ["win", "succeed"],
  ["give", "provide", "offer", "grant"],
  ["get", "obtain", "receive", "acquire"],
  ["keep", "maintain", "preserve"],
  ["throw", "toss", "cast"],
  ["hold", "grasp", "grip"],
  ["carry", "transport", "bear"],
  ["leave", "depart", "exit", "abandon"],
  ["arrive", "reach"],
  ["enter", "access"],
  ["fall", "drop", "collapse"],
  ["rise", "ascend", "climb"],
  ["shine", "glow", "sparkle"],
  ["burn", "blaze", "ignite"],
  ["break", "smash", "fracture"],
  ["hurt", "harm", "injure", "wound"],
  ["heal", "cure", "recover"],
  ["love", "adore", "cherish"],
  ["hate", "detest", "loathe"],
  ["agree", "concur", "consent"],
  ["refuse", "reject", "decline"],
  ["forbid", "prohibit", "ban"],
  ["praise", "compliment", "commend"],
  ["blame", "fault", "criticize"],
  ["forgive", "pardon", "excuse"],
  ["look", "see", "watch", "observe"],

  // Nouns
  ["danger", "risk", "hazard", "threat"],
  ["chance", "opportunity"],
  ["job", "work", "career", "profession", "occupation"],
  ["teacher", "instructor", "educator", "tutor"],
  ["student", "pupil", "learner"],
  ["doctor", "physician"],
  ["house", "home", "residence"],
  ["car", "automobile", "vehicle"],
  ["path", "road", "way", "street", "route"],
  ["trip", "journey", "tour"],
  ["gift", "present"],
  ["idea", "thought", "concept"],
  ["problem", "issue", "trouble", "difficulty"],
  ["goal", "aim", "target", "purpose", "objective"],
  ["peace", "calm", "tranquility"],
  ["friend", "companion", "pal"],

  // Adverbs / Expressions
  ["always", "constantly", "continually"],
  ["maybe", "perhaps", "possibly"],
  ["certainly", "definitely", "surely"],
  ["important", "essential", "crucial", "vital", "significant"]
];

// Pre-built index maps
const antonymsMap = new Map<string, Set<string>>();
const synonymsMap = new Map<string, Set<string>>();

// 1. Populate Antonyms
for (const [w1, w2] of CURATED_ANTONYM_PAIRS) {
  const k1 = w1.toLowerCase().trim();
  const k2 = w2.toLowerCase().trim();

  // Strict check: only include words that exist in the course database
  if (courseWordsMap.has(k1) && courseWordsMap.has(k2)) {
    if (!antonymsMap.has(k1)) antonymsMap.set(k1, new Set());
    if (!antonymsMap.has(k2)) antonymsMap.set(k2, new Set());

    antonymsMap.get(k1)!.add(k2);
    antonymsMap.get(k2)!.add(k1);
  }
}

// 2. Populate Synonyms
for (const group of CURATED_SYNONYM_GROUPS) {
  const validWords = group
    .map(w => w.toLowerCase().trim())
    .filter(w => courseWordsMap.has(w));

  for (let i = 0; i < validWords.length; i++) {
    const wordA = validWords[i];
    if (!synonymsMap.has(wordA)) synonymsMap.set(wordA, new Set());

    for (let j = 0; j < validWords.length; j++) {
      if (i !== j) {
        synonymsMap.get(wordA)!.add(validWords[j]);
      }
    }
  }
}

/**
 * Retrieves antonyms (مضادات الكلمة) strictly within the course words.
 */
export function getCourseAntonyms(rawWord: string): RelatedCourseWord[] {
  if (!rawWord) return [];
  const normalized = rawWord.toLowerCase().trim();
  const opposites = antonymsMap.get(normalized);
  if (!opposites || opposites.size === 0) return [];

  const results: RelatedCourseWord[] = [];
  for (const opp of opposites) {
    const entry = courseWordsMap.get(opp);
    if (entry) {
      results.push({
        word: entry.word,
        arabic: entry.arabic,
        partOfSpeech: entry.partOfSpeech,
        pronunciation: entry.pronunciation
      });
    }
  }
  return results;
}

/**
 * Retrieves synonyms (مترادفات الكلمة) strictly within the course words.
 */
export function getCourseSynonyms(rawWord: string): RelatedCourseWord[] {
  if (!rawWord) return [];
  const normalized = rawWord.toLowerCase().trim();
  const syns = synonymsMap.get(normalized);
  if (!syns || syns.size === 0) return [];

  const results: RelatedCourseWord[] = [];
  for (const syn of syns) {
    const entry = courseWordsMap.get(syn);
    if (entry) {
      results.push({
        word: entry.word,
        arabic: entry.arabic,
        partOfSpeech: entry.partOfSpeech,
        pronunciation: entry.pronunciation
      });
    }
  }
  return results;
}

/**
 * Formats synonyms and antonyms as clean, accessible Arabic text (strictly no asterisks or markdown clutter).
 */
export function formatThesaurusText(
  synonyms: RelatedCourseWord[],
  antonyms: RelatedCourseWord[]
): string {
  const blocks: string[] = [];

  if (synonyms.length > 0) {
    const synList = synonyms.map(s => `• ${s.word} (${s.arabic})`).join("\n");
    blocks.push(`المترادفات المستهدفة بحدود الدورة:\n${synList}`);
  }

  if (antonyms.length > 0) {
    const antList = antonyms.map(a => `• ${a.word} (${a.arabic})`).join("\n");
    blocks.push(`مضادات الكلمة المستهدفة بحدود الدورة:\n${antList}`);
  }

  if (synonyms.length === 0 && antonyms.length === 0) {
    return "";
  }

  return blocks.join("\n\n");
}
