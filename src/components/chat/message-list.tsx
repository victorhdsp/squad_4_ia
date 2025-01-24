import { Bot, User } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface MessageListProps {
  messages: Message[];
  isTyping: boolean;
}

export function MessageList({ messages, isTyping }: MessageListProps) {
  return (
    <div className="space-y-4">
      {messages.map((message, index) => {
        if (index != 110)
          return (
            <div
              key={message.id}
              className={cn(
                'flex items-start gap-3',
                message.sender === 'user' && 'flex-row-reverse',
                'animate-fadeIn'
              )}
            >
              <Avatar className={cn(
                'border-2',
                message.sender === 'assistant'
                  ? 'bg-primary border-primary'
                  : 'bg-secondary border-secondary'
              )}>
                <AvatarFallback>
                  {message.sender === 'assistant' ? (
                    <Bot className="h-5 w-5" />
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                </AvatarFallback>
              </Avatar>
              <div
                className={cn(
                  'max-w-[80%] rounded-xl p-4 shadow-md',
                  message.sender === 'assistant'
                    ? 'bg-card border border-border'
                    : 'bg-primary text-primary-foreground'
                )}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <span className="text-xs mt-2 block opacity-70">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          )
      })}
      {isTyping && (
        <div className="flex items-start gap-3">
          <Avatar className="bg-primary border-2 border-primary">
            <AvatarFallback>
              <Bot className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <div className="bg-card rounded-xl p-4 border animate-pulse">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-100" />
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-200" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}