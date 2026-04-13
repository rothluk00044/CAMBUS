export function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-3xl font-semibold">{value}</div>
      <div className="mt-2 text-sm text-slate-500">{label}</div>
    </div>
  )
}

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className || ''}`}>
      {children}
    </div>
  )
}

export function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        {subtitle && <div className="text-sm text-slate-500">{subtitle}</div>}
        <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
      </div>
      {action}
    </div>
  )
}

export function Pill({ children, variant }: { children: React.ReactNode; variant?: 'success' | 'warning' | 'neutral' | 'error' }) {
  const variantClasses = {
    success: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
    warning: 'bg-amber-100 text-amber-700 border border-amber-200',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
    error: 'bg-red-100 text-red-700 border border-red-200',
  }

  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${variantClasses[variant || 'neutral']}`}>
      {children}
    </span>
  )
}

export function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  className 
}: { 
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string 
}) {
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300',
  }

  return (
    <button 
      onClick={onClick}
      className={`rounded-xl px-5 py-3 text-sm font-medium shadow-sm transition-colors ${variantClasses[variant]} ${className || ''}`}
    >
      {children}
    </button>
  )
}
