'use client';

import Image from 'next/image';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 border-b border-rose-100 dark:border-rose-950/70 bg-white/90 dark:bg-[#1d171b]/90 backdrop-blur-md shadow-sm shadow-rose-950/5">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-red-900/15">
            <Image src="/mascot.svg" alt="" width={40} height={40} className="w-full h-full" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none text-stone-900 dark:text-rose-50">
              Arif AI Asisten
            </h1>
            <p className="text-xs text-stone-500 dark:text-rose-200/60">
              Teman pintar untuk ide-ide hebat
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="px-3 py-1.5 rounded-lg border border-rose-200 dark:border-rose-900/70 hover:bg-rose-50 dark:hover:bg-rose-950/50 transition-colors text-stone-700 dark:text-rose-100 flex items-center justify-center"
            title={theme === 'dark' ? 'Gunakan tema terang' : 'Gunakan tema gelap'}
            aria-label={theme === 'dark' ? 'Gunakan tema terang' : 'Gunakan tema gelap'}
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} sm:mr-1.5`} />
            <span className="hidden sm:inline text-xs font-medium">{theme === 'dark' ? 'Terang' : 'Gelap'}</span>
          </button>
          <button
            type="button"
            className="px-3 py-1.5 rounded-lg border border-rose-200 dark:border-rose-900/70 hover:bg-rose-50 dark:hover:bg-rose-950/50 transition-colors text-stone-700 dark:text-rose-100 flex items-center justify-center"
            title="Status API"
          >
            <i className="fas fa-circle text-green-500 sm:mr-1.5" style={{ fontSize: '0.65rem' }}></i>
            <span className="hidden sm:inline text-xs font-medium">Live</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
