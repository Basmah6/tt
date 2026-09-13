import React, { useState, useMemo } from "react";
import { Word, Category, SingleWordStory } from "../types";
import { generateLocalStories } from "../data/stories";
import { getSpokenText } from "../utils/speechUtils";
import { searchAndRankWords } from "../utils/searchUtils";
import { highlightStoryEnglish, highlightStoryArabic } from "../utils/storyHighlightUtils";
import { 
  Sparkles, 
  Search, 
  Trash2, 
  BookOpen, 
  AlertCircle, 
  Volume2, 
  Star,
  Layers,
  X
} from "lucide-react";

interface StoryGeneratorProps {
  categories: Category[];
  onAwardXp?: (xpGained: number) => void;
}

const ARABIC_ORDINAL_NAMES = [
  "الأولى",
  "الثانية",
  "الثالثة",
  "الرابعة",
  "الخامسة",
  "السادسة",
  "السابعة",
  "الثامنة"
];

function cleanTitle(str?: string): string {
  if (!str) return "";
  return str.replace(/^#+\s*/g, "").replace(/#/g, "").replace(/\*/g, "").trim();
}

function cleanStoryContent(str?: string): string {
  if (!str) return "";
  return str.replace(/\*/g, "").trim();
}

export default function StoryGenerator({
  categories
}: StoryGeneratorProps) {
  const [selectedWords, setSelectedWords] = useState<Word[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [stories, setStories] = useState<SingleWordStory[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Flattened list of words for searching and adding
  const allWords = categories.flatMap(c => c.words);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectWord = (word: Word) => {
    if (selectedWords.some(w => w.id === word.id)) return;
    if (selectedWords.length >= 5) return; // Limit to 5 words max
    setSelectedWords(prev => [...prev, word]);
    setSearchTerm("");
  };

  const handleRemoveWord = (wordId: string) => {
    setSelectedWords(prev => prev.filter(w => w.id !== wordId));
  };

  const handleGenerateStories = () => {
    if (selectedWords.length < 1) return;

    setLoading(true);
    setError(null);
    setStories(null);

    try {
      // Direct local static story retrieval (Word -> Fixed Local Story, 100% offline & deterministic)
      const generated = generateLocalStories(selectedWords);
      setStories(generated);
    } catch (err: any) {
      console.error("Local story retrieval error:", err);
      setError(err.message || "حدث خطأ أثناء عرض القصص المحلية. الرجاء المحاولة مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  // Text-to-speech helper
  const handlePlayVoice = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(getSpokenText(text));
      utterance.lang = 'en-US';
      utterance.rate = 0.88; // Comfortable slow rate for A1 learners
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(v => v.lang.startsWith("en-US") || v.lang.startsWith("en-GB"));
      if (englishVoice) {
        utterance.voice = englishVoice;
      }
      window.speechSynthesis.speak(utterance);
    }
  };

  const availableWords = useMemo(() => {
    return allWords.filter(w => !selectedWords.some(sw => sw.id === w.id));
  }, [allWords, selectedWords]);

  const filteredWords = useMemo(() => {
    if (searchTerm.trim() === "") return [];
    // Prioritizes exact matches (e.g. "an" -> "An") and prefixes, excluding unrelated words
    return searchAndRankWords(availableWords, searchTerm).slice(0, 10);
  }, [availableWords, searchTerm]);

  return (
    <div id="story-generator-container" className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-right animate-fade-in">
      
      {/* Left panel: Word Selection Panel (4 columns) */}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-5">
          <div className="space-y-1">
            <h3 className="text-lg font-black text-slate-900 font-sans">1. اختر الكلمات المطلوبة</h3>
            <p className="text-slate-400 text-xs font-bold font-sans">
              اختر ما بين 1 إلى 5 كلمات، وسيقوم مؤلف القصص بتأليف قصة مستقلة تماماً لكل كلمة لتبسيط وفهم طريقة الاستخدام.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="ابحث واختر كلمة (مثال: Dog, House, Hi)..."
              className="w-full pl-8 pr-10 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:bg-white transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-200/60 transition-colors"
                title="مسح البحث"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Floating Search Results */}
            {searchTerm.trim() !== "" && filteredWords.length > 0 && (
              <div className="absolute z-10 w-full bg-white mt-1.5 rounded-xl border border-slate-100 shadow-lg overflow-hidden max-h-60 overflow-y-auto">
                {filteredWords.map((word, idx) => (
                  <button
                    key={word.id}
                    onClick={() => handleSelectWord(word)}
                    className="w-full text-right px-4 py-2.5 hover:bg-slate-50 flex items-center justify-between text-xs font-bold transition-colors cursor-pointer border-b border-slate-50 last:border-0"
                  >
                    <span className="text-slate-800 font-sans">{word.arabic}</span>
                    <span className="text-brand-blue font-english font-bold flex items-center gap-1.5">
                      {idx === 0 && searchTerm.trim().toLowerCase() === word.word.toLowerCase() && (
                        <span className="bg-emerald-50 text-emerald-600 text-[10px] font-sans px-1.5 py-0.5 rounded-md">تطابق تام</span>
                      )}
                      <span>{word.word}</span>
                    </span>
                  </button>
                ))}
              </div>
            )}

            {searchTerm.trim() !== "" && filteredWords.length === 0 && (
              <div className="absolute z-10 w-full bg-white mt-1.5 rounded-xl border border-slate-100 shadow-lg p-3 text-center text-xs text-slate-400 font-sans">
                لا توجد كلمات مطابقة للبحث
              </div>
            )}
          </div>

          {/* Selected Words shelf */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-slate-400 font-sans flex justify-between">
              <span>الرف الحالي</span>
              <span>{selectedWords.length} من 5 كلمات</span>
            </h4>

            {selectedWords.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {selectedWords.map(w => (
                  <span
                    key={w.id}
                    className="inline-flex items-center gap-1.5 bg-brand-blue/5 border border-brand-blue/10 text-brand-blue px-3 py-1.5 rounded-xl text-xs font-bold animate-fade-in"
                  >
                    <span className="font-english font-black">{w.word}</span>
                    <span className="text-slate-400 text-[10px]">({w.arabic})</span>
                    <button
                      onClick={() => handleRemoveWord(w.id)}
                      className="p-0.5 rounded-md hover:bg-red-50 hover:text-brand-coral transition-colors mr-1 cursor-pointer"
                      title="حذف من الرف"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </span>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 border-2 border-dashed border-slate-200/60 bg-slate-50/50 rounded-2xl">
                <p className="text-xs font-bold text-slate-400 font-sans">الرف فارغ حالياً.</p>
                <p className="text-[10px] text-slate-400 font-sans mt-0.5">ابدأ بالبحث عن الكلمات لإضافتها</p>
              </div>
            )}
          </div>

          {/* Quick Notice about Multi-Story Independence */}
          {selectedWords.length > 0 && (
            <div className="p-3 bg-blue-50/50 rounded-2xl border border-blue-100/60 flex items-center gap-2.5 text-xs text-brand-blue font-bold">
              <Layers className="w-4 h-4 shrink-0 text-brand-orange" />
              <span>
                سيتم توليد <strong className="font-black text-brand-blue">{selectedWords.length}</strong> {selectedWords.length === 1 ? "قصة مستقلة" : "قصص منفصلة تماماً"} (قصة مخصصة لكل كلمة).
              </span>
            </div>
          )}

          {/* Generate Action Button */}
          <button
            disabled={selectedWords.length < 1 || loading}
            onClick={handleGenerateStories}
            className={`w-full font-sans font-black text-sm py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
              selectedWords.length >= 1 && !loading
                ? "bg-brand-blue text-white shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-[0.99]"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
          >
            <Sparkles className="w-5 h-5 text-brand-orange animate-spin" />
            <span>مؤلف القصص</span>
          </button>
        </div>
      </div>

      {/* Right panel: Active Generated Stories Output (8 columns) */}
      <div className="lg:col-span-8 space-y-8">
        
        {/* Empty state */}
        {!stories && !loading && (
          <div className="bg-white rounded-3xl p-12 border border-slate-100 shadow-sm text-center space-y-4 h-full flex flex-col items-center justify-center min-h-[350px]">
            <BookOpen className="w-12 h-12 text-slate-300 animate-pulse" />
            <h3 className="text-lg font-black text-slate-800 font-sans">باني القصص المستقلة</h3>
            <p className="text-slate-400 text-sm max-w-sm mx-auto font-sans font-medium leading-relaxed">
              قم باختيار كلمة أو عدة كلمات من القائمة الجانبية، ثم اضغط على الزر ليقوم مؤلف القصص بتأليف قصة مستقلة ومتكاملة لكل كلمة على حدة.
            </p>
          </div>
        )}

        {/* Loading state */}
        {loading && (
          <div className="bg-white rounded-3xl p-12 border border-slate-100 shadow-sm text-center space-y-6 h-full flex flex-col items-center justify-center min-h-[350px]">
            <div className="w-10 h-10 border-4 border-brand-blue border-t-transparent rounded-full animate-spin" />
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-800 font-sans">
                جاري تأليف {selectedWords.length} {selectedWords.length === 1 ? "قصة مستقلة" : "قصص منفصلة"} مخصصة...
              </h4>
              <p className="text-xs text-slate-400 font-sans">يتم بناء كل قصة حول كلمتها المستهدفة بشكل طبيعي ومستقل تماماً.</p>
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="bg-red-50 border border-red-100 rounded-3xl p-6 flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-brand-coral shrink-0 mt-0.5" />
            <div className="space-y-1 text-right">
              <h4 className="text-sm font-black text-red-800 font-sans">فشل تأليف القصص</h4>
              <p className="text-xs text-red-600 font-sans">{error}</p>
              <button
                onClick={handleGenerateStories}
                className="mt-3 bg-white border border-red-200 text-red-700 text-xs font-bold px-4 py-2 rounded-xl hover:bg-red-100 cursor-pointer"
              >
                إعادة المحاولة
              </button>
            </div>
          </div>
        )}

        {/* Rendered Stories List */}
        {stories && stories.length > 0 && (
          <div id="story-container" className="space-y-8 animate-fade-in">
            
            {/* Top Header & Reset Action Bar */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-black text-slate-900 text-base">
                    القصص المخصصة ({stories.length})
                  </h3>
                  <p className="text-xs text-slate-500 font-sans font-medium">
                    تم تأليف {stories.length === 1 ? "قصة مستقلة" : "قصص منفصلة تماماً"} لكل كلمة مختارة لترسيخ الفهم والاستخدام.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setStories(null);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold font-sans bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 px-3.5 py-2 rounded-xl border border-slate-200 transition-colors cursor-pointer"
                  title="تأليف قصة أخرى أو مسح النتائج"
                >
                  <Trash2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>تأليف قصص أخرى</span>
                </button>
              </div>
            </div>

            {/* List of Independent Story Cards */}
            {stories.map((storyItem, index) => {
              const ordinalLabel = ARABIC_ORDINAL_NAMES[index] || `${index + 1}`;

              return (
                <div key={storyItem.word.id || index} className="space-y-6">
                  
                  {/* Story Card Unit */}
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6 relative overflow-hidden transition-all hover:shadow-md">
                    
                    {/* Story Section Header */}
                    <div className="border-b border-slate-100 pb-5 space-y-3">
                      
                      {/* Story Number & Target Word Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="bg-brand-blue text-white text-xs font-black font-sans px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-xs">
                            <Star className="w-3.5 h-3.5 fill-brand-orange text-brand-orange" />
                            <span>القصة {ordinalLabel} — {storyItem.word.word.toUpperCase()}</span>
                          </span>
                          <span className="bg-slate-100 text-slate-700 text-xs font-bold font-sans px-3 py-1.5 rounded-full border border-slate-200/60">
                            الكلمة المستهدفة: <strong className="text-brand-blue font-english">{storyItem.word.word}</strong> ({storyItem.word.arabic})
                          </span>
                        </div>

                        {/* Pronunciation audio button */}
                        <button
                          onClick={() => handlePlayVoice(storyItem.storyEnglish)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold font-sans bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-brand-blue px-3.5 py-1.5 rounded-xl border border-slate-200/60 transition-colors cursor-pointer"
                          title="استمع للقصة بالصوت الإنجليزي"
                        >
                          <Volume2 className="w-4 h-4 text-brand-orange" />
                          <span>استماع للقصة</span>
                        </button>
                      </div>

                      {/* Story English & Arabic Titles */}
                      <div className="space-y-1 pt-1">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-bold font-sans">
                          <span>📖</span>
                          <span>عنوان القصة</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-english leading-tight text-left" dir="ltr">
                          {cleanTitle(storyItem.title)}
                        </h2>
                        {cleanTitle(storyItem.titleArabic) && cleanTitle(storyItem.titleArabic) !== cleanTitle(storyItem.title) && (
                          <p className="text-slate-600 font-sans font-bold text-sm sm:text-base mt-1" dir="rtl">
                            {cleanTitle(storyItem.titleArabic)}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Story Content - Responsive Grid (English Light Blue + Arabic Light Gray) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
                      
                      {/* English Card (Light Blue bg, LTR, left-aligned) */}
                      <div className="bg-sky-50/70 border border-sky-100/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between" dir="ltr">
                        <div>
                          <div className="flex items-center justify-between mb-3 border-b border-sky-200/60 pb-2">
                            <span className="text-xs font-extrabold text-blue-700 font-sans tracking-wider uppercase flex items-center gap-1.5">
                              <BookOpen className="w-4 h-4 text-blue-600" />
                              <span>English Story</span>
                            </span>
                          </div>
                          <p className="text-slate-900 text-base sm:text-lg font-english font-medium leading-[2.2] tracking-wide text-left whitespace-pre-wrap break-words">
                            {highlightStoryEnglish(cleanStoryContent(storyItem.storyEnglish), storyItem.word)}
                          </p>
                        </div>
                      </div>

                      {/* Arabic Card (Light Gray bg, RTL, right-aligned) */}
                      <div className="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between" dir="rtl">
                        <div>
                          <div className="flex items-center justify-between mb-3 border-b border-slate-200/80 pb-2">
                            <span className="text-xs font-extrabold text-slate-700 font-sans tracking-wider flex items-center gap-1.5">
                              <Star className="w-4 h-4 text-brand-orange" />
                              <span>الترجمة العربية</span>
                            </span>
                            <span className="text-[11px] text-slate-400 font-sans font-semibold">ترجمة أدبية دقيقة</span>
                          </div>
                          <p className="text-slate-800 text-sm sm:text-base font-sans font-medium leading-[2.2] whitespace-pre-wrap break-words text-right">
                            {highlightStoryArabic(cleanStoryContent(storyItem.storyArabic), storyItem.word)}
                          </p>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Visual Divider between consecutive stories */}
                  {index < stories.length - 1 && (
                    <div className="border-t-2 border-dashed border-slate-200 w-full my-4" />
                  )}

                </div>
              );
            })}

          </div>
        )}

      </div>
    </div>
  );
}
