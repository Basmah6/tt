import React, { useState } from "react";
import { 
  MessageSquare, Users, Home, Utensils, Heart, Shirt, 
  Trees, Calendar, Activity, Clock, Info, MapPin, 
  Briefcase, Key, Search, CheckCircle, BookOpen, ChevronLeft,
  Filter, PlayCircle, Coffee, Sun, Hash, Compass,
  GraduationCap, Laptop, Coins, Scale, Film, Trophy,
  Smile, Brain, Footprints, Sparkles, Layers, X
} from "lucide-react";
import { Category, Word } from "../types";
import { searchAndRankWords } from "../utils/searchUtils";

// Dynamic Lucide icon mapper for categories
const getCategoryIcon = (iconName: string) => {
  const props = { className: "w-6 h-6" };
  switch (iconName) {
    case "MessageSquare": return <MessageSquare {...props} />;
    case "Users": return <Users {...props} />;
    case "Home": return <Home {...props} />;
    case "Utensils": return <Utensils {...props} />;
    case "Heart": return <Heart {...props} />;
    case "Shirt": return <Shirt {...props} />;
    case "Trees": return <Trees {...props} />;
    case "Calendar": return <Calendar {...props} />;
    case "Activity": return <Activity {...props} />;
    case "Clock": return <Clock {...props} />;
    case "Info": return <Info {...props} />;
    case "MapPin": return <MapPin {...props} />;
    case "Briefcase": return <Briefcase {...props} />;
    case "Key": return <Key {...props} />;
    case "Coffee": return <Coffee {...props} />;
    case "Sun": return <Sun {...props} />;
    case "Hash": return <Hash {...props} />;
    case "Compass": return <Compass {...props} />;
    case "GraduationCap": return <GraduationCap {...props} />;
    case "Laptop": return <Laptop {...props} />;
    case "Coins": return <Coins {...props} />;
    case "Scale": return <Scale {...props} />;
    case "Film": return <Film {...props} />;
    case "Trophy": return <Trophy {...props} />;
    case "Smile": return <Smile {...props} />;
    case "Brain": return <Brain {...props} />;
    case "Footprints": return <Footprints {...props} />;
    case "Sparkles": return <Sparkles {...props} />;
    case "Layers": return <Layers {...props} />;
    default: return <BookOpen {...props} />;
  }
};

// Colors mapping matching the exact PDF brand values
const getCategoryColors = (index: number) => {
  const colors = [
    { bg: "bg-blue-50/70", border: "border-blue-100", iconBg: "bg-brand-blue/10", text: "text-brand-blue", accent: "bg-brand-blue" },
    { bg: "bg-amber-50/70", border: "border-amber-100", iconBg: "bg-brand-orange/10", text: "text-brand-orange", accent: "bg-brand-orange" },
    { bg: "bg-rose-50/70", border: "border-rose-100", iconBg: "bg-brand-coral/10", text: "text-brand-coral", accent: "bg-brand-coral" },
    { bg: "bg-indigo-50/70", border: "border-indigo-100", iconBg: "bg-brand-periwinkle/20", text: "text-indigo-600", accent: "bg-brand-periwinkle" }
  ];
  return colors[index % colors.length];
};

interface CourseMapProps {
  categories: Category[];
  masteredWords: string[];
  onSelectWord: (word: Word, categoryName: string) => void;
  onStartQuiz: (category: Category) => void;
}

