'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/auth';

export default function Header() {
  const router = useRouter();
  const { logout, user } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className="bg-blue-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          🎨 Brand AI
        </Link>

        <div className="flex items-center gap-4">

          {/* Usuario */}
          {user && (
            <span className="text-sm">
              {user.email}
            </span>
          )}

          {/* Logout */}
          {user && (
            <button
              onClick={handleLogout}
              className="px-3 py-2 bg-red-600 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          )}

        </div>
      </div>
    </header>
  );
}