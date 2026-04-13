import { Card, PageHeader } from '@/components/UIComponents'

export default function AvailabilityPage() {
  return (
    <div className="p-8">
      <div className="mx-auto max-w-7xl">
        <PageHeader 
          title="Availability & Coverage" 
          subtitle="Workforce Operations Platform"
        />

        <Card>
          <div className="text-center text-slate-500">
            <p>Availability management features will be available soon.</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
