import React, { useState, useRef, useEffect } from 'react';
import { Bot, Sparkles } from 'lucide-react';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { MessageList } from '@/components/chat/message-list';
import { MessageInput } from '@/components/chat/message-input';
import { get_text_in_gemini } from './api/gemini';
import { prompt } from './prompts';


export interface Message {
  text: string;
  sender: 'user' | 'model';
  timestamp: Date;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: prompt,
      sender: "user",
      timestamp: new Date()
    },
    {
      text: 'Olá! Como posso ajudar você hoje?',
      sender: 'model',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    (async () => {
      const response = await get_text_in_gemini(newMessage, messages);
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    })()
  };

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto p-4">
          <div className="rounded-xl shadow-xl overflow-hidden border bg-card">
            <div className="p-4 flex items-center justify-between border-b">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Bot className="w-8 h-8 text-primary" />
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold">Assistente Virtual</h1>
                  <p className="text-xs text-muted-foreground">
                    Sempre online para ajudar
                  </p>
                </div>
              </div>
              <ThemeToggle />
            </div>

            <div className="h-[600px] overflow-y-auto p-4 scrollbar-thin">
              <MessageList messages={messages} isTyping={isTyping} />
              <div ref={messagesEndRef} />
            </div>

            <MessageInput
              value={inputMessage}
              onChange={setInputMessage}
              onSubmit={handleSendMessage}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;