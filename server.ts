import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Initialize GoogleGenAI server-side with robust header metadata
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

app.use(express.json());

// JSON cleaning utility to protect against model codeblock wrapping
function cleanJsonResponse(text: string): string {
  let cleaned = text.trim();
  if (cleaned.startsWith("```json")) {
    cleaned = cleaned.substring(7);
  } else if (cleaned.startsWith("```")) {
    cleaned = cleaned.substring(3);
  }
  if (cleaned.endsWith("```")) {
    cleaned = cleaned.substring(0, cleaned.length - 3);
  }
  return cleaned.trim();
}

// Helper to perform robust calls to Google Gemini with automatic fallback
async function generateContentWithFallback(params: {
  contents: any;
  config?: any;
}) {
  const models = ["gemini-3.7-flash", "gemini-3.5-flash", "gemini-3.1-flash-lite"];
  let lastError: any = null;

  for (const model of models) {
    try {
      console.log(`[Gemini] Attempting generateContent with model: ${model}`);
      const response = await ai.models.generateContent({
        model,
        contents: params.contents,
        config: params.config,
      });
      console.log(`[Gemini] Successfully generated content using model: ${model}`);
      return response;
    } catch (error: any) {
      console.error(`[Gemini] Error with model ${model}:`, error.message || error);
      lastError = error;
    }
  }
  throw lastError;
}

