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

/**
 * Finds the best available female English voice across various browsers and OS
 * (iOS Safari, macOS Samantha/Victoria/Karen, Windows Zira/Jenny, Android/Chrome Google UK/US Female).
 */
export function getFemaleEnglishVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return null;
  }

  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // Filter for English voices first
  const englishVoices = voices.filter(v => 
    v.lang && (v.lang.startsWith("en-") || v.lang.startsWith("en_") || v.lang.toLowerCase() === "en")
  );

  const candidateVoices = englishVoices.length > 0 ? englishVoices : voices;

  // High priority female voice names across platforms
  const femaleKeywords = [
    "female", "zira", "samantha", "victoria", "karen", "serena", 
    "susan", "jenny", "aria", "ava", "allison", "catherine", 
    "fiona", "moira", "tessa", "veena", "claire", "eva", "stephanie", "linda"
  ];

  // 1. Look for English voices with female keywords in their name
  for (const kw of femaleKeywords) {
    const found = candidateVoices.find(v => v.name.toLowerCase().includes(kw));
    if (found) return found;
  }

  // 2. Look for Google / Microsoft / Apple natural female or generic US/UK female voices
  const googleNatural = candidateVoices.find(v => 
    v.name.toLowerCase().includes("google") && !v.name.toLowerCase().includes("male")
  );
  if (googleNatural) return googleNatural;

  // 3. Fallback to any en-US or en-GB voice
  const defaultEnglish = candidateVoices.find(v => 
    v.lang.startsWith("en-US") || v.lang.startsWith("en-GB")
  );
  if (defaultEnglish) return defaultEnglish;

  return candidateVoices[0] || null;
}

/**
 * Plays English speech using a female voice and optimized natural rate.
 */
export function speakFemaleEnglish(text: string, rate: number = 0.86) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(getSpokenText(text));
  utterance.lang = "en-US";
  utterance.rate = rate;

  const playUtterance = () => {
    const femaleVoice = getFemaleEnglishVoice();
    if (femaleVoice) {
      utterance.voice = femaleVoice;
      // If the selected voice doesn't explicitly have female in name, give a subtle feminine pitch lift
      const name = femaleVoice.name.toLowerCase();
      const hasExplicitFemaleName = [
        "female", "zira", "samantha", "victoria", "karen", "serena", 
        "susan", "jenny", "aria", "ava", "allison", "catherine", 
        "fiona", "moira", "tessa", "veena", "claire", "eva"
      ].some(k => name.includes(k));

      utterance.pitch = hasExplicitFemaleName ? 1.0 : 1.15;
    } else {
      utterance.pitch = 1.15;
    }
    window.speechSynthesis.speak(utterance);
  };

  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) {
    // If voices haven't loaded yet, attach one-time listener or retry
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.onvoiceschanged = null;
      playUtterance();
    };
    // Fallback if event doesn't fire
    setTimeout(() => {
      if (!window.speechSynthesis.speaking) {
        playUtterance();
      }
    }, 120);
  } else {
    playUtterance();
  }
}
