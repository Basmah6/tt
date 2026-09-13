import React, { useState, useEffect } from "react";
import { Check, X as WrongIcon, Award, ArrowLeft, ArrowRight, ShieldCheck, RefreshCw } from "lucide-react";
import { Category, Word } from "../types";

interface QuizSectionProps {
  category: Category;
  allCategories: Category[];
  onFinishQuiz: (gainedXp: number, masteredWordIds: string[]) => void;
  onCancel: () => void;
}

interface Question {
  word: Word;
  questionType: "engToAr" | "arToEng";
  prompt: string;
  options: string[];
  correctAnswer: string;
}

export default function QuizSection({
  category,
  allCategories,
  onFinishQuiz,
  onCancel,
}: QuizSectionProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [correctWordIds, setCorrectWordIds] = useState<string[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Generate 5 random questions for the selected category on mount
  useEffect(() => {
    const categoryWords = [...category.words];
    // Shuffle category words
    const shuffledWords = categoryWords.sort(() => 0.5 - Math.random());
    // Take up to 5 words
    const selectedWords = shuffledWords.slice(0, Math.min(5, categoryWords.length));

    // Distractor pool (all other words in the curriculum)
    const allOtherWords = allCategories
      .flatMap(c => c.words)
      .filter(w => !selectedWords.some(sw => sw.id === w.id));

    const generatedQuestions: Question[] = selectedWords.map((word, index) => {
      // Alternate question types for variety
      const questionType = index % 2 === 0 ? "engToAr" : "arToEng";
      const correctAnswer = questionType === "engToAr" ? word.arabic : word.word;

      // Select 3 random distractors from other words
      const shuffledOthers = [...allOtherWords].sort(() => 0.5 - Math.random());
      const distractors = shuffledOthers
        .slice(0, 3)
        .map(w => (questionType === "engToAr" ? w.arabic : w.word));

      // Merge and shuffle options
      const options = [correctAnswer, ...distractors].sort(() => 0.5 - Math.random());

      const prompt = questionType === "engToAr"
        ? `ما هو المعنى الصحيح للكلمة الإنجليزية: "${word.word}"؟`
        : `ما هي الكلمة الإنجليزية المقابلة للمعنى العربي: "${word.arabic}"؟`;

      return {
        word,
        questionType,
        prompt,
        options,
        correctAnswer,
      };
    });

    setQuestions(generatedQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setCorrectWordIds([]);
    setQuizFinished(false);
  }, [category, allCategories]);

  const handleSelectOption = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || isAnswered) return;

    const currentQuestion = questions[currentIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore(prev => prev + 1);
      setCorrectWordIds(prev => [...prev, currentQuestion.word.id]);
    }

    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleCompleteQuiz = () => {
    // XP math: +20 XP for participation, +20 XP for each correct answer!
    const earnedXp = 20 + score * 20;
    onFinishQuiz(earnedXp, correctWordIds);
  };

  if (questions.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-3xl border border-slate-100">
        <div className="w-8 h-8 border-3 border-brand-blue border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <span className="text-slate-500 font-sans font-bold">جاري إعداد اختبارك الذكي...</span>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div id="quiz-container" className="max-w-2xl mx-auto animate-fade-in text-right">
      
      {!quizFinished ? (
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
          
          {/* Progress Header */}
          <div className="bg-slate-50 border-b border-slate-100 p-6 flex items-center justify-between">
            <button
              onClick={onCancel}
              className="flex items-center gap-1.5 text-slate-500 hover:text-slate-900 font-sans text-sm font-bold transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>إلغاء الاختبار</span>
            </button>
            
            <div className="flex flex-col items-end">
              <span className="text-xs font-extrabold text-slate-400 font-sans">
                اختبار قسم: {category.nameAr}
              </span>
              <span className="text-sm font-black text-brand-blue font-sans mt-0.5">
                السؤال {currentIndex + 1} من {questions.length}
              </span>
            </div>
          </div>

          {/* Progress Bar indicator */}
          <div className="w-full bg-slate-100 h-1.5">
            <div 
              className="bg-brand-orange h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question and Option list Body */}
          <div className="p-8 space-y-6">
            
            {/* Question Prompt */}
            <div className="space-y-2">
              <span className="text-brand-orange font-sans font-black text-xs uppercase tracking-wider block">
                تحدي الحفظ والتركيز
              </span>
              <h2 className="text-xl font-extrabold text-slate-900 leading-relaxed font-sans">
                {currentQuestion.prompt}
              </h2>
            </div>

            {/* Options grid */}
            <div className="grid grid-cols-1 gap-4 pt-2">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedOption === option;
                const isCorrectOpt = option === currentQuestion.correctAnswer;
                
                let optionStyle = "border-slate-100 bg-slate-50 hover:bg-slate-100 hover:border-slate-300 text-slate-800";
                
                if (isSelected && !isAnswered) {
                  optionStyle = "border-brand-blue bg-brand-blue/5 text-brand-blue ring-2 ring-brand-blue/10";
                } else if (isAnswered) {
                  if (isCorrectOpt) {
                    optionStyle = "border-green-500 bg-green-50 text-green-700 font-bold";
                  } else if (isSelected) {
                    optionStyle = "border-red-400 bg-red-50 text-red-700";
                  } else {
                    optionStyle = "border-slate-100 bg-white text-slate-400 opacity-60";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(option)}
                    className={`w-full text-right p-4 rounded-2xl border-2 transition-all font-sans text-sm font-bold flex items-center justify-between cursor-pointer ${optionStyle}`}
                  >
                    <span>{option}</span>
                    
                    {/* Visual icon feedback when answered */}
                    {isAnswered && isCorrectOpt && (
                      <Check className="w-5 h-5 text-green-600" />
                    )}
                    {isAnswered && isSelected && !isCorrectOpt && (
                      <WrongIcon className="w-5 h-5 text-red-500" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Hint explanation when incorrect */}
            {isAnswered && (
              <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-4 text-xs font-bold text-slate-600 leading-relaxed font-sans flex items-start gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <span>الكلمة: </span>
                  <span className="text-brand-blue font-english font-black">{currentQuestion.word.word}</span>
                  <span> تعني في الإنجليزية: </span>
                  <span className="text-brand-blue font-sans font-black">"{currentQuestion.word.arabic}"</span>
                  <p className="mt-1 text-slate-500 font-medium font-sans">
                    مثال: {currentQuestion.word.example}
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* Action buttons Footer */}
          <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 font-sans">
              احرص على قراءة الإجابات بتمعّن!
            </span>

            {!isAnswered ? (
              <button
                disabled={!selectedOption}
                onClick={handleSubmitAnswer}
                className={`px-6 py-3 rounded-xl font-sans font-black text-sm transition-all shadow-md cursor-pointer ${
                  selectedOption
                    ? "bg-brand-blue text-white hover:bg-blue-700 shadow-blue-100"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
                }`}
              >
                تأكيد الإجابة
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="bg-brand-orange hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-sans font-black text-sm transition-all shadow-md shadow-amber-100 flex items-center gap-1.5 cursor-pointer"
              >
                <span>{currentIndex + 1 === questions.length ? "عرض النتيجة النهائية" : "السؤال التالي"}</span>
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
            )}
          </div>

        </div>
      ) : (
        /* Final Score Summary Pane */
        <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl p-8 text-center space-y-6">
          <div className="w-20 h-20 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto animate-bounce">
            <Award className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-black text-slate-900 font-sans">أحسنت صنعاً! انتهى الاختبار بنجاح</h2>
            <p className="text-slate-500 text-sm font-medium font-sans">
              قمت بإنهاء اختبار "{category.nameAr}" وقياس مستوى حفظك لـ A1 بنجاح.
            </p>
          </div>

          {/* Score display */}
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto pt-4">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="text-xs font-bold text-slate-400 font-sans block mb-1">النتيجة</span>
              <span className="text-2xl font-black text-slate-800 font-sans">
                {score} / {questions.length}
              </span>
            </div>
            <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
              <span className="text-xs font-bold text-slate-400 font-sans block mb-1">النقاط المكتسبة</span>
              <span className="text-2xl font-black text-brand-blue font-sans">
                +{20 + score * 20} XP
              </span>
            </div>
          </div>

          {/* Details about mastered words auto-upgrade */}
          {correctWordIds.length > 0 && (
            <div className="max-w-md mx-auto bg-green-50/50 border border-green-100 rounded-2xl p-4 text-xs font-bold text-green-800 leading-relaxed font-sans text-right">
              <span className="block mb-2 font-black text-green-700">🎉 ترقية ذكية للكلمات المتقنة:</span>
              <p className="font-medium text-slate-600">
                بسبب إجابتك الصحيحة، تم تلقائياً تصنيف الكلمات التالية كـ <span className="text-green-700 font-bold">متقنة</span> في حسابك:
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2 justify-start">
                {correctWordIds.map(id => {
                  const wrd = category.words.find(w => w.id === id);
                  return wrd ? (
                    <span key={id} className="bg-white border border-green-100 px-2.5 py-1 rounded-lg text-slate-700 font-english font-black">
                      {wrd.word}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {/* Action Footer Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={handleCompleteQuiz}
              className="w-full sm:w-auto bg-brand-blue hover:bg-blue-700 text-white font-sans font-black text-sm px-8 py-3.5 rounded-2xl shadow-lg shadow-blue-100 cursor-pointer"
            >
              حفظ التقدم واستلام الجوائز
            </button>
            <button
              onClick={() => {
                setQuestions([]);
                setQuizFinished(false);
              }}
              className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-600 font-sans font-bold text-sm px-6 py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>إعادة الاختبار</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
