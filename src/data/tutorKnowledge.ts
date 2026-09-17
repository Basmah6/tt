import { categories } from "./words";
import { Word, VerbConjugation, RelatedCourseWord } from "../types";
import { getVerbConjugation, formatVerbConjugationText } from "./verbConjugations";
import { getCourseSynonyms, getCourseAntonyms, formatThesaurusText } from "./courseThesaurus";

/**
 * Normalizes Arabic text to handle spelling variations:
 * - Removes diacritics (tashkeel & tanween): ً ٌ ٍ َ ُ ِ ّ ْ ٰ
 * - Removes tatweel / kashida: ـ
 * - Normalizes alef forms: أ, إ, آ, ٱ, ٵ, ٲ -> ا
 * - Normalizes teh marbuta: ة -> ه
 * - Normalizes alef maksura: ى -> ي
 * - Normalizes hamza carriers: ؤ -> و, ئ -> ي
 * - Replaces punctuation with whitespace
 * Leaves original stored database text untouched and only normalizes queries/comparisons.
 */
export function normalizeArabicText(text: string): string {
  if (!text) return "";
  return text
    .replace(/[\u064B-\u0652\u0670]/g, "")
    .replace(/\u0640/g, "")
    .replace(/[أإآٱٵٲ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/[؟?!\.,؛،:\"'()\[\]{}ـ\\/_\-+=~`^&%$#*<>]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

/**
 * Normalizes English text for exact and resilient matching.
 */
export function normalizeEnglishText(text: string): string {
  if (!text) return "";
  return text
    .trim()
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Maps English part of speech to clean Arabic description.
 * Formatted as plain text without any # or * symbols.
 */
export function formatPartOfSpeech(pos?: string): string {
  if (!pos) return "غير محدد";
  const normalized = pos.trim().toLowerCase();
  const map: Record<string, string> = {
    noun: "اسم (Noun)",
    verb: "فعل (Verb)",
    adj: "صفة (Adjective)",
    adjective: "صفة (Adjective)",
    adv: "ظرف / حال (Adverb)",
    adverb: "ظرف / حال (Adverb)",
    prep: "حرف جر (Preposition)",
    preposition: "حرف جر (Preposition)",
    pronoun: "ضمير (Pronoun)",
    conjunction: "أداة ربط (Conjunction)",
    other: "أداة / أخرى (Other)"
  };
  return map[normalized] || pos;
}

/**
 * Formats a single word educational card cleanly.
 * Includes verb conjugations (if verb) and targeted synonyms/antonyms within course limits.
 * Strictly no # or * symbols.
 */
export function formatWordCard(w: Word, prefixTitle?: string): string {
  const header = prefixTitle || "بطاقة الكلمة:";
  const lines: string[] = [
    header,
    `الكلمة بالإنجليزية: ${w.word}`,
    `المعنى بالعربية: ${w.arabic}`,
    `طريقة النطق: ${w.pronunciation || "غير متوفر"}`,
    `نوع الكلمة: ${formatPartOfSpeech(w.partOfSpeech)}`
  ];

  // 1. Verb conjugations if it is a verb or has conjugations
  const conj = getVerbConjugation(w.word, w.partOfSpeech);
  if (conj) {
    lines.push("");
    lines.push(formatVerbConjugationText(conj));
  }

  // 2. Synonyms and antonyms targeted strictly within the course curriculum
  const syns = getCourseSynonyms(w.word);
  const ants = getCourseAntonyms(w.word);
  if (syns.length > 0 || ants.length > 0) {
    const thesaurusText = formatThesaurusText(syns, ants);
    if (thesaurusText) {
      lines.push("");
      lines.push(thesaurusText);
    }
  }

  // 3. Example Sentence
  lines.push("");
  lines.push("مثال توضيحي:");
  lines.push(w.example);
  lines.push(`الترجمة: ${w.exampleArabic}`);

  return lines.join("\n");
}

// Flatten all project words
const allWordsList: Word[] = categories.flatMap(c => c.words);

/**
 * Extracts the core search term from user questions.
 * Handles patterns like "ما معنى سيارة", "كيف اقول قطة بالانجليزي", "meaning of car",
 * as well as "تصريف write", "ما مضاد happy", "مرادف start".
 */
export function extractSearchTerm(rawInput: string): string {
  let cleaned = rawInput.trim();
  // Remove wrapping quotes
  cleaned = cleaned.replace(/^["'«»“”‘’]+|["'«»“”‘’]+$/g, "").trim();

  // Remove common Arabic inquiry prefixes
  cleaned = cleaned.replace(
    /^(ما هو معنى كلمة|ما هي كلمة|ما معنى كلمة|ما معنى|ما معني كلمة|ما معني|معنى كلمة|معنى|معني كلمة|معني|ماذا تعني كلمة|ماذا تعني|كيف اقول كلمة|كيف اقول|كيف أقول كلمة|كيف أقول|كيف نقول كلمة|كيف نقول|كيف اكتب|كيف أكتب|شرح كلمة|شرح|ترجمة كلمة|ترجمة|بحث عن كلمة|بحث عن|اريد كلمة|أريد كلمة|ما هو تصريف الفعل|ما تصريف الفعل|ما هو تصريف كلمة|ما هو تصريف|ما تصريف كلمة|ما تصريف|تصريف الفعل|تصريف كلمة|تصريف|ما هو مضاد كلمة|ما هو مضاد|ما مضاد كلمة|ما مضاد|مضاد كلمة|مضاد|عكس كلمة|عكس|ما هو عكس كلمة|ما هو عكس|ما عكس كلمة|ما عكس|مرادف كلمة|مرادف|مرادفات كلمة|مرادفات|ما هو مرادف كلمة|ما هو مرادف|ما مرادف كلمة|ما مرادف|مترادفات كلمة|مترادفات)\s+/i,
    ""
  );

  // Remove common Arabic inquiry suffixes
  cleaned = cleaned.replace(
    /\s+(بالانجليزي|بالانجليزية|بالإنجليزي|بالإنجليزية|باللغة الانجليزية|باللغة الإنجليزية|في الانجليزي|في الإنجليزي|بالعربي|بالعربية)$/i,
    ""
  );

  // Remove common English inquiry prefixes
  cleaned = cleaned.replace(
    /^(what is the meaning of|what does|meaning of|definition of|how do you say|how to say|how do i say|translate|conjugation of|conjugate|antonym of|opposite of|synonym of|synonyms of)\s+/i,
    ""
  );

  // Remove common English inquiry suffixes
  cleaned = cleaned.replace(/\s+(mean|in english|in arabic|conjugation|antonym|opposite|synonym|synonyms)$/i, "");

  return cleaned.trim();
}

/**
 * Searches the local database for a word in Arabic or English.
 * Prioritizes:
 * 1. Exact English match
 * 2. Exact Arabic match (against full text or slash-divided components, e.g. "طبيب / دكتور")
 * 3. Starts-with or Substring match
 */
export function findWordInLocalData(query: string): Word | null {
  const term = extractSearchTerm(query);
  if (!term) return null;

  const normEn = normalizeEnglishText(term);
  const normAr = normalizeArabicText(term);

  // 1. Exact English match
  if (normEn.length > 0) {
    const exactEn = allWordsList.find(w => normalizeEnglishText(w.word) === normEn);
    if (exactEn) return exactEn;
  }

  // 2. Exact Arabic match
  if (normAr.length > 0) {
    const exactAr = allWordsList.find(w => {
      const fullNorm = normalizeArabicText(w.arabic);
      if (fullNorm === normAr) return true;
      const parts = w.arabic.split(/[\/،,]+/).map(p => normalizeArabicText(p.trim()));
      return parts.includes(normAr);
    });
    if (exactAr) return exactAr;
  }

  // 3. Match against words starting with or containing the query
  if (normEn.length >= 2) {
    const wordEn = allWordsList.find(w => {
      const wEn = normalizeEnglishText(w.word);
      return wEn.startsWith(normEn) || normEn.startsWith(wEn);
    });
    if (wordEn) return wordEn;
  }

  if (normAr.length >= 2) {
    const wordAr = allWordsList.find(w => {
      const wAr = normalizeArabicText(w.arabic);
      if (wAr.includes(normAr)) return true;
      const parts = w.arabic.split(/[\/،,]+/).map(p => normalizeArabicText(p.trim()));
      return parts.some(p => p.includes(normAr) || normAr.includes(p));
    });
    if (wordAr) return wordAr;
  }

  return null;
}

/**
 * Pre-built local response for: "كيف اقول سعيد وحزين بالانجليزي؟"
 * Uses exact words from the local database. Strictly no # or * symbols.
 */
function handleHappyAndSad(): string {
  const happyWord = allWordsList.find(w => w.word.toLowerCase() === "happy");
  const sadWord = allWordsList.find(w => w.word.toLowerCase() === "sad");

  const happyLines = happyWord
    ? [
        "1. كلمة سعيد:",
        `الكلمة بالإنجليزية: ${happyWord.word}`,
        `المعنى بالعربية: ${happyWord.arabic}`,
        `طريقة النطق: ${happyWord.pronunciation}`,
        `نوع الكلمة: ${formatPartOfSpeech(happyWord.partOfSpeech)}`,
        `مثال توضيحي: ${happyWord.example}`,
        `الترجمة: ${happyWord.exampleArabic}`
      ].join("\n")
    : "Happy: سعيد";

  const sadLines = sadWord
    ? [
        "2. كلمة حزين:",
        `الكلمة بالإنجليزية: ${sadWord.word}`,
        `المعنى بالعربية: ${sadWord.arabic}`,
        `طريقة النطق: ${sadWord.pronunciation}`,
        `نوع الكلمة: ${formatPartOfSpeech(sadWord.partOfSpeech)}`,
        `مثال توضيحي: ${sadWord.example}`,
        `الترجمة: ${sadWord.exampleArabic}`
      ].join("\n")
    : "Sad: حزين";

  return [
    "إليك كيفية قول سعيد وحزين باللغة الإنجليزية من بيانات الدورة:",
    "",
    happyLines,
    "",
    sadLines
  ].join("\n");
}

/**
 * Pre-built local response for: "علمني 3 كلمات جديدة في مستوى A1"
 * Uses exact words from the local database. Strictly no # or * symbols.
 */
function handleTeach3Words(): string {
  const targetWords = ["Book", "Water", "Friend"];
  const matched = targetWords
    .map(name => allWordsList.find(w => w.word.toLowerCase() === name.toLowerCase()))
    .filter((w): w is Word => !!w);

  const wordsToShow = matched.length === 3 ? matched : allWordsList.slice(0, 3);

  const entries = wordsToShow.map((w, index) => {
    const titles = ["الكلمة الأولى", "الكلمة الثانية", "الكلمة الثالثة"];
    return [
      `${index + 1}. ${titles[index] || "كلمة"}: ${w.word}`,
      `المعنى بالعربية: ${w.arabic}`,
      `طريقة النطق: ${w.pronunciation || "غير متوفر"}`,
      `نوع الكلمة: ${formatPartOfSpeech(w.partOfSpeech)}`,
      `مثال توضيحي: ${w.example}`,
      `الترجمة: ${w.exampleArabic}`
    ].join("\n");
  });

  return [
    "إليك 3 كلمات جديدة وأساسية في مستوى A1 من بيانات الدورة:",
    "",
    entries.join("\n\n")
  ].join("\n");
}

/**
 * Pre-built local response for: "اعطني نصيحة ذهبية لحفظ كلمات الانجليزية بسهولة"
 * Strictly no # or * symbols.
 */
function handleGoldenAdvice(): string {
  return [
    "إليك النصائح الذهبية لحفظ كلمات اللغة الإنجليزية بسهولة وتثبيتها في الذاكرة:",
    "",
    "1. احفظ الكلمة داخل جملة وسياق كامل:",
    "تجنب حفظ الكلمات كقوائم معزولة، بل ضع كل كلمة في جملة عملية مثل: I drink water every morning. السياق يربط المعنى بالاستخدام الواقعي ويسهل استرجاعه.",
    "",
    "2. النطق الصوتي بصوت مسموع:",
    "انطق الكلمة بصوت واضح عدة مرات واستمع لنطقها الصحيح، فالنطق يحرك الذاكرة السمعية والنطقية ويثبت الكلمة بنسبة أكبر بكثير من الحفظ الصامت.",
    "",
    "3. المراجعة بنظام التكرار المتباعد:",
    "راجع الكلمات الجديدة في اليوم التالي، ثم بعد ثلاثة أيام، ثم بعد أسبوع، فهذا النمط ينقل الكلمات من الذاكرة المؤقتة إلى الذاكرة الدائمة.",
    "",
    "4. الاستخدام اليومي الفوري:",
    "اكتب جملة من واقعك باستخدام الكلمة الجديدة في نفس اليوم، أو حاول تذكرها وتكرارها كلما صادفت الشيء الذي تعبر عنه."
  ].join("\n");
}

export interface TutorResponseData {
  text: string;
  matchedWord?: Word;
  conjugation?: VerbConjugation | null;
  synonyms?: RelatedCourseWord[];
  antonyms?: RelatedCourseWord[];
}

/**
 * Main query router with structured return data.
 */
export function getLocalTutorResponseWithData(userMessage: string): TutorResponseData {
  if (!userMessage || userMessage.trim() === "") {
    return {
      text: "يرجى كتابة كلمة أو سؤال تعليمي للبدء."
    };
  }

  const rawTrimmed = userMessage.trim();
  const lowerText = rawTrimmed.toLowerCase();
  const normAr = normalizeArabicText(rawTrimmed);

  // 1. Pre-built query: "كيف اقول سعيد وحزين بالانجليزي؟"
  const isHappySadRequest =
    (normAr.includes("سعيد") && normAr.includes("حزين")) ||
    (lowerText.includes("happy") && lowerText.includes("sad"));
  if (isHappySadRequest) {
    return { text: handleHappyAndSad() };
  }

  // 2. Pre-built query: "علمني 3 كلمات جديدة في مستوى A1"
  const isTeachWordsRequest =
    normAr.includes("علمني") ||
    normAr.includes("كلمات جديده") ||
    normAr.includes("3 كلمات") ||
    normAr.includes("ثلاث كلمات") ||
    /teach.*words/i.test(lowerText) ||
    /words.*a1/i.test(lowerText);
  if (isTeachWordsRequest) {
    return { text: handleTeach3Words() };
  }

  // 3. Common request: "اعطني نصيحة ذهبية لحفظ كلمات الانجليزية بسهولة"
  const isAdviceRequest =
    normAr.includes("نصيحه") ||
    normAr.includes("نصائح") ||
    normAr.includes("كيف احفظ") ||
    normAr.includes("طريقه حفظ") ||
    normAr.includes("طريقه الحفظ") ||
    normAr.includes("حفظ الكلمات") ||
    /advice|memorize|tips/i.test(lowerText);
  if (isAdviceRequest) {
    return { text: handleGoldenAdvice() };
  }

  // 4. "من أنت" / Who are you
  if (/(من انت|ماذا تفعل|عرفني بنفسك)/i.test(normAr) || /who are you/i.test(lowerText)) {
    return {
      text: [
        "أنا معلم إتقان التعليمي المحلي.",
        "مهمتي هي مساعدتك على استعراض وفهم مفردات دورة إتقان (3000 كلمة).",
        "يمكنك كتابة أي كلمة بالعربية أو الإنجليزية لمعرفة معناها ونطقها ونوعها وتصريفها (للأفعال) ومترادفاتها ومضاداتها ضمن الدورة ومثال عملي مترجم عليها."
      ].join("\n")
    };
  }

  // 5. Formal greetings like "السلام عليكم"
  if (normAr.startsWith("السلام عليكم")) {
    return {
      text: [
        "وعليكم السلام ورحمة الله وبركاته.",
        "أهلاً بك في معلم إتقان المحلي.",
        "اكتب أي كلمة بالعربية أو الإنجليزية وسأعرض لك بطاقتها التعليمية الكاملة مع النطق والنوع وتصريف الأفعال والمترادفات والمضادات والمثال المترجم."
      ].join("\n")
    };
  }

  // Specific Intent A: Verb Conjugation query ("تصريف write", "تصريف الفعل يكتب", "conjugation of go")
  const isConjugationQuery = /تصريف|conjugat/i.test(rawTrimmed);
  if (isConjugationQuery) {
    const term = extractSearchTerm(rawTrimmed);
    const matched = findWordInLocalData(term) || findWordInLocalData(rawTrimmed);
    const baseWord = matched ? matched.word : term;
    const conj = getVerbConjugation(baseWord, matched?.partOfSpeech);
    if (conj) {
      const lines = [
        `تصريف الفعل (${conj.base}):`,
        formatVerbConjugationText(conj)
      ];
      if (matched) {
        lines.push("");
        lines.push(`المعنى بالعربية: ${matched.arabic}`);
        lines.push("مثال في سياق:");
        lines.push(matched.example);
        lines.push(`الترجمة: ${matched.exampleArabic}`);
      }
      return {
        text: lines.join("\n"),
        matchedWord: matched || undefined,
        conjugation: conj
      };
    }
  }

  // Specific Intent B: Antonyms query ("مضاد happy", "عكس كبير", "antonym of cold")
  const isAntonymQuery = /مضاد|عكس|antonym|opposite/i.test(rawTrimmed);
  if (isAntonymQuery) {
    const term = extractSearchTerm(rawTrimmed);
    const matched = findWordInLocalData(term) || findWordInLocalData(rawTrimmed);
    if (matched) {
      const ants = getCourseAntonyms(matched.word);
      const lines = [
        `مضادات كلمة (${matched.word} - ${matched.arabic}) المستهدفة بحدود الدورة:`
      ];
      if (ants.length > 0) {
        ants.forEach((a, idx) => {
          lines.push(`${idx + 1}. ${a.word} (${a.arabic})`);
        });
      } else {
        lines.push("لا توجد مضادات مباشرة مسجلة لهذه الكلمة ضمن قائمة الـ 3000 كلمة في الدورة.");
      }
      return {
        text: lines.join("\n"),
        matchedWord: matched,
        antonyms: ants
      };
    }
  }

  // Specific Intent C: Synonyms query ("مرادف start", "مرادفات كلمة كبير", "synonym of big")
  const isSynonymQuery = /مرادف|مترادف|synonym/i.test(rawTrimmed);
  if (isSynonymQuery) {
    const term = extractSearchTerm(rawTrimmed);
    const matched = findWordInLocalData(term) || findWordInLocalData(rawTrimmed);
    if (matched) {
      const syns = getCourseSynonyms(matched.word);
      const lines = [
        `مترادفات كلمة (${matched.word} - ${matched.arabic}) المستهدفة بحدود الدورة:`
      ];
      if (syns.length > 0) {
        syns.forEach((s, idx) => {
          lines.push(`${idx + 1}. ${s.word} (${s.arabic})`);
        });
      } else {
        lines.push("لا توجد مترادفات مباشرة مسجلة لهذه الكلمة ضمن قائمة الـ 3000 كلمة في الدورة.");
      }
      return {
        text: lines.join("\n"),
        matchedWord: matched,
        synonyms: syns
      };
    }
  }

  // 6. Local dictionary word search (handles English, Arabic, and all spelling variations)
  const matchedWord = findWordInLocalData(userMessage);
  if (matchedWord) {
    const conj = getVerbConjugation(matchedWord.word, matchedWord.partOfSpeech);
    const syns = getCourseSynonyms(matchedWord.word);
    const ants = getCourseAntonyms(matchedWord.word);
    return {
      text: formatWordCard(matchedWord),
      matchedWord,
      conjugation: conj,
      synonyms: syns,
      antonyms: ants
    };
  }

  // 7. Clean fallback without any # or * symbols
  return {
    text: [
      "لم يتم العثور على كلمة تطابق هذا البحث في قاعدة بيانات الدورة المحلية (3000 كلمة).",
      "",
      "يمكنك تجربة الآتي:",
      "1. كتابة أي كلمة بالعربية أو الإنجليزية للبحث عنها مباشرة (مثل: سيارة، شاحن، ماء، Book، Car، Charger).",
      "2. طلب تصريف أي فعل: تصريف الفعل write أو تصريف go",
      "3. طلب المضادات أو المترادفات: ما مضاد happy أو مرادف start",
      "4. طلب: علمني 3 كلمات جديدة في مستوى A1",
      "5. طلب: كيف اقول سعيد وحزين بالانجليزي؟",
      "6. طلب: اعطني نصيحة ذهبية لحفظ كلمات الانجليزية بسهولة"
    ].join("\n")
  };
}

/**
 * Backwards-compatible function returning pure string response.
 */
export function getLocalTutorResponse(userMessage: string): string {
  return getLocalTutorResponseWithData(userMessage).text;
}
