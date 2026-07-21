import React, { useState } from 'react';
import { MessageSquare, X, Calendar, Send, Sparkles, Check, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingConciergeProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  options?: string[];
}

export default function FloatingConcierge({ activeTab, setActiveTab }: FloatingConciergeProps) {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-1',
      sender: 'bot',
      text: "Hello! Welcome to JustCo Concierge. I'm here to help you find the perfect workspace solution in Asia-Pacific. What can I help you with today?",
      time: 'Just now',
      options: [
        'How much do Private Offices cost?',
        'Where are your locations?',
        'What is the SuperPass add-on?',
        'How do I schedule a tour visit?',
      ],
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleBookTourClick = () => {
    setActiveTab('book-tour');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate concierge smart response
    setTimeout(() => {
      setIsTyping(false);
      let botResponseText = '';
      let nextOptions: string[] = [];

      const query = textToSend.toLowerCase();

      if (query.includes('private office') || query.includes('cost') || query.includes('price')) {
        botResponseText =
          'Our fully-furnished Private Offices start from $450/month per desk, depending on the location. They feature 24/7 security, high-speed Wi-Fi, business-grade printing, and complimentary meeting room tokens.';
        nextOptions = ['Where are your locations?', 'Schedule a tour'];
      } else if (query.includes('location') || query.includes('where') || query.includes('singapore') || query.includes('city')) {
        botResponseText =
          'We have premier grade-A workspace centers in Singapore, Australia, Japan, Korea, India, and Malaysia. All our spaces are strategically situated in premium CBD districts, directly connected or steps away from major transit stations.';
        nextOptions = ['See Solutions', 'Schedule a tour'];
      } else if (query.includes('superpass') || query.includes('pass') || query.includes('credit')) {
        botResponseText =
          'SuperPass is our flexible, credit-based access pass designed for hybrid teams. It allows individuals or teams to book hot desks and premium meeting rooms across our entire global network easily.';
        nextOptions = ['Buy a SuperPass', 'View pricing plans'];
      } else if (query.includes('tour') || query.includes('schedule') || query.includes('visit') || query.includes('book')) {
        botResponseText =
          "Excellent! Scheduling a tour is fast and complimentary. Click the 'Book Tour' button inside our chat or in the top navigation header. You also get a complimentary Coworking Day-Pass to try out our facilities for the day!";
        nextOptions = ['Open Tour scheduler', 'See other questions'];
      } else {
        botResponseText =
          "JustCo provides high-productivity, hospitality-led working environments. We offer flexible memberships with no hidden costs. Would you like me to connect you with a community sales executive?";
        nextOptions = ['Yes, connect me', 'Browse solutions directory'];
      }

      // Route custom action responses
      if (textToSend === 'Open Tour scheduler' || textToSend === 'Schedule a tour') {
        setActiveTab('book-tour');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botResponseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options: nextOptions,
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 1200);
  };

  return (
    <>
      {/* FAB Container */}
      <div id="fab-container" className="fixed right-6 bottom-6 z-50 flex flex-col gap-4 items-end">
        
        {/* Floating Chat Bubble */}
        <button
          id="chat-toggle-fab"
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 bg-justco-blue hover:bg-justco-blue/90 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition duration-200 cursor-pointer focus:outline-none"
          title="JustCo Live Chat"
        >
          {chatOpen ? <X className="w-6 h-6 animate-pulse" /> : <MessageSquare className="w-6 h-6" />}
        </button>

        {/* BOOK A TOUR Sticky Vertical Tab (only visible when not active on book-tour) */}
        {activeTab !== 'book-tour' && (
          <button
            id="book-tour-vertical-tab"
            onClick={handleBookTourClick}
            className="hidden sm:flex bg-justco-dark hover:bg-justco-dark/95 text-white py-8 px-4 rounded-l-md shadow-2xl transition-all duration-300 origin-right translate-x-1.5 hover:translate-x-0 font-bold uppercase text-[10px] tracking-widest flex-col items-center justify-center space-y-2 select-none cursor-pointer border-l border-justco-blue"
          >
            <Calendar className="w-4 h-4 text-justco-blue" />
            <span className="vertical-text whitespace-nowrap">BOOK TOUR</span>
          </button>
        )}
      </div>

      {/* Simulated Live Chat Concierge Modal */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            id="chat-box-widget"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 20, stiffness: 250 }}
            className="fixed right-6 bottom-24 z-50 bg-white rounded-lg shadow-2xl border border-gray-100 w-[350px] sm:w-[400px] overflow-hidden flex flex-col h-[520px]"
          >
            {/* Chat Header */}
            <div className="bg-justco-dark text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-justco-blue rounded-full flex items-center justify-center text-white relative">
                  <Sparkles className="w-5 h-5" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-justco-dark"></span>
                </div>
                <div>
                  <h4 className="font-bold text-sm">JustCo Concierge</h4>
                  <p className="text-[10px] text-gray-300 flex items-center space-x-1">
                    <span>● Active Support Agent</span>
                  </p>
                </div>
              </div>
              <button
                id="close-chat-widget"
                onClick={() => setChatOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition text-gray-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {messages.map((msg) => (
                <div key={msg.id} className="space-y-1">
                  <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[80%] rounded-2xl p-3.5 text-xs sm:text-sm shadow-2xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-justco-blue text-white rounded-tr-none'
                          : 'bg-white text-justco-dark border border-gray-100 rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                  
                  {/* Message Time label */}
                  <p className={`text-[9px] text-gray-400 px-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.time}
                  </p>

                  {/* Smart Options */}
                  {msg.options && msg.options.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {msg.options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(opt)}
                          className="bg-white border border-gray-200 hover:border-justco-blue hover:text-justco-blue text-[11px] text-gray-600 font-semibold py-1.5 px-3 rounded-full shadow-2xs transition duration-150 cursor-pointer text-left"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Animation */}
              {isTyping && (
                <div className="flex justify-start space-y-1">
                  <div className="bg-white border border-gray-100 rounded-2xl p-3 rounded-tl-none flex items-center space-x-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Footer Input */}
            <div className="p-3 border-t border-gray-100 bg-white">
              <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-full px-4.5 py-1.5">
                <input
                  id="chat-input-text"
                  type="text"
                  placeholder="Type a message..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
                  className="bg-transparent border-none outline-none text-xs w-full py-1 text-gray-700 focus:ring-0 placeholder-gray-400"
                />
                <button
                  id="send-chat-msg-btn"
                  onClick={() => handleSendMessage(inputText)}
                  disabled={!inputText.trim()}
                  className={`p-1.5 rounded-full transition cursor-pointer ${
                    inputText.trim()
                      ? 'text-justco-blue hover:bg-justco-blue/5'
                      : 'text-gray-300 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="text-[10px] text-gray-400 text-center mt-2.5 flex items-center justify-center space-x-1">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Simulated workspace partner concierge.</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