// API: Explain Word with mnemonic device, sound guide and A1 examples
app.post("/api/tutor/explain", async (req, res) => {
  const { word, category } = req.body;
  if (!word) {
    return res.status(400).json({ error: "Missing word parameter" });
  }

  try {
    const prompt = `You are an expert bilingual English-Arabic teacher on the 'إتقان English' platform, dedicated to helping native Arabic speakers learn A1 level vocabulary.

Please provide a structured vocabulary guide for the word: "${word}" (Category: ${category || 'General'}).

The response must be a single JSON object. DO NOT wrap it in markdown code blocks.
Response JSON structure:
{
  "word": "${word}",
  "pronunciationGuide": "How to pronounce this word, using easy Arabic sounds and spelling tips (مثال: تُنطق مثل...)",
  "detailedMeanings": ["Arabic meaning 1", "Arabic meaning 2"],
  "mnemonic": "A memorable mnemonic device (رابط ذهني للحفظ السريع باللغة العربية) to help Arabic speakers recall this word easily",
  "funFact": "A short, engaging linguistic tip or fun fact about how this word is used (in easy Arabic)",
  "examples": [
    {
      "english": "A very simple English sentence matching A1 level",
      "arabic": "ترجمة الجملة إلى لغة عربية فصيحة ومفهومة",
      "tips": "ملاحظة سريعة حول تركيب الجملة أو حرف الجر المستخدم"
    },
    {
      "english": "Another basic A1 English sentence using the word",
      "arabic": "الترجمة العربية",
      "tips": "ملاحظة سريعة"
    }
  ]
}`;

    const response = await generateContentWithFallback({
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const rawText = response.text || "{}";
    const cleanedText = cleanJsonResponse(rawText);
    const data = JSON.parse(cleanedText);
    res.json(data);
  } catch (error: any) {
    console.error("Explain error:", error);
    res.status(500).json({ error: "فشل الاتصال بمعلم إتقان الذكي. الرجاء المحاولة مرة أخرى." });
  }
});

// API: Generate customized natural short reading story vignettes matching selected words
app.post("/api/tutor/story", async (req, res) => {
  const { words } = req.body;
  if (!words || !Array.isArray(words) || words.length === 0) {
    return res.status(400).json({ error: "Missing words list" });
  }

  // Format words descriptions for the prompt
  const wordDescriptions = words.map(w => {
    if (typeof w === "string") return w;
    return `"${w.word}" (Meaning: ${w.arabic || ""}, Part of Speech: ${w.partOfSpeech || "word"})`;
  }).join(", ");

  try {
    const prompt = `You are a master storyteller and bilingual English-Arabic author.
Your goal is to write realistic, immersive, and natural mini-stories (vignettes) for native Arabic learners of English.

The user selected the following words: ${wordDescriptions}.

FOR EACH WORD in the list, write ONE COMPLETELY INDEPENDENT, REALISTIC MINI-STORY (40-65 words) that seamlessly features that target word.

CRITICAL QUALITY STANDARDS:
1. ABSOLUTE BAN ON META-LANGUAGE:
   - NEVER write phrases like "he uses his key words", "his target words are", "the important words are", "he practices the words", "she learns the word", "this helps him practice English", or ANY hint that this is an exercise.
   - The characters must be living real lives (at a party, asking for directions on the street, meeting a friend, at a café, shopping at a market, at school, traveling, with family, etc.).
   - The target word must appear completely naturally as part of the action, description, or authentic dialogue.

2. GRAMMATICAL ACCURACY & PART OF SPEECH:
   - If the word is a greeting or interjection (e.g. Bye, Hello, Excuse me, Please, Sorry, Ah), have a character say it naturally in dialogue.
   - If it's a verb (e.g. Walk, Buy, Eat, Look), use it as a natural action.
   - If it's a noun (e.g. Museum, Book, Coffee, Dog), make it an object, person, or place central to the scene.
   - If it's an adjective (e.g. Happy, Big, Quiet), use it naturally in describing the scene or emotions.

3. BENCHMARK EXAMPLE FROM OUR CURRICULUM:
   Example 1 for word "Bye":
   Title: "End of the Party" / "نهاية الحفلة"
   English Story: "The party was ending, and guests were starting to walk toward the exit. \\"Bye, it was a fantastic evening!\\" said a friend while waving at the host. The host smiled and replied with a warm goodbye. Everyone left the house feeling happy about the fun event."
   Arabic Story: "كانت الحفلة توشك على الانتهاء، وبدأ الضيوف في السير نحو المخرج. قال أحد الأصدقاء وهو يلوح للمضيف: \\"وداعاً، كانت أمسية رائعة!\\" ابتسم المضيف ورد بوداع دافئ. غادر الجميع المنزل وهم يشعرون بالسعادة بشأن هذا الحدث الممتع."

   Example 2 for word "Excuse" (Excuse me):
   Title: "Finding the Museum" / "البحث عن المتحف"
   English Story: "A tourist stood on the sidewalk, looking at a map of the city. He walked toward a shopkeeper and asked, \\"Excuse me, where is the nearest museum?\\" The shopkeeper pointed down the street to a large building. The tourist thanked him and walked toward the museum."
   Arabic Story: "وقف سائح على الرصيف، ينظر إلى خريطة المدينة. سار باتجاه صاحب متجر وسأل: \\"عفواً، أين أقرب متحف؟\\" أشار صاحب المتجر أسفل الشارع إلى مبنى كبير. شكره السائح وسار باتجاه المتحف."

4. COMPREHENSION QUESTION:
   - Must be a real reading comprehension question testing understanding of the story's events, characters, or dialogue (e.g., "Where did the tourist want to go?" or "What did the friend say as he waved to the host?").
   - Provide 4 clear options in English, with answerIndex (0-3), and an Arabic explanation explaining the correct answer based on the story.

5. PURE ENGLISH STORY:
   - Do NOT insert Arabic translations inline inside the English story (do not write "bye (وداعا)"). Keep the English story clean and natural.

Return ONLY a single valid JSON object in this exact schema:
{
  "stories": [
    {
      "word": "target word in English (e.g. Bye)",
      "title": "Short Catchy English Title (e.g. End of the Party)",
      "titleArabic": "عنوان القصة بالعربية (مثال: نهاية الحفلة)",
      "storyEnglish": "Natural English story text with the word embedded seamlessly.",
      "storyArabic": "ترجمة عربية أدبية وفصيحة ودقيقة لأحداث القصة وحواراتها.",
      "question": {
        "question": "A simple English comprehension question about the plot?",
        "options": ["Correct option", "Distractor 1", "Distractor 2", "Distractor 3"],
        "answerIndex": 0,
        "explanation": "شرح الإجابة الصحيحة باللغة العربية بناءً على ما حدث في القصة."
      }
    }
  ]
}`;

    const response = await generateContentWithFallback({
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.7,
      },
    });

    const rawText = response.text || "{}";
    const cleanedText = cleanJsonResponse(rawText);
    const data = JSON.parse(cleanedText);
    res.json(data);
  } catch (error: any) {
    console.error("Story error:", error);
    res.status(500).json({ error: "فشل توليد قصص إتقان التعليمية. الرجاء المحاولة مرة أخرى." });
  }
});

// API: Direct Arabic-First Conversation AI Tutor
app.post("/api/tutor/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Missing messages" });
  }

  try {
    const systemInstruction = `You are 'معلم إتقان الذكي' (Itqan English AI Tutor), an encouraging bilingual English teacher helping Arab students practice the A1 level English vocabulary they are studying.
- Keep your tone highly professional, motivating, warm, and structured.
- Use simple Arabic first to make the user feel at ease.
- Keep your English vocabulary and sentences strictly beginner-friendly (A1).
- Gently point out any spelling or grammar mistakes in the user's English, and provide the correct form with a gentle Arabic explanation.
- Keep your answers relatively short so they are easy to read (max 2 paragraphs).`;

    const formattedMessages = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    // Inject system instructions into the conversational flow
    const response = await generateContentWithFallback({
      contents: [
        { role: "user", parts: [{ text: systemInstruction }] },
        { role: "model", parts: [{ text: "أهلاً بك في منصة إتقان! أنا معلمك الذكي لتدريب وتطوير كلمات اللغة الإنجليزية لمستوى A1. كيف يمكنني مساعدتك اليوم؟" }] },
        ...formattedMessages
      ],
    });

    res.json({ content: response.text || "عذراً، لم أستطع توليد رد مناسب حالياً." });
  } catch (error: any) {
    console.error("Chat error:", error);
    res.status(500).json({ error: "فشل إرسال الرسالة إلى المعلم الذكي. الرجاء المحاولة مرة أخرى." });
  }
});

// Start Full-Stack App
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
