export default function CambusDashboardMockup() {
  const metrics = [
    { label: "Active Employees", value: "60" },
    { label: "Staffing Gaps Today", value: "3" },
    { label: "Upcoming Special Services", value: "5" },
    { label: "Employees Near Point Limit", value: "4" },
  ];

  const schedule = [
    {
      service: "Morning",
      route: "31 Red Route",
      time: "3:30 AM",
      assigned: "[Sample Name], [Sample Name]",
      status: "Covered",
    },
    {
      service: "Morning",
      route: "36 Research Park",
      time: "7:30 AM",
      assigned: "[Sample Name]",
      status: "Needs Backup",
    },
    {
      service: "Special",
      route: "32 Blue Route",
      time: "5:30 PM",
      assigned: "[Sample Name], [Sample Name]",
      status: "Covered",
    },
    {
      service: "Training",
      route: "42 Hawkeye Pentacrest",
      time: "6:10 AM",
      assigned: "[Sample Name]",
      status: "Pending Review",
    },
  ];

  const alerts = [
    {
      employee: "[Sample Name]",
      date: "04/13/2026",
      reason: "3 recent sign-offs",
      enteredBy: "Scheduling Supervisor",
    },
    {
      employee: "[Sample Name]",
      date: "04/13/2026",
      reason: "Missing qualification for upcoming special service",
      enteredBy: "Data Assistant",
    },
  ];

  const recent = [
    {
      employee: "[Sample Name]",
      date: "04/12/2026",
      event: "Sign-Off",
      points: "+1",
      shift: "36 Research Park 7:30 AM",
    },
    {
      employee: "[Sample Name]",
      date: "04/12/2026",
      event: "Late Arrival",
      points: "+0.5",
      shift: "31 Red Route 3:30 AM",
    },
  ];

  const badgeClasses: Record<string, string> = {
    Covered: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    "Needs Backup": "bg-amber-100 text-amber-700 border border-amber-200",
    "Pending Review": "bg-slate-100 text-slate-700 border border-slate-200",
  };

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
                "Admin Notes",
              ].map((item, i) => (
                <div
                  key={item}
                  className={`rounded-xl px-4 py-3 ${
                    i === 0 ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-900"
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
            <div className="mb-8 flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-500">Workforce Operations Platform</div>
                <h1 className="text-4xl font-semibold tracking-tight">Operations Dashboard</h1>
              </div>
              <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                Go to Scheduling
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-3xl font-semibold">{metric.value}</div>
                  <div className="mt-2 text-sm text-slate-500">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-3">
              <div className="xl:col-span-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Today’s Schedule</h2>
                  <span className="text-sm text-slate-500">April 13, 2026</span>
                </div>
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-left text-slate-500">
                      <tr>
                        <th className="px-4 py-3 font-medium">Service</th>
                        <th className="px-4 py-3 font-medium">Route</th>
                        <th className="px-4 py-3 font-medium">Time</th>
                        <th className="px-4 py-3 font-medium">Assigned Employees</th>
                        <th className="px-4 py-3 font-medium">Coverage Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schedule.map((row) => (
                        <tr key={`${row.service}-${row.time}`} className="border-t border-slate-200">
                          <td className="px-4 py-3">{row.service}</td>
                          <td className="px-4 py-3">{row.route}</td>
                          <td className="px-4 py-3">{row.time}</td>
                          <td className="px-4 py-3">{row.assigned}</td>
                          <td className="px-4 py-3">
                            <span className={`rounded-full px-3 py-1 text-xs font-medium ${badgeClasses[row.status]}`}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Weekly Coverage Status</h2>
                  <span className="text-sm text-slate-500">This Week</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Morning Coverage", value: "92%" },
                    { label: "Afternoon Coverage", value: "96%" },
                    { label: "Evening Coverage", value: "88%" },
                    { label: "Special Services Filled", value: "81%" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span>{item.label}</span>
                        <span className="font-medium">{item.value}</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-200">
                        <div className="h-2 rounded-full bg-blue-600" style={{ width: item.value }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Actionable Alerts</h2>
                  <span className="text-sm text-slate-500">Needs Attention</span>
                </div>
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-left text-slate-500">
                      <tr>
                        <th className="px-4 py-3 font-medium">Employee</th>
                        <th className="px-4 py-3 font-medium">Date</th>
                        <th className="px-4 py-3 font-medium">Reason</th>
                        <th className="px-4 py-3 font-medium">Entered By</th>
                      </tr>
                    </thead>
                    <tbody>
                      {alerts.map((row) => (
                        <tr key={`${row.employee}-${row.reason}`} className="border-t border-slate-200">
                          <td className="px-4 py-3">{row.employee}</td>
                          <td className="px-4 py-3">{row.date}</td>
                          <td className="px-4 py-3">{row.reason}</td>
                          <td className="px-4 py-3">{row.enteredBy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Recent Sign-Offs & Incidents</h2>
                  <span className="text-sm text-slate-500">Last 24 Hours</span>
                </div>
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-left text-slate-500">
                      <tr>
                        <th className="px-4 py-3 font-medium">Employee</th>
                        <th className="px-4 py-3 font-medium">Date</th>
                        <th className="px-4 py-3 font-medium">Event</th>
                        <th className="px-4 py-3 font-medium">Points</th>
                        <th className="px-4 py-3 font-medium">Shift</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recent.map((row) => (
                        <tr key={`${row.employee}-${row.event}-${row.shift}`} className="border-t border-slate-200">
                          <td className="px-4 py-3">{row.employee}</td>
                          <td className="px-4 py-3">{row.date}</td>
                          <td className="px-4 py-3">{row.event}</td>
                          <td className="px-4 py-3">{row.points}</td>
                          <td className="px-4 py-3">{row.shift}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
