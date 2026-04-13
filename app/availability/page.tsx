import { Card, PageHeader, Pill } from '@/components/UIComponents'
import { getAvailabilityGrid, getCoverageNeeds } from '@/lib/data'
import { routeNames, serviceNames } from '@/lib/constants'

export default async function AvailabilityPage() {
  const availabilityGrid = await getAvailabilityGrid()
  const coverageNeeds = await getCoverageNeeds()

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

  const getAvailVariant = (status: string): 'success' | 'warning' | 'neutral' | 'error' => {
    if (status === 'AVAILABLE') return 'success'
    if (status === 'LIMITED') return 'warning'
    return 'error'
  }

  return (
    <div className="p-8">
      <div className="mx-auto max-w-7xl">
        <PageHeader 
          title="Availability & Coverage" 
          subtitle="Workforce Operations Platform"
        />

        {/* Weekly Availability Grid */}
        <Card className="mb-6">
          <h2 className="mb-4 text-xl font-semibold">Weekly Availability</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Route</th>
                  {days.map((day) => (
                    <th key={day} className="px-4 py-3 font-medium text-center">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {availabilityGrid.map((emp) => (
                  <tr key={emp.id} className="border-t border-slate-200 hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium">{emp.name}</td>
                    <td className="px-4 py-3 text-slate-600 text-sm">{emp.route ? routeNames[emp.route] : '—'}</td>
                    {emp.availability.map((avail, idx) => (
                      <td key={idx} className="px-4 py-3 text-center">
                        <Pill variant={getAvailVariant(avail.availabilityStatus)}>
                          {avail.availabilityStatus.charAt(0).toUpperCase() + avail.availabilityStatus.slice(1).toLowerCase().replace(/_/g, ' ')}
                        </Pill>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Open Coverage Needs */}
        <Card>
          <h2 className="mb-4 text-xl font-semibold">Open Coverage Needs</h2>
          {coverageNeeds.length > 0 ? (
            <div className="space-y-3">
              {coverageNeeds.map((need) => (
                <div key={need.id} className="rounded-lg border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{routeNames[need.route]} • {serviceNames[need.service]}</div>
                      <div className="mt-1 text-sm text-slate-600">{need.time} — {need.needDescription}</div>
                    </div>
                    <Pill variant={need.status === 'OPEN' ? 'error' : need.status === 'NEEDS_BACKUP' ? 'warning' : 'neutral'}>
                      {need.status.replace(/_/g, ' ')}
                    </Pill>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-slate-500">No open coverage needs</div>
          )}
        </Card>
      </div>
    </div>
  )
}
