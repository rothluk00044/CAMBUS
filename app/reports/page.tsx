import { Card, PageHeader } from '@/components/UIComponents'

export default function ReportsPage() {
  return (
    <div className="p-8">
      <div className="mx-auto max-w-7xl">
        <PageHeader 
          title="Reports & Analytics" 
          subtitle="Workforce Operations Platform"
        />

        <Card>
          <div className="text-center text-slate-500">
            <p>Reporting features will be available soon.</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