export default function CourseMap({
  categories,
  masteredWords,
  onSelectWord,
  onStartQuiz
}: CourseMapProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"all" | "unstudied" | "mastered">("all");

  // Global search across all A1 words
  const handleGlobalSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchTerm(val);
    // If searching while inside a category and no match exists in this category, switch to all categories
    if (selectedCategory && val.trim() !== "") {
      const matchesInCurrent = searchAndRankWords(selectedCategory.words, val);
      if (matchesInCurrent.length === 0) {
        setSelectedCategory(null);
      }
    }
  };

  // Filtered and prioritized list of words (either global or within selected category)
  const getFilteredWords = () => {
    const listSource = selectedCategory ? selectedCategory.words : categories.flatMap(c => c.words);
    
    let words = listSource;
    if (searchTerm.trim() !== "") {
      // Prioritize exact matches (e.g. "an" -> "An") and prefixes, excluding unrelated words
      words = searchAndRankWords(listSource, searchTerm);
    }

    return words.filter(w => {
      const isMastered = masteredWords.includes(w.id);
      return (
        filterType === "all" ||
        (filterType === "mastered" && isMastered) ||
        (filterType === "unstudied" && !isMastered)
      );
    });
  };

  const filteredWords = getFilteredWords();

  // Helper to calculate completions per category
  const getCategoryMastery = (cat: Category) => {
    const total = cat.words.length;
    const mastered = cat.words.filter(w => masteredWords.includes(w.id)).length;
    const percentage = total > 0 ? Math.round((mastered / total) * 100) : 0;
    return { total, mastered, percentage };
  };

  return (
    <div id="course-container" className="space-y-8 animate-fade-in">
      
      {/* Search and Filters Header */}
      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight font-sans">
              {selectedCategory ? `قسم: ${selectedCategory.nameAr}` : "منهج إتقان لأهم 3000 كلمة"}
            </h1>
            <p className="text-slate-500 text-sm font-medium mt-1">
              {selectedCategory 
                ? selectedCategory.descriptionAr 
                : `تم ترتيب المنهج في ${categories.length} قسماً موضوعياً متخصصاً لتسهيل الحفظ والاستيعاب اليومي وتصنيف كل كلمة بدقة.`}
            </p>
          </div>

          {/* Quick Quiz Trigger inside categories */}
          {selectedCategory && (
            <button
              onClick={() => onStartQuiz(selectedCategory)}
              className="bg-brand-orange hover:bg-amber-600 text-white font-sans font-black text-sm px-5 py-3 rounded-2xl shadow-lg shadow-amber-100 transition-all flex items-center gap-2 self-start md:self-auto cursor-pointer"
            >
              <CheckCircle className="w-5 h-5" />
              <span>اختبر معلوماتك في هذا القسم</span>
            </button>
          )}
        </div>

        {/* Input Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          {/* Search Bar */}
          <div className="relative w-full sm:flex-1">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={handleGlobalSearchChange}
              placeholder="ابحث عن أي كلمة بالإنجليزية أو العربية (مثال: Hello, عائلة)..."
              className="w-full pl-10 pr-12 py-3 bg-slate-50 rounded-2xl border border-slate-100 text-slate-800 placeholder-slate-400 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:bg-white transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-200/60 transition-colors"
                title="مسح البحث"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Tab Filter Button */}
          <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100 w-full sm:w-auto overflow-x-auto gap-1">
            <button
              onClick={() => setFilterType("all")}
              className={`px-4 py-2 rounded-lg font-sans text-xs font-bold transition-all whitespace-nowrap ${
                filterType === "all" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              الكل
            </button>
            <button
              onClick={() => setFilterType("unstudied")}
              className={`px-4 py-2 rounded-lg font-sans text-xs font-bold transition-all whitespace-nowrap ${
                filterType === "unstudied" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              غير مدروسة
            </button>
            <button
              onClick={() => setFilterType("mastered")}
              className={`px-4 py-2 rounded-lg font-sans text-xs font-bold transition-all whitespace-nowrap ${
                filterType === "mastered" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              متقنة ({masteredWords.length})
            </button>
          </div>
        </div>
      </div>

      {/* Main Categories Grid */}
      {!selectedCategory && searchTerm === "" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => {
            const colors = getCategoryColors(index);
            const { total, mastered, percentage } = getCategoryMastery(cat);

            return (
              <div
                key={cat.id}
                className={`group relative rounded-3xl border ${colors.border} ${colors.bg} p-6 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 flex flex-col justify-between gap-6 cursor-pointer`}
                onClick={() => setSelectedCategory(cat)}
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${colors.iconBg} ${colors.text} flex items-center justify-center`}>
                      {getCategoryIcon(cat.icon)}
                    </div>
                    
                    {/* Completion rate bubble */}
                    <div className="text-xs font-bold bg-white px-3 py-1.5 rounded-full text-slate-500 border border-slate-100 shadow-2xs">
                      {mastered} / {total} كلمة
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-brand-blue transition-colors font-sans">
                    {cat.nameAr}
                  </h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5 font-english">
                    {cat.nameEn}
                  </p>
                  
                  {/* Description */}
                  <p className="text-slate-500 text-sm mt-3 leading-relaxed font-sans font-medium line-clamp-2">
                    {cat.descriptionAr}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-400">
                    <span>نسبة الإتقان</span>
                    <span className={colors.text}>{percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-200/50 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${colors.accent}`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>

                {/* Action Hover element */}
                <div className="absolute left-6 bottom-6 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0 hidden md:block">
                  <ChevronLeft className={`w-5 h-5 ${colors.text}`} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Words view when inside category or when searching */
        <div className="space-y-6">
          {/* Back button */}
          {(selectedCategory || searchTerm !== "") && (
            <div className="flex items-center justify-between bg-slate-100/50 p-3 rounded-2xl">
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchTerm("");
                }}
                className="flex items-center gap-1.5 text-slate-600 hover:text-brand-blue text-sm font-bold transition-all bg-white px-4 py-2 rounded-xl border border-slate-200 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span>العودة للأقسام الرئيسية</span>
              </button>

              {selectedCategory && (
                <div className="text-xs font-extrabold text-slate-500">
                  عرض {filteredWords.length} كلمة من أصل {selectedCategory.words.length} في قسم "{selectedCategory.nameAr}"
                </div>
              )}
              {!selectedCategory && searchTerm.trim() !== "" && (
                <div className="text-xs font-extrabold text-slate-500">
                  نتائج البحث: تم العثور على {filteredWords.length} كلمة مطابقة لـ "{searchTerm}"
                </div>
              )}
            </div>
          )}

          {/* Words grid */}
          {filteredWords.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWords.map((word) => {
                const isMastered = masteredWords.includes(word.id);
                
                return (
                  <div
                    key={word.id}
                    onClick={() => {
                      // Lookup parent category name for display context
                      const parentCat = categories.find(c => c.words.some(w => w.id === word.id));
                      onSelectWord(word, parentCat ? parentCat.nameAr : "عام");
                    }}
                    className={`group relative bg-white rounded-3xl p-6 border transition-all duration-300 hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-1 cursor-pointer flex flex-col justify-between min-h-[170px] ${
                      isMastered 
                        ? "border-green-100 hover:border-green-200 bg-green-50/5" 
                        : "border-slate-100 hover:border-brand-periwinkle/50"
                    }`}
                  >
                    <div>
                      {/* Word Header */}
                      <div className="flex items-start justify-between mb-3">
                        {/* Word & part of speech */}
                        <div className="flex flex-col">
                          <h4 className="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors font-english">
                            {word.word}
                          </h4>
                          <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 font-english mt-0.5">
                            {word.partOfSpeech}
                          </span>
                        </div>

                        {/* Pronunciation phonetics */}
                        <div className="bg-slate-100 text-slate-600 font-sans text-xs font-bold px-2.5 py-1 rounded-lg">
                          {word.pronunciation}
                        </div>
                      </div>

                      {/* Arabic Meaning */}
                      <p className="text-slate-800 font-extrabold text-base mb-4 font-sans flex items-center gap-1">
                        <span>{word.arabic}</span>
                      </p>
                    </div>

                    {/* Footer indicators */}
                    <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-2">
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-medium text-slate-400 font-sans group-hover:text-brand-blue transition-colors">عرض التفاصيل والتعليم الذكي</span>
                      </div>
                      
                      {isMastered ? (
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 font-sans">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>متقنة</span>
                        </span>
                      ) : (
                        <span className="bg-slate-50 text-slate-400 text-xs font-bold px-2.5 py-1 rounded-full group-hover:bg-brand-blue/5 group-hover:text-brand-blue transition-all font-sans">
                          قيد الدراسة
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* No results empty state */
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 shadow-2xs">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-800 font-sans">لم نجد أي كلمة تطابق بحثك</h3>
              <p className="text-slate-400 text-sm mt-1 max-w-sm mx-auto font-sans font-medium">
                حاول البحث بعبارات أخرى أو إلغاء تفعيل الفلاتر النشطة لعرض الكلمات المتاحة.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilterType("all");
                  setSelectedCategory(null);
                }}
                className="mt-6 bg-brand-blue text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-blue-700 transition-all cursor-pointer"
              >
                إعادة ضبط المنهج والبحث
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
