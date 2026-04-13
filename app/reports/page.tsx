import { Card, PageHeader, StatCard, Pill } from '@/components/UIComponents'
import { getReports, getEmployees, getRecentIncidents, getSpecialServices } from '@/lib/data'

export default async function ReportsPage() {
  const reports = await getReports()
  const employees = await getEmployees()
  const incidents = await getRecentIncidents(50)
  const specialServices = await getSpecialServices()

  // Calculate metrics
  const qualifiedBionic = employees.filter((e) => e.bionicQualified).length
  const qualifiedDispatch = employees.filter((e) => e.dispatchQualified).length
  const totalIncidents = incidents.length
  const avgIncidentsPerEmployee = (totalIncidents / reports.activeEmployees).toFixed(1)

  // Route coverage (mock data - normally calculated from assignments)
  const routeMetrics = [
    { route: '31 Red Route', coverage: 92 },
    { route: '32 Blue Route', coverage: 84 },
    { route: '35 Interdorm', coverage: 71 },
    { route: '36 Research Park', coverage: 66 },
    { route: '42 Hawkeye Pentacrest', coverage: 78 },
    { route: '52 Finkbine Pentacrest', coverage: 74 },
  ]

  // Service type distribution
  const morningIncidents = incidents.filter((i) => i.employee.primaryService === 'MORNING').length
  const afternoonIncidents = incidents.filter((i) => i.employee.primaryService === 'AFTERNOON').length
  const specialIncidents = incidents.filter((i) => i.employee.primaryService === 'SPECIAL').length
  const trainingIncidents = incidents.filter((i) => i.employee.primaryService === 'TRAINING').length

  const insights = [
    {
      title: 'Dispatch qualification coverage',
      detail: `${qualifiedDispatch} employees are dispatch qualified, providing ${((qualifiedDispatch / reports.activeEmployees) * 100).toFixed(0)}% coverage.`,
    },
    {
      title: 'Bionic system proficiency',
      detail: `${qualifiedBionic} employees certified on bionic systems, enabling advanced route management.`,
    },
    {
      title: 'Recent incident trends',
      detail: `${totalIncidents} incidents recorded with an average of ${avgIncidentsPerEmployee} incidents per employee.`,
    },
  ]

  return (
    <div className="p-8">
      <div className="mx-auto max-w-7xl">
        <PageHeader 
          title="Reports & Analytics" 
          subtitle="Workforce Operations Platform"
        />

        {/* Key Metrics */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Total Employees" value={reports.totalEmployees} />
          <StatCard label="Active Today" value={reports.activeEmployees} />
          <StatCard label="Total Incidents" value={totalIncidents} />
          <StatCard label="Special Services" value={specialServices.length} />
        </div>

        {/* Main Reports */}
        <div className="mt-6 grid gap-6 xl:grid-cols-2">
          {/* Route Coverage */}
          <Card>
            <h2 className="mb-4 text-xl font-semibold">Route Coverage</h2>
            <div className="space-y-3">
              {routeMetrics.map((metric) => (
                <div key={metric.route}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-medium">{metric.route}</div>
                    <div className="text-sm text-slate-600">{metric.coverage}%</div>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 transition-all"
                      style={{ width: `${metric.coverage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Qualification Breakdown */}
          <Card>
            <h2 className="mb-4 text-xl font-semibold">Qualification Breakdown</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm font-medium">Dispatch Qualified</div>
                  <div className="text-sm text-slate-600">{qualifiedDispatch} employees</div>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: `${(qualifiedDispatch / reports.activeEmployees) * 100}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm font-medium">Bionic Qualified</div>
                  <div className="text-sm text-slate-600">{qualifiedBionic} employees</div>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500"
                    style={{ width: `${(qualifiedBionic / reports.activeEmployees) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Insights */}
        <Card className="mt-6">
          <h2 className="mb-4 text-xl font-semibold">Insights</h2>
          <div className="space-y-3">
            {insights.map((insight, i) => (
              <div key={i} className="rounded-lg border border-slate-200 p-3">
                <div className="font-medium text-slate-900">{insight.title}</div>
                <div className="mt-1 text-sm text-slate-600">{insight.detail}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Incident Distribution */}
        <Card className="mt-6">
          <h2 className="mb-4 text-xl font-semibold">Incidents by Service Type</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{morningIncidents}</div>
              <div className="text-sm text-slate-600">Morning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">{afternoonIncidents}</div>
              <div className="text-sm text-slate-600">Afternoon</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{specialIncidents}</div>
              <div className="text-sm text-slate-600">Special</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-600">{trainingIncidents}</div>
              <div className="text-sm text-slate-600">Training</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
