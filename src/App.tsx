import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CourseMap from "./components/CourseMap";
import WordCard from "./components/WordCard";
import QuizSection from "./components/QuizSection";
import StoryGenerator from "./components/StoryGenerator";
import AITutorChat from "./components/AITutorChat";
import { categories } from "./data/words";
import { Word, Category } from "./types";
import { Sparkles, Flame, Award, HelpCircle, Trophy, BookOpen, HeartHandshake } from "lucide-react";

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("course");
  const [masteredWords, setMasteredWords] = useState<string[]>([]);
  const [xp, setXp] = useState<number>(0);
  const [streak, setStreak] = useState<number>(1);
  
  // Modal / overlay overlays
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);
  const [selectedWordCategory, setSelectedWordCategory] = useState<string>("");
  const [activeQuizCategory, setActiveQuizCategory] = useState<Category | null>(null);

  // Load user progress from LocalStorage
  useEffect(() => {
    const savedMastered = localStorage.getItem("itqan_mastered_words");
    if (savedMastered) {
      try {
        setMasteredWords(JSON.parse(savedMastered));
      } catch (e) {
        console.error("Failed to parse mastered words", e);
      }
    }

    const savedXp = localStorage.getItem("itqan_xp");
    if (savedXp) {
      setXp(parseInt(savedXp, 10) || 0);
    }

    const savedStreak = localStorage.getItem("itqan_streak");
    if (savedStreak) {
      setStreak(parseInt(savedStreak, 10) || 1);
    } else {
      // Set default streak of 1 for first time
      localStorage.setItem("itqan_streak", "1");
    }
  }, []);

  // Save changes to LocalStorage
  const saveMasteredWords = (newWords: string[]) => {
    setMasteredWords(newWords);
    localStorage.setItem("itqan_mastered_words", JSON.stringify(newWords));
  };

  const saveXp = (newXp: number) => {
    setXp(newXp);
    localStorage.setItem("itqan_xp", newXp.toString());
  };

  // Toggle word mastery + award points
  const handleToggleMastery = (wordId: string) => {
    const alreadyMastered = masteredWords.includes(wordId);
    let updated: string[];

    if (alreadyMastered) {
      updated = masteredWords.filter(id => id !== wordId);
      saveXp(Math.max(0, xp - 10)); // Gently retract XP if untoggled
    } else {
      updated = [...masteredWords, wordId];
      saveXp(xp + 10); // Award +10 XP for mastering a card
    }
    saveMasteredWords(updated);
  };

  // Complete a module quiz
  const handleFinishQuiz = (gainedXp: number, correctIds: string[]) => {
    // Award the XP
    saveXp(xp + gainedXp);

    // Register all correctly answered words as mastered
    const newlyMastered = [...masteredWords];
    correctIds.forEach(id => {
      if (!newlyMastered.includes(id)) {
        newlyMastered.push(id);
      }
    });
    saveMasteredWords(newlyMastered);

    // Exit quiz view
    setActiveQuizCategory(null);
  };

  // Helper to directly add XP (for stories, chats etc)
  const handleAwardXp = (gainedXp: number) => {
    saveXp(xp + gainedXp);
  };

  // Reset all course progress
  const handleResetCourse = () => {
    setMasteredWords([]);
    setXp(0);
    setStreak(1);
    setActiveQuizCategory(null);
    setSelectedWord(null);
    localStorage.removeItem("itqan_mastered_words");
    localStorage.setItem("itqan_xp", "0");
    localStorage.setItem("itqan_streak", "1");
    setCurrentTab("course");
  };

  const totalWordsCount = categories.flatMap(c => c.words).length;

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans pb-16 selection:bg-brand-blue/10 selection:text-brand-blue">
      
      {/* Brand Navigation & Statistics Header */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          setActiveQuizCategory(null); // Cancel quiz if they switch tabs
        }}
        masteredCount={masteredWords.length}
        totalWords={totalWordsCount}
        xp={xp}
        streak={streak}
        onResetCourse={handleResetCourse}
      />

      {/* Main Course Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex-1 w-full">
        
        {/* Render category quiz screen if active */}
        {activeQuizCategory ? (
          <div className="py-4">
            <QuizSection
              category={activeQuizCategory}
              allCategories={categories}
              onCancel={() => setActiveQuizCategory(null)}
              onFinishQuiz={handleFinishQuiz}
            />
          </div>
        ) : (
          /* Normal tab presentation */
          <div className="space-y-8">
            
            {/* Banner welcome card only shown on the home Map tab */}
            {currentTab === "course" && (
              <div className="relative overflow-hidden bg-gradient-to-l from-brand-blue to-blue-800 text-white p-8 rounded-3xl shadow-xl shadow-blue-100 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-blue-900/10">
                {/* Floating periwinkle curves mirroring brand PDF guide styling */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 80 C 150 150, 350 20, 450 120" stroke="white" strokeWidth="20" strokeLinecap="round" />
                    <path d="M100 120 C 200 40, 300 180, 400 90" stroke="white" strokeWidth="15" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="space-y-2 z-10">
                  <div className="inline-flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full text-xs font-black tracking-wide border border-white/10">
                    <Sparkles className="w-4 h-4 text-brand-orange fill-brand-orange" />
                    <span>محتوى مخصص لجميع المستويات</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black font-sans leading-tight">
                    أتقن الكلمات الإنجليزية بثقة تامة!
                  </h2>
                  <p className="text-blue-100 text-sm max-w-xl font-medium font-sans">
                    مرحباً بك في دورة إتقان التفاعلية. تعلم الكلمات مقسمة على {categories.length} تصنيفًا موضوعيًا دقيقًا، مدعومة بقصص تفاعلية واختبارات لضمان الفهم الحقيقي.
                  </p>
                </div>

                {/* Performance Highlights Widget */}
                <div className="grid grid-cols-3 gap-3 sm:gap-6 bg-white/10 p-4 rounded-2xl border border-white/10 z-10 shrink-0">
                  <div className="text-center px-1">
                    <span className="block text-2xl font-black text-brand-orange">{masteredWords.length}</span>
                    <span className="text-[10px] font-bold text-blue-200">كلمة متقنة</span>
                  </div>
                  <div className="text-center px-1 border-x border-white/10">
                    <span className="block text-2xl font-black text-white">{totalWordsCount - masteredWords.length}</span>
                    <span className="text-[10px] font-bold text-blue-200">باقي للتعلم</span>
                  </div>
                  <div className="text-center px-1">
                    <span className="block text-2xl font-black text-white">{categories.length}</span>
                    <span className="text-[10px] font-bold text-blue-200">أقسام دراسية</span>
                  </div>
                </div>
              </div>
            )}

            {/* Display active tab */}
            {currentTab === "course" && (
              <CourseMap
                categories={categories}
                masteredWords={masteredWords}
                onSelectWord={(word, catName) => {
                  setSelectedWord(word);
                  setSelectedWordCategory(catName);
                }}
                onStartQuiz={(cat) => setActiveQuizCategory(cat)}
              />
            )}

            {currentTab === "story" && (
              <StoryGenerator
                categories={categories}
                onAwardXp={handleAwardXp}
              />
            )}

            {currentTab === "chat" && (
              <AITutorChat
                onAwardXp={handleAwardXp}
              />
            )}

          </div>
        )}

      </main>

      {/* Persistent overlay Word Explorer Details Card Drawer */}
      {selectedWord && (
        <WordCard
          word={selectedWord}
          categoryName={selectedWordCategory}
          isMastered={masteredWords.includes(selectedWord.id)}
          onToggleMastery={handleToggleMastery}
          onClose={() => setSelectedWord(null)}
        />
      )}

      {/* Footer credits and copyright */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-100 text-center space-y-2">
        <p className="text-xs font-bold text-slate-400 font-sans">
          © {new Date().getFullYear()} إتقان English. جميع الحقوق محفوظة لمتعلمي العربية.
        </p>
        <p className="text-[10px] text-slate-400 font-sans">
          العلامة التجارية إتقان تُعبر عن التميز والتعليم التفاعلي الذكي المبسط.
        </p>
      </footer>

    </div>
  );
}
