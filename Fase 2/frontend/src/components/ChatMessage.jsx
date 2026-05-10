import { Bot, User } from 'lucide-react';

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isUser ? 'bg-primary-600' : 'bg-white border-2 border-primary-200'
      }`}>
        {isUser
          ? <User size={16} className="text-white" />
          : <Bot size={16} className="text-primary-600" />
        }
      </div>

      <div className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
        isUser
          ? 'bg-primary-600 text-white rounded-tr-sm'
          : 'bg-white text-gray-800 rounded-tl-sm border border-gray-100'
      }`}>
        {message.content}
        {message.source && (
          <p className="mt-2 text-xs opacity-60 font-medium">
            Fuente: {message.source}
          </p>
        )}
      </div>
    </div>
  );
}
