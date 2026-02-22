'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: '📊 Dashboard' },
  { href: '/brands', label: '🏢 Marcas' },
  { href: '/assets', label: '🎨 Assets' },
  { href: '/audit', label: '✅ Auditoría' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <nav className="space-y-2">
        {links.map((link) => (
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
