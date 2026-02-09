import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot, User } from 'lucide-react';
import { createChatSession, sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello. I'm an AI assistant trained on David's professional profile. Ask me about his research in epidemiology, his coding projects, or his background.",
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat session on mount
  useEffect(() => {
    try {
      chatSessionRef.current = createChatSession();
    } catch (e) {
      console.error("Failed to initialize chat session", e);
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      if (!chatSessionRef.current) {
         chatSessionRef.current = createChatSession();
      }
      
      const responseText = await sendMessageToGemini(chatSessionRef.current, userMsg.text);
      
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] md:h-[600px] border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/30 rounded-lg overflow-hidden animate-fade-in">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black flex items-center gap-3">
        <Sparkles className="text-yellow-500" size={20} />
        <div>
          <h3 className="font-bold text-sm">Assistant</h3>
          <p className="text-xs text-gray-500">Powered by Gemini</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center shrink-0 border
              ${msg.role === 'model' 
                ? 'bg-white dark:bg-black border-gray-200 dark:border-gray-700' 
                : 'bg-black text-white dark:bg-white dark:text-black border-transparent'}
            `}>
              {msg.role === 'model' ? <Bot size={16} /> : <User size={16} />}
            </div>
            
            <div className={`
              max-w-[80%] p-4 rounded-lg text-sm leading-relaxed
              ${msg.role === 'user' 
                ? 'bg-black text-white dark:bg-white dark:text-black' 
                : 'bg-white dark:bg-black border border-gray-200 dark:border-gray-800'}
            `}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-700 flex items-center justify-center">
              <Bot size={16} />
            </div>
            <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 p-4 rounded-lg">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about David's research..."
            className="w-full pl-4 pr-12 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white transition-all text-sm"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black dark:hover:text-white disabled:opacity-50 transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-[10px] text-gray-400 mt-2 text-center">
          AI can make mistakes. Please verify important information.
        </p>
      </div>
    </div>
  );
};