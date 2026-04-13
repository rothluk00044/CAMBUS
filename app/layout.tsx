import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'CAMBUS Operations',
  description: 'Workforce Operations Management Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
