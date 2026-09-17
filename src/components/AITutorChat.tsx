import React, { useState, useRef, useEffect } from "react";
import { 
  Send, Sparkles, User, AlertCircle, RefreshCw, MessageSquare, 
  BookOpen, Volume2, ArrowRightLeft, Layers 
} from "lucide-react";
import { ChatMessage } from "../types";
import { getLocalTutorResponseWithData } from "../data/tutorKnowledge";
import { getSpokenText, speakFemaleEnglish } from "../utils/speechUtils";

interface AITutorChatProps {
  onAwardXp: (xpGained: number) => void;
}

export default function AITutorChat({ onAwardXp }: AITutorChatProps) {
  const initialMessage: ChatMessage = {
    id: "welcome",
    role: "assistant",
    content: "أهلاً بك في منصة إتقان لتعلم اللغة الإنجليزية! أنا معلم إتقان المحلي، ومستعد لمساعدتك في استعراض بطاقات الكلمات التعليمية الشاملة، بما فيها معاني الكلمات ونطقها ونوعها وتصريف الأفعال (Conjugation) والمترادفات والمضادات المستهدفة بحدود الدورة (3000 كلمة). اكتب أي كلمة بالعربية أو الإنجليزية للبدء!",
    timestamp: new Date(),
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const speakWord = (text: string) => {
    speakFemaleEnglish(text, 0.85);
  };

  const handleResetChat = () => {
    setMessages([
      {
        ...initialMessage,
        id: `welcome-${Date.now()}`,
        timestamp: new Date(),
      }
    ]);
    setInput("");
    setError(null);
    setLoading(false);
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom of the conversation
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  // Quick suggestion prompts for fast engagement
  const suggestions = [
    "تصريف الفعل write",
    "مضاد كلمة happy",
    "مرادف كلمة start",
    "علمني 3 كلمات جديدة في مستوى A1",
    "اعطني نصيحة ذهبية لحفظ كلمات الانجليزية بسهولة"
  ];

  const handleSendMessage = async (textToSend: string) => {
    if (textToSend.trim() === "" || loading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: textToSend,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      // Simulate natural typing delay for realistic interaction
      await new Promise(resolve => setTimeout(resolve, 400));

      const responseData = getLocalTutorResponseWithData(textToSend);

      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: responseData.text,
        matchedWord: responseData.matchedWord,
        conjugation: responseData.conjugation,
        synonyms: responseData.synonyms,
        antonyms: responseData.antonyms,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMsg]);
      
      // Award +5 XP for each chat turn practiced
      onAwardXp(5);
    } catch (err: any) {
      console.error(err);
      setError("عذراً، حدث خطأ أثناء معالجة الرد. يرجى تكرار المحاولة.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage(input);
    }
  };

  return (
    <div id="ai-chat-module" className="max-w-4xl mx-auto flex flex-col h-[75vh] bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden animate-fade-in text-right">
      
      {/* Header Banner */}
      <div className="bg-brand-blue p-5 text-white flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
            <Sparkles className="w-5 h-5 text-brand-orange animate-pulse" />
          </div>
          <div>
            <h3 className="font-sans font-black text-base">معلم إتقان الذكي</h3>
            <p className="text-[10px] text-brand-periwinkle font-medium font-sans">
              بطاقة الكلمة • تصريف الأفعال • مترادفات ومضادات الدورة
            </p>
          </div>
        </div>

        <button
          onClick={handleResetChat}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-white text-xs font-bold font-sans flex items-center gap-1.5 cursor-pointer"
          title="إعادة ضبط المحادثة"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">محادثة جديدة</span>
        </button>
      </div>

      {/* Messages Scrolling Area */}
      <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-slate-50/50">
        {messages.map((m) => {
          const isUser = m.role === "user";
          return (
            <div
              key={m.id}
              className={`flex items-start gap-3.5 max-w-[90%] sm:max-w-[85%] animate-fade-in ${
                isUser ? "mr-auto flex-row-reverse text-left" : "ml-auto"
              }`}
            >
              {/* Profile icon */}
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-2xs ${
                isUser 
                  ? "bg-slate-900 text-white" 
                  : "bg-brand-blue text-white"
              }`}>
                {isUser ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4 text-brand-orange" />}
              </div>

              {/* Message Bubble */}
              <div className={`rounded-2xl p-4 text-sm leading-relaxed space-y-3 ${
                isUser
                  ? "bg-brand-blue text-white rounded-tl-none font-sans"
                  : "bg-white border border-slate-100 text-slate-800 rounded-tr-none font-sans font-medium shadow-xs"
              }`}>
                <p className="whitespace-pre-wrap">{m.content}</p>

                {/* Rich Interactive Cards for Assistant Replies */}
                {!isUser && (
                  <div className="space-y-3 pt-1">
                    {/* Verb Conjugation Card */}
                    {m.conjugation && (
                      <div className="bg-slate-50/80 border border-blue-100 rounded-xl p-3.5 space-y-3 text-right">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-black text-brand-blue font-sans">
                            <ArrowRightLeft className="w-3.5 h-3.5 text-brand-orange" />
                            <span>تصريف الفعل:</span>
                            <span className="font-english text-slate-900 font-bold">{m.conjugation.base}</span>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full font-sans ${
                            m.conjugation.isIrregular
                              ? "bg-amber-100 text-amber-800 border border-amber-200"
                              : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                          }`}>
                            {m.conjugation.isIrregular ? "شاذ (غير منتظم)" : "منتظم"}
                          </span>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                          <div className="bg-white p-2 rounded-lg border border-slate-100 space-y-0.5">
                            <span className="text-[9px] text-slate-400 font-sans block">V1 المصدر</span>
                            <div className="flex items-center justify-center gap-1 font-english font-bold text-slate-900">
                              <span>{m.conjugation.base}</span>
                              <button 
                                onClick={() => speakWord(m.conjugation!.base)}
                                className="text-slate-400 hover:text-brand-blue cursor-pointer"
                                title="استمع"
                              >
                                <Volume2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>

                          <div className="bg-white p-2 rounded-lg border border-slate-100 space-y-0.5">
                            <span className="text-[9px] text-slate-400 font-sans block">V2 الماضي</span>
                            <div className="flex items-center justify-center gap-1 font-english font-bold text-brand-blue">
                              <span>{m.conjugation.past}</span>
                              <button 
                                onClick={() => speakWord(m.conjugation!.past)}
                                className="text-slate-400 hover:text-brand-blue cursor-pointer"
                                title="استمع"
                              >
                                <Volume2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>

                          <div className="bg-white p-2 rounded-lg border border-slate-100 space-y-0.5">
                            <span className="text-[9px] text-slate-400 font-sans block">V3 التصريف 3</span>
                            <div className="flex items-center justify-center gap-1 font-english font-bold text-brand-blue">
                              <span>{m.conjugation.pastParticiple}</span>
                              <button 
                                onClick={() => speakWord(m.conjugation!.pastParticiple)}
                                className="text-slate-400 hover:text-brand-blue cursor-pointer"
                                title="استمع"
                              >
                                <Volume2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>

                          <div className="bg-white p-2 rounded-lg border border-slate-100 space-y-0.5">
                            <span className="text-[9px] text-slate-400 font-sans block">صيغة -ing</span>
                            <div className="flex items-center justify-center gap-1 font-english font-bold text-slate-900">
                              <span>{m.conjugation.presentParticiple}</span>
                              <button 
                                onClick={() => speakWord(m.conjugation!.presentParticiple)}
                                className="text-slate-400 hover:text-brand-blue cursor-pointer"
                                title="استمع"
                              >
                                <Volume2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {m.conjugation.tip && (
                          <p className="text-[11px] font-bold text-slate-600 font-sans bg-blue-50/50 p-2 rounded-lg leading-relaxed">
                            💡 {m.conjugation.tip}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Thesaurus Card (Synonyms & Antonyms) */}
                    {((m.synonyms && m.synonyms.length > 0) || (m.antonyms && m.antonyms.length > 0)) && (
                      <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 space-y-3 text-right">
                        <div className="flex items-center gap-1.5 text-xs font-black text-slate-800 font-sans">
                          <Layers className="w-3.5 h-3.5 text-brand-orange" />
                          <span>المترادفات والمضادات المستهدفة بالدورة:</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {/* Synonyms */}
                          {m.synonyms && m.synonyms.length > 0 && (
                            <div className="space-y-1.5">
                              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md inline-block font-sans">
                                مترادفات (Synonyms):
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {m.synonyms.map((s, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => speakWord(s.word)}
                                    className="bg-white border border-emerald-200 text-emerald-900 px-2 py-1 rounded-lg flex items-center gap-1.5 hover:bg-emerald-50 transition-all cursor-pointer shadow-3xs"
                                    title="اضغط للاستماع"
                                  >
                                    <Volume2 className="w-3 h-3 text-emerald-600" />
                                    <span className="font-english font-bold">{s.word}</span>
                                    <span className="text-[10px] text-slate-500 font-sans">({s.arabic})</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Antonyms */}
                          {m.antonyms && m.antonyms.length > 0 && (
                            <div className="space-y-1.5">
                              <span className="text-[10px] font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded-md inline-block font-sans">
                                مضادات (Antonyms):
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {m.antonyms.map((a, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => speakWord(a.word)}
                                    className="bg-white border border-rose-200 text-rose-900 px-2 py-1 rounded-lg flex items-center gap-1.5 hover:bg-rose-50 transition-all cursor-pointer shadow-3xs"
                                    title="اضغط للاستماع"
                                  >
                                    <Volume2 className="w-3 h-3 text-rose-600" />
                                    <span className="font-english font-bold">{a.word}</span>
                                    <span className="text-[10px] text-slate-500 font-sans">({a.arabic})</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <span className={`text-[9px] block mt-1.5 opacity-60 ${isUser ? "text-right" : "text-left"}`}>
                  {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          );
        })}

        {/* Loading bubble */}
        {loading && (
          <div className="flex items-start gap-3.5 max-w-[80%] ml-auto">
            <div className="w-8 h-8 rounded-lg bg-brand-blue text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-brand-orange animate-spin" />
            </div>
            <div className="bg-white border border-slate-100 text-slate-500 rounded-2xl rounded-tr-none p-4 text-xs font-bold font-sans flex items-center gap-2 animate-pulse">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
              <span>معلم إتقان يجهز بطاقة الكلمة وتصريف الأفعال والمترادفات والمضادات...</span>
            </div>
          </div>
        )}

        {/* API Error indicator */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-100 text-red-700 text-xs font-bold rounded-2xl flex items-center gap-2 font-sans max-w-md mx-auto">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Prebuilt Suggestions shelf (shown only when few messages exist or conversation is quiet) */}
      {messages.length < 8 && !loading && (
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 overflow-x-auto">
          <div className="flex items-center gap-2.5 whitespace-nowrap py-1">
            <span className="text-xs text-slate-400 font-extrabold flex items-center gap-1 shrink-0 font-sans">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>اقتراحات سريعة:</span>
            </span>
            {suggestions.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(s)}
                className="bg-white border border-slate-200 hover:border-brand-blue hover:text-brand-blue text-slate-600 text-xs font-bold px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-3xs"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Message Area */}
      <div className="p-4 border-t border-slate-100 bg-white flex items-center gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="اكتب كلمة بالعربية أو الإنجليزية، أو اطلب تصريف فعل أو مضاد أو مرادف..."
          className="flex-1 bg-slate-50 border border-slate-100 px-4 py-3 rounded-2xl text-sm font-sans placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:bg-white transition-all"
        />
        <button
          onClick={() => handleSendMessage(input)}
          disabled={input.trim() === "" || loading}
          className={`p-3.5 rounded-2xl text-white transition-all cursor-pointer shadow-md ${
            input.trim() !== "" && !loading
              ? "bg-brand-blue hover:bg-blue-700 shadow-blue-100"
              : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
          }`}
          title="إرسال"
        >
          <Send className="w-4 h-4 rotate-180" />
        </button>
      </div>

    </div>
  );
}
