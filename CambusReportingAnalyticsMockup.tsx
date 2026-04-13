export default function CambusReportingAnalyticsMockup() {
  const monthlyCoverage = [88, 90, 92, 89, 94, 96, 95];
  const signOffs = [7, 6, 5, 8, 4, 3, 4];
  const specialServices = [12, 15, 11, 17, 14, 18, 16];

  const routeDemand = [
    { route: "31 Red Route", value: 92 },
    { route: "32 Blue Route", value: 84 },
    { route: "35 Interdorm", value: 71 },
    { route: "36 Research Park", value: 66 },
    { route: "42 Hawkeye Pentacrest", value: 78 },
    { route: "52 Finkbine Pentacrest", value: 74 },
  ];

  const qualificationBreakdown = [
    { label: "Dispatch Qualified", value: 18, width: "58%" },
    { label: "Bionic Qualified", value: 27, width: "76%" },
    { label: "Training Complete", value: 44, width: "88%" },
    { label: "Special Service Ready", value: 21, width: "62%" },
  ];

  const insights = [
    {
      title: "Morning routes remain the most stable",
      detail: "31 Red Route and 42 Hawkeye Pentacrest posted the highest weekly coverage rates this month.",
    },
    {
      title: "Special service demand is climbing",
      detail: "Special service volume rose over the last four weeks, with more evening support requests than any earlier point this semester.",
    },
    {
      title: "Sign-offs are trending downward",
      detail: "Attendance incidents decreased after the middle of the month, which may indicate better staffing balance and improved coverage planning.",
    },
  ];

  const reportTable = [
    {
      metric: "Average Morning Coverage",
      current: "94%",
      previous: "91%",
      trend: "+3%",
    },
    {
      metric: "Average Afternoon Coverage",
      current: "90%",
      previous: "88%",
      trend: "+2%",
    },
    {
      metric: "Weekly Sign-Off Total",
      current: "4",
      previous: "6",
      trend: "-2",
    },
    {
      metric: "Special Services Filled",
      current: "16",
      previous: "14",
      trend: "+2",
    },
  ];

  const maxCoverage = Math.max(...monthlyCoverage);
  const maxSignOffs = Math.max(...signOffs);
  const maxServices = Math.max(...specialServices);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="w-72 bg-slate-950 text-white px-5 py-6 flex flex-col justify-between">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-blue-500" />
              <div className="text-3xl font-bold tracking-tight">CAMBUS</div>
            </div>

            <nav className="space-y-2 text-sm">
              {[
                "Dashboard",
                "Employees",
                "Qualifications",
                "Availability",
                "Scheduling",
                "Sign-Offs",
                "Special Services",
                "Reports",
              ].map((item, i) => (
                <div
                  key={item}
                  className={`rounded-xl px-4 py-3 ${
                    i === 7 ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-900"
                  }`}
                >
                  {item}
                </div>
              ))}
            </nav>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
            <div className="text-sm text-slate-400">Signed in as</div>
            <div className="mt-1 font-medium">Luke Roth</div>
            <div className="text-sm text-slate-400">Admin</div>
          </div>
        </aside>

        <main className="flex-1 p-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <div className="text-sm text-slate-500">Workforce Operations Platform</div>
                <h1 className="text-4xl font-semibold tracking-tight">Reporting & Analytics</h1>
              </div>
              <div className="flex items-center gap-3">
                <button className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium shadow-sm">
                  Export CSV
                </button>
                <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                  Generate Report
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "Average Weekly Coverage", value: "92%" },
                { label: "Monthly Sign-Offs", value: "37" },
                { label: "Special Services This Month", value: "103" },
                { label: "Routes With Recurring Gaps", value: "2" },
              ].map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-3xl font-semibold">{metric.value}</div>
                  <div className="mt-2 text-sm text-slate-500">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Weekly Coverage Trend</h2>
                  <span className="text-sm text-slate-500">Last 7 weeks</span>
                </div>
                <div className="flex h-64 items-end gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  {monthlyCoverage.map((value, index) => (
                    <div key={index} className="flex flex-1 flex-col items-center justify-end gap-2">
                      <div className="text-xs text-slate-500">{value}%</div>
                      <div
                        className="w-full rounded-t-xl bg-blue-600"
                        style={{ height: `${(value / maxCoverage) * 180}px` }}
                      />
                      <div className="text-xs text-slate-500">W{index + 1}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Sign-Off Trend</h2>
                  <span className="text-sm text-slate-500">Last 7 weeks</span>
                </div>
                <div className="flex h-64 items-end gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  {signOffs.map((value, index) => (
                    <div key={index} className="flex flex-1 flex-col items-center justify-end gap-2">
                      <div className="text-xs text-slate-500">{value}</div>
                      <div
                        className="w-full rounded-t-xl bg-slate-700"
                        style={{ height: `${(value / maxSignOffs) * 180}px` }}
                      />
                      <div className="text-xs text-slate-500">W{index + 1}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-3">
              <div className="xl:col-span-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Special Services Volume</h2>
                  <span className="text-sm text-slate-500">Weekly activity</span>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-64 items-end gap-4">
                    {specialServices.map((value, index) => (
                      <div key={index} className="flex flex-1 flex-col items-center justify-end gap-2">
                        <div className="text-xs text-slate-500">{value}</div>
                        <div
                          className="w-full rounded-t-xl bg-emerald-500"
                          style={{ height: `${(value / maxServices) * 180}px` }}
                        />
                        <div className="text-xs text-slate-500">W{index + 1}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Qualification Breakdown</h2>
                  <span className="text-sm text-slate-500">Current workforce</span>
                </div>
                <div className="space-y-4">
                  {qualificationBreakdown.map((item) => (
                    <div key={item.label}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span>{item.label}</span>
                        <span className="font-medium">{item.value}</span>
                      </div>
                      <div className="h-3 rounded-full bg-slate-200">
                        <div className="h-3 rounded-full bg-blue-600" style={{ width: item.width }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Route Coverage Demand</h2>
                  <span className="text-sm text-slate-500">By route</span>
                </div>
                <div className="space-y-4">
                  {routeDemand.map((row) => (
                    <div key={row.route}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span>{row.route}</span>
                        <span className="font-medium">{row.value}%</span>
                      </div>
                      <div className="h-3 rounded-full bg-slate-200">
                        <div className="h-3 rounded-full bg-slate-800" style={{ width: `${row.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Operational Insights</h2>
                  <span className="text-sm text-slate-500">Auto-generated summary</span>
                </div>
                <div className="space-y-3">
                  {insights.map((insight) => (
                    <div key={insight.title} className="rounded-xl border border-slate-200 p-4">
                      <div className="text-sm font-semibold">{insight.title}</div>
                      <div className="mt-1 text-sm text-slate-600">{insight.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Monthly Summary Table</h2>
                <span className="text-sm text-slate-500">Current vs previous period</span>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 text-left text-slate-500">
                    <tr>
                      <th className="px-4 py-3 font-medium">Metric</th>
                      <th className="px-4 py-3 font-medium">Current Period</th>
                      <th className="px-4 py-3 font-medium">Previous Period</th>
                      <th className="px-4 py-3 font-medium">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportTable.map((row) => (
                      <tr key={row.metric} className="border-t border-slate-200">
                        <td className="px-4 py-3 font-medium">{row.metric}</td>
                        <td className="px-4 py-3">{row.current}</td>
                        <td className="px-4 py-3">{row.previous}</td>
                        <td className="px-4 py-3">{row.trend}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
