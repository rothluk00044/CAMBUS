export default function CambusAvailabilityCoverageMockup() {
  const weeklyAvailability = [
    {
      name: "[Sample Name]",
      route: "31 Red Route",
      service: "Morning",
      mon: "Available",
      tue: "Available",
      wed: "Limited",
      thu: "Available",
      fri: "Unavailable",
    },
    {
      name: "[Sample Name]",
      route: "32 Blue Route",
      service: "Afternoon",
      mon: "Available",
      tue: "Unavailable",
      wed: "Available",
      thu: "Available",
      fri: "Available",
    },
    {
      name: "[Sample Name]",
      route: "35 Interdorm",
      service: "Training",
      mon: "Limited",
      tue: "Available",
      wed: "Available",
      thu: "Unavailable",
      fri: "Available",
    },
    {
      name: "[Sample Name]",
      route: "36 Research Park",
      service: "Special",
      mon: "Available",
      tue: "Available",
      wed: "Unavailable",
      thu: "Limited",
      fri: "Available",
    },
    {
      name: "[Sample Name]",
      route: "42 Hawkeye Pentacrest",
      service: "Morning",
      mon: "Unavailable",
      tue: "Available",
      wed: "Available",
      thu: "Available",
      fri: "Limited",
    },
  ];

  const openCoverage = [
    {
      route: "52 Finkbine Pentacrest",
      service: "Afternoon",
      time: "1:40 PM",
      need: "1 driver needed",
      status: "Open",
    },
    {
      route: "31 Red Route",
      service: "Morning",
      time: "6:15 AM",
      need: "Backup driver needed",
      status: "Needs Backup",
    },
    {
      route: "36 Research Park",
      service: "Special",
      time: "5:20 PM",
      need: "Training support needed",
      status: "Reviewing Options",
    },
  ];

  const suggestions = [
    {
      name: "[Sample Name]",
      routeFit: "52 Finkbine Pentacrest",
      reason: "Afternoon availability + active qualification match",
    },
    {
      name: "[Sample Name]",
      routeFit: "31 Red Route",
      reason: "Morning availability + recent coverage history",
    },
    {
      name: "[Sample Name]",
      routeFit: "36 Research Park",
      reason: "Special service support availability this week",
    },
  ];

  const temporaryChanges = [
    {
      employee: "[Sample Name]",
      change: "Unavailable Thursday after 3:00 PM",
      enteredBy: "Scheduling Supervisor",
      date: "04/13/2026",
    },
    {
      employee: "[Sample Name]",
      change: "Available Friday morning only",
      enteredBy: "Data Assistant",
      date: "04/13/2026",
    },
  ];

  const badge = (value: string) => {
    if (value === "Available") return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    if (value === "Limited" || value === "Needs Backup" || value === "Reviewing Options") {
      return "bg-amber-100 text-amber-700 border border-amber-200";
    }
    if (value === "Open" || value === "Unavailable") {
      return "bg-rose-100 text-rose-700 border border-rose-200";
    }
    return "bg-slate-100 text-slate-700 border border-slate-200";
  };

  const days = ["mon", "tue", "wed", "thu", "fri"] as const;
  const dayLabels = {
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",
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
                    i === 3 ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-900"
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
                <h1 className="text-4xl font-semibold tracking-tight">Availability & Coverage Management</h1>
              </div>
              <div className="flex items-center gap-3">
                <button className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium shadow-sm">
                  Import Availability
                </button>
                <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                  Add Temporary Change
                </button>
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {[
                "All Services",
                "Morning",
                "Afternoon",
                "Training",
                "Special",
                "Only Open Coverage",
              ].map((filter, index) => (
                <button
                  key={filter}
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                    index === 0
                      ? "bg-blue-600 text-white"
                      : "border border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
              <div className="xl:col-span-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Weekly Availability Grid</h2>
                  <span className="text-sm text-slate-500">Week of April 13, 2026</span>
                </div>
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-left text-slate-500">
                      <tr>
                        <th className="px-4 py-3 font-medium">Employee</th>
                        <th className="px-4 py-3 font-medium">Route</th>
                        <th className="px-4 py-3 font-medium">Service</th>
                        {days.map((day) => (
                          <th key={day} className="px-4 py-3 font-medium">{dayLabels[day]}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {weeklyAvailability.map((row, index) => (
                        <tr key={`${row.name}-${row.route}-${index}`} className="border-t border-slate-200">
                          <td className="px-4 py-3 font-medium">{row.name}</td>
                          <td className="px-4 py-3">{row.route}</td>
                          <td className="px-4 py-3">{row.service}</td>
                          {days.map((day) => (
                            <td key={day} className="px-4 py-3">
                              <span className={`rounded-full px-3 py-1 text-xs font-medium ${badge(row[day])}`}>
                                {row[day]}
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h2 className="text-xl font-semibold">Coverage Snapshot</h2>
                  <div className="mt-4 space-y-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Morning Coverage</span>
                      <span className="font-medium">91%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Afternoon Coverage</span>
                      <span className="font-medium">94%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Training Coverage</span>
                      <span className="font-medium">86%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Special Coverage</span>
                      <span className="font-medium">82%</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h2 className="text-xl font-semibold">Suggested Matches</h2>
                  <div className="mt-4 space-y-3">
                    {suggestions.map((suggestion) => (
                      <div key={`${suggestion.name}-${suggestion.routeFit}`} className="rounded-xl border border-slate-200 p-3">
                        <div className="text-sm font-medium">{suggestion.name}</div>
                        <div className="mt-1 text-sm text-slate-600">Best fit: {suggestion.routeFit}</div>
                        <div className="mt-1 text-xs text-slate-500">{suggestion.reason}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Open Coverage Needs</h2>
                  <span className="text-sm text-slate-500">3 unresolved items</span>
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
                      {openCoverage.map((row) => (
                        <tr key={`${row.route}-${row.time}`} className="border-t border-slate-200">
                          <td className="px-4 py-3">{row.route}</td>
                          <td className="px-4 py-3">{row.service}</td>
                          <td className="px-4 py-3">{row.time}</td>
                          <td className="px-4 py-3">{row.need}</td>
                          <td className="px-4 py-3">
                            <span className={`rounded-full px-3 py-1 text-xs font-medium ${badge(row.status)}`}>
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
                  <h2 className="text-xl font-semibold">Temporary Availability Changes</h2>
                  <span className="text-sm text-slate-500">Latest updates</span>
                </div>
                <div className="space-y-3">
                  {temporaryChanges.map((change) => (
                    <div key={`${change.employee}-${change.date}-${change.change}`} className="rounded-xl border border-slate-200 p-4">
                      <div className="text-sm font-medium">{change.employee}</div>
                      <div className="mt-1 text-sm text-slate-700">{change.change}</div>
                      <div className="mt-2 text-xs text-slate-500">
                        Entered by {change.enteredBy} · {change.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
