'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/stores/auth'
// import { useAuthStore } from '../../../store/auth'

export const NAV_ITEMS = [
  { href: '/', label: '📊 Dashboard', roles: ['admin', 'user', 'auditor'] },
  { href: '/brands', label: '🏢 Marcas', roles: ['admin'] },
  { href: '/assets', label: '🎨 Assets', roles: ['admin', 'user'] },
  { href: '/audit', label: '✅ Auditoría', roles: ['admin', 'auditor'] },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuthStore()
  const filteredNav = NAV_ITEMS.filter(item =>
    item.roles.includes(user.role)
  )

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <nav className="space-y-2">
        {filteredNav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-2 rounded-lg transition ${
              pathname === link.href
                ? 'bg-blue-600 font-semibold'
                : 'hover:bg-gray-800'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
