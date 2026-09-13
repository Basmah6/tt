import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, User, AlertCircle, RefreshCw, MessageSquare, BookOpen } from "lucide-react";
import { ChatMessage } from "../types";
import { getLocalTutorResponse } from "../data/tutorKnowledge";

interface AITutorChatProps {
  onAwardXp: (xpGained: number) => void;
}

export default function AITutorChat({ onAwardXp }: AITutorChatProps) {
  const initialMessage: ChatMessage = {
    id: "welcome",
    role: "assistant",
    content: "أهلاً بك في منصة إتقان لتعلم اللغة الإنجليزية! أنا معلم إتقان المحلي، ومستعد لمساعدتك في معرفة معاني الكلمات ونطقها وأمثلتها ونوعها، والإجابة عن استفساراتك التعليمية. اكتب أي كلمة بالعربية أو الإنجليزية للبحث عنها في قاموسنا المحلي.",
    timestamp: new Date(),
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    "علمني 3 كلمات جديدة في مستوى A1",
    "كيف اقول سعيد وحزين بالانجليزي؟",
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
      await new Promise(resolve => setTimeout(resolve, 450));

      const responseContent = getLocalTutorResponse(textToSend);

      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: responseContent,
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
            <p className="text-[10px] text-brand-periwinkle font-medium font-sans">محادثة تفاعلية</p>
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
              className={`flex items-start gap-3.5 max-w-[85%] animate-fade-in ${
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
              <div className={`rounded-2xl p-4 text-sm leading-relaxed ${
                isUser
                  ? "bg-brand-blue text-white rounded-tl-none font-sans"
                  : "bg-white border border-slate-100 text-slate-800 rounded-tr-none font-sans font-medium"
              }`}>
                <p className="whitespace-pre-wrap">{m.content}</p>
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
              <span>معلم إتقان يكتب الرد المناسب الآن...</span>
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
      {messages.length < 5 && !loading && (
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
          placeholder="اكتب كلمة بالعربية أو الإنجليزية أو اختر من الاقتراحات..."
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
