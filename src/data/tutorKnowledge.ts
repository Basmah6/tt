import { categories } from "./words";
import { Word } from "../types";

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
 * Strictly no # or * symbols.
 */
export function formatWordCard(w: Word, prefixTitle?: string): string {
  const header = prefixTitle || "بطاقة الكلمة:";
  const lines: string[] = [
    header,
    `الكلمة بالإنجليزية: ${w.word}`,
    `المعنى بالعربية: ${w.arabic}`,
    `طريقة النطق: ${w.pronunciation || "غير متوفر"}`,
    `نوع الكلمة: ${formatPartOfSpeech(w.partOfSpeech)}`,
    "",
    "مثال توضيحي:",
    w.example,
    `الترجمة: ${w.exampleArabic}`
  ];
  return lines.join("\n");
}

// Flatten all project words
const allWordsList: Word[] = categories.flatMap(c => c.words);

/**
 * Extracts the core search term from user questions.
 * Handles patterns like "ما معنى سيارة", "كيف اقول قطة بالانجليزي", "meaning of car"
 */
function extractSearchTerm(rawInput: string): string {
  let cleaned = rawInput.trim();
  // Remove wrapping quotes
  cleaned = cleaned.replace(/^["'«»“”‘’]+|["'«»“”‘’]+$/g, "").trim();

  // Remove common Arabic inquiry prefixes
  cleaned = cleaned.replace(
    /^(ما هو معنى كلمة|ما هي كلمة|ما معنى كلمة|ما معنى|ما معني كلمة|ما معني|معنى كلمة|معنى|معني كلمة|معني|ماذا تعني كلمة|ماذا تعني|كيف اقول كلمة|كيف اقول|كيف أقول كلمة|كيف أقول|كيف نقول كلمة|كيف نقول|كيف اكتب|كيف أكتب|شرح كلمة|شرح|ترجمة كلمة|ترجمة|بحث عن كلمة|بحث عن|اريد كلمة|أريد كلمة)\s+/i,
    ""
  );

  // Remove common Arabic inquiry suffixes
  cleaned = cleaned.replace(
    /\s+(بالانجليزي|بالانجليزية|بالإنجليزي|بالإنجليزية|باللغة الانجليزية|باللغة الإنجليزية|في الانجليزي|في الإنجليزي|بالعربي|بالعربية)$/i,
    ""
  );

  // Remove common English inquiry prefixes
  cleaned = cleaned.replace(
    /^(what is the meaning of|what does|meaning of|definition of|how do you say|how to say|how do i say|translate)\s+/i,
    ""
  );

  // Remove common English inquiry suffixes
  cleaned = cleaned.replace(/\s+(mean|in english|in arabic)$/i, "");

  return cleaned.trim();
}

/**
 * Searches the local database for a word in Arabic or English.
 * Prioritizes:
 * 1. Exact English match
 * 2. Exact Arabic match (against full text or slash-divided components, e.g. "طبيب / دكتور")
 * 3. Starts-with or Substring match
 */
function findWordInLocalData(query: string): Word | null {
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

/**
 * 100% Local Tutor Response Generator.
 * Completely offline, zero AI, zero API, zero network requests.
 * All output strings are strictly plain text without any # or * symbols.
 */
export function getLocalTutorResponse(userMessage: string): string {
  const trimmed = userMessage.trim();
  const lowerText = trimmed.toLowerCase();
  const normAr = normalizeArabicText(trimmed);

  // 1. Common request: "كيف اقول سعيد وحزين بالانجليزي؟"
  const isHappySadRequest =
    (normAr.includes("سعيد") && normAr.includes("حزين")) ||
    (lowerText.includes("happy") && lowerText.includes("sad"));
  if (isHappySadRequest) {
    return handleHappyAndSad();
  }

  // 2. Common request: "علمني 3 كلمات جديدة في مستوى A1"
  const isTeachWordsRequest =
    normAr.includes("علمني") ||
    normAr.includes("كلمات جديده") ||
    normAr.includes("3 كلمات") ||
    normAr.includes("ثلاث كلمات") ||
    /teach.*words/i.test(lowerText) ||
    /words.*a1/i.test(lowerText);
  if (isTeachWordsRequest) {
    return handleTeach3Words();
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
    return handleGoldenAdvice();
  }

  // 4. "من أنت" / Who are you
  if (/(من انت|ماذا تفعل|عرفني بنفسك)/i.test(normAr) || /who are you/i.test(lowerText)) {
    return [
      "أنا معلم إتقان التعليمي المحلي.",
      "مهمتي هي مساعدتك على استعراض وفهم مفردات دورة إتقان (3000 كلمة).",
      "يمكنك كتابة أي كلمة بالعربية أو الإنجليزية لمعرفة معناها ونطقها ونوعها ومثال عملي مترجم عليها، أو طلب نصائح للحفظ وكلمات جديدة."
    ].join("\n");
  }

  // 5. Formal greetings like "السلام عليكم"
  if (normAr.startsWith("السلام عليكم")) {
    return [
      "وعليكم السلام ورحمة الله وبركاته.",
      "أهلاً بك في معلم إتقان المحلي.",
      "اكتب أي كلمة بالعربية أو الإنجليزية وسأعرض لك بطاقتها التعليمية الكاملة مع النطق والنوع والمثال المترجم."
    ].join("\n");
  }

  // 6. Local dictionary word search (handles English, Arabic, and all spelling variations)
  const matchedWord = findWordInLocalData(userMessage);
  if (matchedWord) {
    return formatWordCard(matchedWord);
  }

  // 7. Clean fallback without any # or * symbols
  return [
    "لم يتم العثور على كلمة تطابق هذا البحث في قاعدة بيانات الدورة المحلية (3000 كلمة).",
    "",
    "يمكنك تجربة الآتي:",
    "1. كتابة أي كلمة بالعربية أو الإنجليزية للبحث عنها مباشرة (مثل: سيارة، شاحن، ماء، Book، Car، Charger).",
    "2. طلب: علمني 3 كلمات جديدة في مستوى A1",
    "3. طلب: كيف اقول سعيد وحزين بالانجليزي؟",
    "4. طلب: اعطني نصيحة ذهبية لحفظ كلمات الانجليزية بسهولة"
  ].join("\n");
}
