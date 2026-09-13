export interface Word {
  id: string;
  word: string;
  arabic: string;
  pronunciation: string;
  partOfSpeech: 'noun' | 'verb' | 'adj' | 'adv' | 'pronoun' | 'prep' | 'other';
  example: string;
  exampleArabic: string;
}

export interface Category {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  icon: string;
  words: Word[];
}

export interface AIExplanation {
  word: string;
  pronunciationGuide: string;
  detailedMeanings: string[];
  mnemonic: string;
  funFact: string;
  examples: Array<{
    english: string;
    arabic: string;
    tips: string;
  }>;
}

export interface AIStory {
  title: string;
  titleArabic: string;
  storyEnglish: string;
  storyArabic: string;
  questions: Array<{
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
  }>;
}

export interface SingleWordStory {
  word: Word;
  title: string;
  titleArabic: string;
  storyEnglish: string;
  storyArabic: string;
  question: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
  };
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
