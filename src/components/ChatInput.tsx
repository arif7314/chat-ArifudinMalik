'use client';

import { useState, useRef, useEffect } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => Promise<void>;
  isLoading: boolean;
}

export default function ChatInput({
  onSendMessage,
  isLoading,
}: ChatInputProps) {
  const [input, setInput] = useState('');
  const [isComposing, setIsComposing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = async () => {
    if (!input.trim() || isLoading || isComposing) return;

    const message = input.trim();
    setInput('');

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    // Blur textarea to hide mobile keyboard
    if (textareaRef.current) {
      textareaRef.current.blur();
    }

    await onSendMessage(message);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Tombol Enter sekarang hanya berfungsi untuk baris baru
    // Fitur kirim via Enter telah dimatikan sesuai permintaan user
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(
        textareaRef.current.scrollHeight,
        120
      ) + 'px';
    }
  }, [input]);



  return (
    <div className="border-t border-rose-100 dark:border-rose-950/70 pt-4">
      <div className="relative flex items-end gap-3">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          placeholder="Tanyakan apa saja kepada Arif AI..."
          disabled={isLoading}
          rows={1}
          className="flex-1 p-3 text-sm md:text-base rounded-xl border border-rose-200 dark:border-rose-950 bg-white dark:bg-[#211a1f] text-stone-900 dark:text-rose-50 placeholder-stone-400 dark:placeholder-rose-100/40 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 resize-none max-h-[120px] disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className="px-4 py-3 bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500 text-white rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md shadow-red-900/15"
        >
          {isLoading ? (
            <i className="fas fa-spinner animate-spin"></i>
          ) : (
            <i className="fas fa-paper-plane"></i>
          )}
        </button>
      </div>
      <div className="text-xs text-stone-500 dark:text-rose-100/50 mt-6 text-center space-y-1">
        <p>Arif AI Asisten dapat membuat kesalahan. Periksa kembali informasi penting.</p>
        <p>© 2026 Hak Cipta Dilindungi.</p>
        <p>
          Developed by{' '}
          <a
            href="https://adi-muhamad.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-700 dark:text-rose-300 hover:text-red-800 dark:hover:text-rose-200 hover:underline transition-colors"
          >
            adi-muhamad.my.id
          </a>
        </p>
      </div>
    </div>
  );
}
