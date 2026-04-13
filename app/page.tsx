import { StatCard, Card, PageHeader, Pill } from '@/components/UIComponents'

export default function Dashboard() {
  const metrics = [
    { label: 'Active Employees', value: '60' },
    { label: 'Staffing Gaps Today', value: '3' },
    { label: 'Upcoming Special Services', value: '5' },
    { label: 'Employees Near Point Limit', value: '4' },
  ]

  const schedule = [
    {
      service: 'Morning',
      route: '31 Red Route',
      time: '3:30 AM',
      assigned: 'John Smith, Sarah Johnson',
      status: 'Covered' as const,
    },
    {
      service: 'Morning',
      route: '36 Research Park',
      time: '7:30 AM',
      assigned: 'Michael Chen',
      status: 'Needs Backup' as const,
    },
    {
      service: 'Special',
      route: '32 Blue Route',
      time: '5:30 PM',
      assigned: 'Emily Davis, Robert Wilson',
      status: 'Covered' as const,
    },
    {
      service: 'Training',
      route: '42 Hawkeye Pentacrest',
      time: '6:10 AM',
      assigned: 'Jessica Martinez',
      status: 'Pending Review' as const,
    },
  ]

  const alerts = [
    {
      employee: 'David Lee',
      date: '04/13/2026',
      reason: '3 recent sign-offs',
      enteredBy: 'Scheduling Supervisor',
    },
    {
      employee: 'Amanda Brown',
      date: '04/13/2026',
      reason: 'Missing qualification for upcoming special service',
      enteredBy: 'Data Assistant',
    },
  ]

  const recent = [
    {
      employee: 'Marcus Taylor',
      date: '04/12/2026',
      event: 'Sign-Off',
      points: '+1',
      shift: '36 Research Park 7:30 AM',
    },
    {
      employee: 'Lisa Anderson',
      date: '04/12/2026',
      event: 'Late Arrival',
      points: '+0.5',
      shift: '31 Red Route 3:30 AM',
    },
  ]

  const badgeVariant = (status: string): 'success' | 'warning' | 'neutral' => {
    if (status === 'Covered') return 'success'
    if (status === 'Needs Backup') return 'warning'
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
              <h2 className="text-xl font-semibold">Today's Schedule</h2>
              <span className="text-sm text-slate-500">April 13, 2026</span>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-medium">Service</th>
                    <th className="px-4 py-3 font-medium">Route</th>
                    <th className="px-4 py-3 font-medium">Time</th>
                    <th className="px-4 py-3 font-medium">Assigned</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item, i) => (
                    <tr key={i} className="border-t border-slate-200 hover:bg-slate-50">
                      <td className="px-4 py-3">{item.service}</td>
                      <td className="px-4 py-3">{item.route}</td>
                      <td className="px-4 py-3">{item.time}</td>
                      <td className="px-4 py-3 text-slate-600">{item.assigned}</td>
                      <td className="px-4 py-3">
                        <Pill variant={badgeVariant(item.status)}>{item.status}</Pill>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Alerts */}
          <Card>
            <h2 className="mb-4 text-xl font-semibold">Alerts</h2>
            <div className="space-y-3">
              {alerts.map((alert, i) => (
                <div key={i} className="rounded-lg border border-amber-200 bg-amber-50 p-3">
                  <div className="font-medium text-amber-900">{alert.employee}</div>
                  <div className="mt-1 text-sm text-amber-700">{alert.reason}</div>
                  <div className="mt-2 text-xs text-amber-600">{alert.date}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-6">
          <h2 className="mb-4 text-xl font-semibold">Recent Activity</h2>
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
                {recent.map((item, i) => (
                  <tr key={i} className="border-t border-slate-200 hover:bg-slate-50">
                    <td className="px-4 py-3">{item.employee}</td>
                    <td className="px-4 py-3 text-slate-600">{item.date}</td>
                    <td className="px-4 py-3">{item.event}</td>
                    <td className="px-4 py-3">{item.points}</td>
                    <td className="px-4 py-3 text-slate-600">{item.shift}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}
