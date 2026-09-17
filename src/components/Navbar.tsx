import React, { useState } from "react";
import { Award, Flame, BookOpen, MessageSquare, Sparkles, RotateCcw, AlertTriangle, X } from "lucide-react";

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  masteredCount: number;
  totalWords: number;
  xp: number;
  streak: number;
  onResetCourse: () => void;
}

export default function Navbar({
  currentTab,
  setCurrentTab,
  masteredCount,
  totalWords,
  xp,
  streak,
  onResetCourse,
}: NavbarProps) {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const percentage = totalWords > 0 ? Math.round((masteredCount / totalWords) * 100) : 0;

  const handleConfirmReset = () => {
    onResetCourse();
    setShowResetConfirm(false);
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-3.5 sm:py-4 gap-3 sm:gap-4">
          
          {/* Brand Logo Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* High-fidelity SVG of the brand icon based on PDF slides */}
              <div className="relative w-12 h-12 flex items-center justify-center bg-slate-50 rounded-xl overflow-hidden">
                <svg
                  viewBox="0 0 100 100"
                  className="w-10 h-10 transform -rotate-6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Periwinkle brand background loop path */}
                  <path
                    d="M30 45 C 20 20, 80 15, 75 45 C 70 70, 30 80, 45 90 C 55 95, 75 90, 80 75"
                    stroke="#84a5f2"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.6"
                  />
                  {/* Deep Blue brand primary path */}
                  <path
                    d="M25 55 C 15 35, 65 30, 60 55 C 55 75, 25 70, 35 90"
                    stroke="#214ecf"
                    strokeWidth="10"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Two Orange diamond dots (ت dots) from the logo slides */}
                  <rect
                    x="56"
                    y="42"
                    width="10"
                    height="10"
                    transform="rotate(45 56 42)"
                    fill="#ea9835"
                    rx="1"
                  />
                  <rect
                    x="68"
                    y="50"
                    width="10"
                    height="10"
                    transform="rotate(45 68 50)"
                    fill="#ea9835"
                    rx="1"
                  />
                </svg>
              </div>

              {/* Text Part of Logo */}
              <div className="flex flex-col select-none">
                <span className="font-sans font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-1">
                  إتقان
                  <span className="text-brand-blue text-lg font-extrabold tracking-widest font-english">ENGLISH</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium font-sans">منصة ذكية للناطقين باللغة العربية</span>
              </div>
            </div>

            {/* Quick Stats & Reset on Mobile & Small Screens */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
              <button
                id="btn-reset-course-mobile"
                onClick={() => setShowResetConfirm(true)}
                title="إعادة بدء الدورة وتصفير التقدم"
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-xs transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-1 bg-amber-50 border border-amber-100/60 text-brand-orange px-2 py-1 rounded-lg text-xs font-bold">
                <Flame className="w-4 h-4 fill-brand-orange" />
                <span>{streak}</span>
              </div>
              <div className="flex items-center gap-1 bg-blue-50 border border-blue-100/60 text-brand-blue px-2 py-1 rounded-lg text-xs font-bold">
                <Award className="w-4 h-4" />
                <span>{xp} XP</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav 
            id="main-nav-tabs"
            className="flex items-center bg-slate-50 p-1.5 rounded-xl border border-slate-100 gap-1 overflow-x-auto"
          >
            <button
              id="tab-course-map"
              onClick={() => setCurrentTab("course")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-sans text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                currentTab === "course"
                  ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>خريطة الكلمات</span>
            </button>

            <button
              id="tab-story-builder"
              onClick={() => setCurrentTab("story")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-sans text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                currentTab === "story"
                  ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>مؤلف القصص</span>
            </button>

            <button
              id="tab-ai-chat"
              onClick={() => setCurrentTab("chat")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-sans text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                currentTab === "chat"
                  ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>معلم إتقان الذكي</span>
            </button>
          </nav>

          {/* Mobile & Small Screens Overall Progress */}
          <div id="mobile-overall-progress" className="lg:hidden w-full bg-slate-50/90 border border-slate-100 rounded-2xl p-3 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold font-sans">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-slate-900 font-black">التقدم العام</span>
                <span className="text-[11px] text-slate-500 font-medium">
                  ({masteredCount} من {totalWords} كلمة متقنة)
                </span>
              </div>
              <span className="bg-brand-orange/10 text-brand-orange px-2.5 py-0.5 rounded-full text-xs font-black font-sans">
                {percentage}%
              </span>
            </div>
            <div className="w-full bg-slate-200/80 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-brand-orange h-full rounded-full transition-all duration-500 shadow-xs"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Dashboard Metrics Panel (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            {/* Streak Tracker */}
            <div className="flex items-center gap-3 bg-amber-50/50 border border-amber-100 px-3.5 py-2 rounded-2xl">
              <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-brand-orange animate-pulse">
                <Flame className="w-5 h-5 fill-brand-orange" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-500 font-bold">الحماس اليومي</span>
                <span className="text-xs font-black text-amber-800">{streak} أيام متتالية</span>
              </div>
            </div>

            {/* XP Counter */}
            <div className="flex items-center gap-3 bg-blue-50/50 border border-blue-100 px-3.5 py-2 rounded-2xl">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue">
                <Award className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-500 font-bold">نقاط الخبرة</span>
                <span className="text-xs font-black text-brand-blue">{xp} XP</span>
              </div>
            </div>

            {/* Total Mastery Progress */}
            <div id="desktop-overall-progress" className="flex flex-col w-28">
              <div className="flex justify-between items-center text-xs font-bold text-slate-500 mb-1">
                <span>التقدم العام</span>
                <span>{percentage}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-brand-orange h-full rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="text-[10px] text-slate-400 font-bold mt-1 text-left">
                {masteredCount} من {totalWords}
              </span>
            </div>

            {/* Reset Course Button */}
            <button
              id="btn-reset-course-desktop"
              onClick={() => setShowResetConfirm(true)}
              title="إعادة بدء الدورة وتصفير التقدم"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-xl transition-all duration-200 cursor-pointer shadow-sm shadow-red-200 hover:shadow-md"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>إعادة بدء الدورة</span>
            </button>
          </div>

        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-fade-in">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-100 space-y-5 animate-scale-in text-right">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <button
                onClick={() => setShowResetConfirm(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-slate-900 font-sans">
                إعادة بدء الدورة من جديد؟
              </h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed font-sans">
                هل أنت متأكد من رغبتك في إعادة بدء الدورة؟ سيؤدي ذلك إلى تصفير جميع الكلمات المتقنة ({masteredCount} كلمة) ونقاط الخبرة ({xp} XP) والعودة إلى البداية.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                id="btn-confirm-reset"
                onClick={handleConfirmReset}
                className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm py-3 px-4 rounded-xl transition-colors cursor-pointer shadow-lg shadow-rose-200"
              >
                نعم، أعد بدء الدورة
              </button>
              <button
                id="btn-cancel-reset"
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm py-3 px-4 rounded-xl transition-colors cursor-pointer"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
