import { StatCard, Card, PageHeader, Pill } from '@/components/UIComponents'
import { getEmployeeStats, getTodaysSchedule, getRecentIncidents, getAlerts } from '@/lib/data'
import { routeNames, serviceNames } from '@/lib/constants'

export default async function Dashboard() {
  const stats = await getEmployeeStats()
  const schedule = await getTodaysSchedule()
  const recentIncidents = await getRecentIncidents(5)
  const alerts = await getAlerts()

  const metrics = [
    { label: 'Active Employees', value: stats.active },
    { label: 'Staffing Gaps Today', value: schedule.filter((s) => s.status !== 'COVERED').length },
    { label: 'Upcoming Special Services', value: '5' },
    { label: 'Employees Near Point Limit', value: '4' },
  ]

  const badgeVariant = (status: string): 'success' | 'warning' | 'neutral' => {
    if (status === 'COVERED') return 'success'
    if (status === 'NEEDS_BACKUP') return 'warning'
    return 'neutral'
  }

  return (
    <div className="p-8">
      <div className="mx-auto max-w-7xl">
        <PageHeader 
          title="Operations Dashboard" 
          subtitle="Workforce Operations Platform"
          action={<button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
            Go to Scheduling
          </button>}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <StatCard key={metric.label} label={metric.label} value={metric.value} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-3">
          {/* Today's Schedule */}
          <Card className="xl:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Coverage Needs</h2>
              <span className="text-sm text-slate-500">{new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}</span>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-medium">Route</th>
                    <th className="px-4 py-3 font-medium">Service</th>
                    <th className="px-4 py-3 font-medium">Time</th>
                    <th className="px-4 py-3 font-medium">Need</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.length > 0 ? (
                    schedule.map((item, i) => (
                      <tr key={i} className="border-t border-slate-200 hover:bg-slate-50">
                        <td className="px-4 py-3">{routeNames[item.route] || item.route}</td>
                        <td className="px-4 py-3">{serviceNames[item.service] || item.service}</td>
                        <td className="px-4 py-3">{item.time}</td>
                        <td className="px-4 py-3 text-slate-600">{item.needDescription}</td>
                        <td className="px-4 py-3">
                          <Pill variant={badgeVariant(item.status)}>{item.status.replace(/_/g, ' ')}</Pill>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-4 py-3 text-center text-slate-500">
                        No coverage needs today
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Alerts */}
          <Card>
            <h2 className="mb-4 text-xl font-semibold">Alerts</h2>
            <div className="space-y-3">
              {alerts.length > 0 ? (
                alerts.map((alert, i) => (
                  <div key={i} className="rounded-lg border border-amber-200 bg-amber-50 p-3">
                    <div className="font-medium text-amber-900">{alert.employee}</div>
                    <div className="mt-1 text-sm text-amber-700">{alert.reason}</div>
                    <div className="mt-2 text-xs text-amber-600">{alert.date}</div>
                  </div>
                ))
              ) : (
                <div className="text-sm text-slate-500">No alerts at this time</div>
              )}
            </div>
          </Card>
        </div>

        {/* Recent Incidents */}
        <Card className="mt-6">
          <h2 className="mb-4 text-xl font-semibold">Recent Activity</h2>
          {recentIncidents.length > 0 ? (
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-medium">Employee</th>
                    <th className="px-4 py-3 font-medium">Date</th>
                    <th className="px-4 py-3 font-medium">Event</th>
                    <th className="px-4 py-3 font-medium">Points</th>
                    <th className="px-4 py-3 font-medium">Related Shift</th>
                  </tr>
                </thead>
                <tbody>
                  {recentIncidents.map((item, i) => (
                    <tr key={i} className="border-t border-slate-200 hover:bg-slate-50">
                      <td className="px-4 py-3">{item.employee.name}</td>
                      <td className="px-4 py-3 text-slate-600">
                        {new Date(item.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' })}
                      </td>
                      <td className="px-4 py-3">{item.type.replace(/_/g, ' ')}</td>
                      <td className="px-4 py-3">{item.points > 0 ? `+${item.points}` : item.points}</td>
                      <td className="px-4 py-3 text-slate-600">{item.relatedShift || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-sm text-slate-500">No recent activity</div>
          )}
        </Card>
      </div>
    </div>
  )
}

