'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Employees', href: '/employees' },
  { label: 'Availability', href: '/availability' },
  { label: 'Reports', href: '/reports' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-72 bg-slate-950 text-white px-5 py-6 flex flex-col justify-between">
      <div>
        <div className="mb-8 flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-blue-600" />
          <div className="text-3xl font-bold tracking-tight">CAMBUS</div>
        </div>

        <nav className="space-y-2 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-xl px-4 py-3 transition-colors ${
                  isActive
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
        <div className="text-sm text-slate-400">Signed in as</div>
        <div className="mt-1 font-medium">Luke Roth</div>
        <div className="text-sm text-slate-400">Admin</div>
      </div>
    </aside>
  )
}
