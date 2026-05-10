import { useState, useRef, useEffect } from 'react';
import { Send, Activity, Trash2, AlertCircle, WifiOff } from 'lucide-react';
import ChatMessage from './components/ChatMessage';
import TypingIndicator from './components/TypingIndicator';
import SuggestedQuestions from './components/SuggestedQuestions';
import { sendChatMessage } from './api/chatService';

const WELCOME_MESSAGE = {
  role: 'assistant',
  content:
    '¡Hola! Soy ChatSalud, tu asistente de actividad física y hábitos saludables. ' +
    'Puedo orientarte sobre ejercicio, nutrición, sueño y bienestar general basándome en directrices de la OMS, ' +
    'SOCHOB, INTA y Bupa Salud. ¿En qué puedo ayudarte hoy?',
};

export default function App() {
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const question = (text ?? input).trim();
    if (!question || loading) return;

    setInput('');
    setError(null);
    setMessages((prev) => [...prev, { role: 'user', content: question }]);
    setLoading(true);

    try {
      const data = await sendChatMessage(question);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.response, source: data.source ?? null },
      ]);
    } catch (err) {
      const isOffline =
        err instanceof TypeError && err.message.toLowerCase().includes('fetch');
      setError(
        isOffline
          ? 'No se pudo conectar con el servidor. Asegúrate de que el backend esté en ejecución.'
          : err.message
      );
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([WELCOME_MESSAGE]);
    setError(null);
  };

  const showSuggestions = messages.length === 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-emerald-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center shadow">
              <Activity size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-gray-900 leading-tight">ChatSalud</h1>
              <p className="text-xs text-gray-500">Actividad Física y Hábitos Saludables</p>
            </div>
          </div>
          <button
            onClick={clearChat}
            title="Limpiar conversación"
            className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
          >
            <Trash2 size={17} />
          </button>
        </div>
      </header>

      {/* Chat area */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-6 flex flex-col gap-4 overflow-y-auto scrollbar-thin">
        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg} />
        ))}

        {loading && <TypingIndicator />}

        {error && (
          <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            {error.includes('servidor') || error.includes('conectar')
              ? <WifiOff size={16} className="flex-shrink-0" />
              : <AlertCircle size={16} className="flex-shrink-0" />
            }
            <span>{error}</span>
          </div>
        )}

        {showSuggestions && !loading && (
          <div className="mt-2">
            <p className="text-xs text-center text-gray-400 mb-2">Preguntas sugeridas</p>
            <SuggestedQuestions onSelect={(q) => sendMessage(q)} />
          </div>
        )}

        <div ref={bottomRef} />
      </main>

      {/* Input area */}
      <footer className="bg-white border-t border-gray-200 sticky bottom-0">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex gap-2 items-end">
            <textarea
              ref={inputRef}
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu pregunta sobre salud y actividad física..."
              disabled={loading}
              className="flex-1 resize-none rounded-xl border border-gray-300 px-4 py-2.5 text-sm
                         focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent
                         disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] max-h-32
                         scrollbar-thin leading-relaxed"
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="w-11 h-11 flex-shrink-0 rounded-xl bg-primary-600 text-white flex items-center justify-center
                         hover:bg-primary-700 disabled:opacity-40 disabled:cursor-not-allowed
                         transition-colors shadow-sm"
            >
              <Send size={17} />
            </button>
          </div>
          <p className="text-xs text-center text-gray-400 mt-2">
            Basado en directrices OMS · SOCHOB · INTA · Bupa Salud
          </p>
        </div>
      </footer>
    </div>
  );
}
