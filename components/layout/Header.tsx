'use client';

import Link from 'next/link';
import { useStore } from '@/stores/store';

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useStore();

  return (
    <header className="bg-blue-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          🎨 Brand AI
        </Link>

        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg bg-blue-700 hover:bg-blue-800 transition"
        >
        </button>
      </div>
    </header>
  );
}
