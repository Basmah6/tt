import React, { useState, useEffect, useMemo } from "react";
import { 
  X, Volume2, Sparkles, CheckCircle, HelpCircle, 
  Lightbulb, ArrowRightLeft, BookOpen, AlertCircle, Info,
  Split, GitCommit, Layers
} from "lucide-react";
import { Word, AIExplanation } from "../types";
import { getLocalWordExplanation } from "../data/wordExplanations";
import { getSpokenText, speakFemaleEnglish } from "../utils/speechUtils";
import { getVerbConjugation } from "../data/verbConjugations";
import { getCourseSynonyms, getCourseAntonyms } from "../data/courseThesaurus";

interface WordCardProps {
  word: Word;
  categoryName: string;
  isMastered: boolean;
  onToggleMastery: (wordId: string) => void;
  onClose: () => void;
}

export default function WordCard({
  word,
  categoryName,
  isMastered,
  onToggleMastery,
  onClose,
}: WordCardProps) {
  const [aiExplanation, setAiExplanation] = useState<AIExplanation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [speechSupported, setSpeechSupported] = useState(true);

  // Memoized Verb Conjugations & Course Synonyms/Antonyms
  const conjugation = useMemo(
    () => getVerbConjugation(word.word, word.partOfSpeech),
    [word.word, word.partOfSpeech]
  );
  const synonyms = useMemo(() => getCourseSynonyms(word.word), [word.word]);
  const antonyms = useMemo(() => getCourseAntonyms(word.word), [word.word]);

  const speakText = (text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    speakFemaleEnglish(text, 0.85);
  };

  // Check if browser SpeechSynthesis is available
  useEffect(() => {
    if (!window.speechSynthesis) {
      setSpeechSupported(false);
    }
    // Clean any prior explanation when word changes
    setAiExplanation(null);
    setError(null);
  }, [word]);

  // Handle native speech synthesis pronunciation
  const handlePronounce = (e: React.MouseEvent) => {
    e.stopPropagation();
    speakFemaleEnglish(word.word, 0.85);
  };

  // Fetch detailed insights and mnemonics from local knowledge base
  const handleFetchAIExplanation = async () => {
    setLoading(true);
    setError(null);
    try {
      // Natural responsive delay for smooth user feedback
      await new Promise(resolve => setTimeout(resolve, 350));
      const explanation = getLocalWordExplanation(word, categoryName);
      setAiExplanation(explanation);
    } catch (err: any) {
      console.error(err);
      setError("عذراً، حدث خطأ أثناء تجهيز الشرح والرابط الذهني.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="word-detail-drawer" className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fade-in">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl border border-slate-100 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-50 bg-slate-50/50">
          <div>
            <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full font-sans">
              قسم: {categoryName}
            </span>
            <span className="text-xs font-bold text-slate-400 mr-2 font-english uppercase">
              {word.partOfSpeech}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-right">
          
          {/* Main Flashcard Word Presentation */}
          <div className="bg-brand-blue/5 border border-brand-blue/10 rounded-2xl p-6 text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight font-english">
                {word.word}
              </h2>
              <button
                onClick={handlePronounce}
                className="p-2.5 rounded-full bg-brand-blue text-white hover:bg-blue-700 transition-all cursor-pointer shadow-md shadow-blue-100"
                title="نطق الكلمة"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            <p className="text-2xl font-black text-brand-blue font-sans">
              {word.arabic}
            </p>

            <div className="inline-flex items-center gap-2 bg-white border border-slate-100 px-4 py-2 rounded-xl text-xs font-bold text-slate-500">
              <span>اللفظ التقريبي بالخط العربي:</span>
              <span className="text-slate-800 font-sans">{word.pronunciation}</span>
            </div>
          </div>

          {/* Core Example Sentence */}
          <div className="space-y-3 bg-slate-50/50 border border-slate-100 p-5 rounded-2xl">
            <h4 className="text-sm font-black text-slate-800 font-sans">جملة توضيحية ومثال:</h4>
            <div className="space-y-1">
              <p className="text-lg font-bold text-slate-950 font-english leading-relaxed tracking-wide text-left ltr">
                {word.example}
              </p>
              <p className="text-slate-600 font-sans font-medium text-sm pt-1">
                {word.exampleArabic}
              </p>
            </div>
          </div>

          {/* Verb Conjugation Section */}
          {conjugation && (
            <div className="bg-white border border-blue-100 rounded-2xl p-5 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-brand-blue font-black text-sm font-sans">
                  <ArrowRightLeft className="w-4 h-4 text-brand-orange" />
                  <span>تصريف الأفعال (Verb Conjugations)</span>
                </div>
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full font-sans ${
                  conjugation.isIrregular 
                    ? "bg-amber-100 text-amber-800 border border-amber-200" 
                    : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                }`}>
                  {conjugation.isIrregular ? "فعل غير منتظم (شاذ)" : "فعل منتظم"}
                </span>
              </div>

              {/* Conjugation Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {/* V1 */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 block font-sans">المضارع / المصدر (V1)</span>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-base font-black text-slate-900 font-english">{conjugation.base}</span>
                    <button 
                      onClick={(e) => speakText(conjugation.base, e)}
                      className="text-slate-400 hover:text-brand-blue transition-colors cursor-pointer"
                      title="استمع"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-500 font-sans block">مع He/She/It: {conjugation.thirdPerson}</span>
                </div>

                {/* V2 */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 block font-sans">الماضي البسيط (V2)</span>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-base font-black text-brand-blue font-english">{conjugation.past}</span>
                    <button 
                      onClick={(e) => speakText(conjugation.past, e)}
                      className="text-slate-400 hover:text-brand-blue transition-colors cursor-pointer"
                      title="استمع"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-500 font-sans block">Past Simple</span>
                </div>

                {/* V3 */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 block font-sans">التصريف الثالث (V3)</span>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-base font-black text-brand-blue font-english">{conjugation.pastParticiple}</span>
                    <button 
                      onClick={(e) => speakText(conjugation.pastParticiple, e)}
                      className="text-slate-400 hover:text-brand-blue transition-colors cursor-pointer"
                      title="استمع"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-500 font-sans block">Past Participle</span>
                </div>

                {/* -ing */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 block font-sans">صيغة الاستمرار (-ing)</span>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-base font-black text-slate-900 font-english">{conjugation.presentParticiple}</span>
                    <button 
                      onClick={(e) => speakText(conjugation.presentParticiple, e)}
                      className="text-slate-400 hover:text-brand-blue transition-colors cursor-pointer"
                      title="استمع"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-500 font-sans block">Continuous</span>
                </div>
              </div>

              {conjugation.tip && (
                <p className="text-xs font-bold text-slate-600 font-sans bg-blue-50/50 p-2.5 rounded-xl border border-blue-100/50 leading-relaxed">
                  💡 {conjugation.tip}
                </p>
              )}
            </div>
          )}

          {/* Synonyms & Antonyms within Course Curriculum */}
          {(synonyms.length > 0 || antonyms.length > 0) && (
            <div className="bg-white border border-slate-100 rounded-2xl p-5 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2 text-slate-800 font-black text-sm font-sans">
                  <Layers className="w-4 h-4 text-brand-orange" />
                  <span>المترادفات والمضادات المستهدفة بحدود الدورة (3000 كلمة)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Synonyms */}
                <div className="space-y-2">
                  <span className="text-xs font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-lg inline-flex items-center gap-1 font-sans">
                    <span>مترادفات (Synonyms):</span>
                    <span className="text-[10px] font-bold">({synonyms.length})</span>
                  </span>

                  {synonyms.length > 0 ? (
                    <div className="space-y-2 pt-1">
                      {synonyms.map((s, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center justify-between p-2.5 bg-emerald-50/40 border border-emerald-100/60 rounded-xl"
                        >
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => speakText(s.word, e)}
                              className="p-1.5 rounded-lg bg-white text-emerald-700 hover:bg-emerald-100 transition-colors shadow-2xs cursor-pointer"
                              title={`استمع لنطق ${s.word}`}
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                            <span className="font-english font-black text-sm text-slate-900">{s.word}</span>
                          </div>
                          <span className="text-xs font-bold text-slate-600 font-sans">{s.arabic}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400 font-sans py-2">لا يوجد مرادف مباشر مسجل ضمن الـ 3000 كلمة.</p>
                  )}
                </div>

                {/* Antonyms */}
                <div className="space-y-2">
                  <span className="text-xs font-extrabold text-rose-800 bg-rose-50 border border-rose-100 px-3 py-1 rounded-lg inline-flex items-center gap-1 font-sans">
                    <span>مضادات (Antonyms):</span>
                    <span className="text-[10px] font-bold">({antonyms.length})</span>
                  </span>

                  {antonyms.length > 0 ? (
                    <div className="space-y-2 pt-1">
                      {antonyms.map((a, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center justify-between p-2.5 bg-rose-50/40 border border-rose-100/60 rounded-xl"
                        >
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => speakText(a.word, e)}
                              className="p-1.5 rounded-lg bg-white text-rose-700 hover:bg-rose-100 transition-colors shadow-2xs cursor-pointer"
                              title={`استمع لنطق ${a.word}`}
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                            <span className="font-english font-black text-sm text-slate-900">{a.word}</span>
                          </div>
                          <span className="text-xs font-bold text-slate-600 font-sans">{a.arabic}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400 font-sans py-2">لا يوجد مضاد مباشر مسجل ضمن الـ 3000 كلمة.</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Dynamic AI Explanation Block */}
          <div className="space-y-4">
            {!aiExplanation && !loading && (
              <button
                onClick={handleFetchAIExplanation}
                className="w-full bg-brand-blue/10 border border-brand-blue/20 hover:bg-brand-blue/20 text-brand-blue font-sans font-extrabold text-sm p-4 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Sparkles className="w-4 h-4 text-brand-orange group-hover:scale-110 transition-transform" />
                <span>طلب شرح تفصيلي من مُعلم إتقان</span>
              </button>
            )}

            {loading && (
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col items-center justify-center gap-3 animate-pulse">
                <div className="w-6 h-6 border-3 border-brand-blue border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-extrabold text-slate-500 font-sans">
                  مُعلم إتقان الذكي يستحضر الروابط الذهنية وطرق اللفظ السهلة لك...
                </span>
              </div>
            )}

            {error && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-700 text-xs font-bold rounded-xl flex items-center gap-2 font-sans">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {aiExplanation && (
              <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs animate-fade-in divide-y divide-slate-100">
                
                {/* 1. Pronunciation Guide */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-brand-orange font-bold text-sm sm:text-base font-sans">
                    <Volume2 className="w-5 h-5 shrink-0" />
                    <span>تفاصيل نطق الكلمة:</span>
                  </div>
                  <p className="text-slate-700 text-sm font-medium font-sans leading-relaxed">
                    {aiExplanation.pronunciationGuide}
                  </p>
                </div>

                {/* 2. Mnemonic Memory Anchor */}
                <div className="space-y-2 pt-6">
                  <div className="flex items-center gap-2 text-brand-orange font-bold text-sm sm:text-base font-sans">
                    <Lightbulb className="w-5 h-5 shrink-0" />
                    <span>رابط ذهني للحفظ السريع (MNEMONIC):</span>
                  </div>
                  <p className="text-slate-700 text-sm font-medium font-sans leading-relaxed">
                    {aiExplanation.mnemonic}
                  </p>
                </div>

                {/* 3. Fun Fact / Linguistic Insight */}
                {aiExplanation.funFact && (
                  <div className="space-y-2 pt-6">
                    <div className="flex items-center gap-2 text-brand-orange font-bold text-sm sm:text-base font-sans">
                      <Info className="w-5 h-5 shrink-0" />
                      <span>معلومة لغوية ممتعة (FUN FACT):</span>
                    </div>
                    <p className="text-slate-700 text-sm font-medium font-sans leading-relaxed">
                      {aiExplanation.funFact}
                    </p>
                  </div>
                )}

                {/* 4. Contextual Examples and Notes */}
                {aiExplanation.examples && aiExplanation.examples.length > 0 && (
                  <div className="space-y-4 pt-6">
                    <div className="flex items-center gap-2 text-brand-orange font-bold text-sm sm:text-base font-sans">
                      <BookOpen className="w-5 h-5 shrink-0" />
                      <span>أمثلة سياقية إضافية وملاحظات:</span>
                    </div>
                    <div className="space-y-4">
                      {aiExplanation.examples.map((ex, idx) => (
                        <div
                          key={idx}
                          className="bg-white border border-slate-100 rounded-2xl p-5 space-y-3 shadow-xs"
                        >
                          <p className="text-base font-bold text-slate-900 font-english text-left ltr">
                            {ex.english}
                          </p>
                          <p className="text-sm font-medium text-slate-500 font-sans">
                            {ex.arabic}
                          </p>
                          {ex.tips && (
                            <p className="text-sm font-bold text-brand-blue font-sans pt-1 flex items-start gap-1.5">
                              <span className="shrink-0">💡 ملمح:</span>
                              <span>{ex.tips.replace(/^💡\s*ملمح:\s*/, "").replace(/^📌\s*/, "")}</span>
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="flex items-center justify-between p-6 border-t border-slate-50 bg-slate-50/50">
          <button
            onClick={() => onToggleMastery(word.id)}
            className={`px-6 py-3.5 rounded-2xl font-sans font-black text-sm flex items-center gap-2 cursor-pointer transition-all ${
              isMastered
                ? "bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-100"
                : "bg-brand-blue hover:bg-blue-700 text-white shadow-lg shadow-blue-100"
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            <span>{isMastered ? "تم إتقان الكلمة! (اضغط للالغاء)" : "ضع علامة: تم إتقان الكلمة (+10 XP)"}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-3.5 rounded-2xl font-sans font-bold text-sm bg-slate-200/50 text-slate-600 hover:bg-slate-200 transition-all cursor-pointer"
          >
            إغلاق النافذة
          </button>
        </div>

      </div>
    </div>
  );
}
