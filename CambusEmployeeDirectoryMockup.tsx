export default function CambusEmployeeDirectoryMockup() {
  const employees = [
    {
      name: "[Sample Name]",
      id: "S4021",
      email: "sample1@uiowa.edu",
      phone: "(319) 555-0142",
      role: "Driver",
      route: "31 Red Route",
      service: "Morning",
      seniority: "2.5 years",
      training: "Complete",
      bionic: "Qualified",
      dispatch: "Not Qualified",
      status: "Active",
    },
    {
      name: "[Sample Name]",
      id: "S4178",
      email: "sample2@uiowa.edu",
      phone: "(319) 555-0194",
      role: "Driver",
      route: "32 Blue Route",
      service: "Afternoon",
      seniority: "1.5 years",
      training: "Complete",
      bionic: "Qualified",
      dispatch: "Qualified",
      status: "Active",
    },
    {
      name: "[Sample Name]",
      id: "S4230",
      email: "sample3@uiowa.edu",
      phone: "(319) 555-0137",
      role: "Trainee",
      route: "35 Interdorm",
      service: "Training",
      seniority: "4 months",
      training: "In Progress",
      bionic: "Not Qualified",
      dispatch: "Not Qualified",
      status: "Active",
    },
    {
      name: "[Sample Name]",
      id: "S4014",
      email: "sample4@uiowa.edu",
      phone: "(319) 555-0170",
      role: "Driver",
      route: "42 Hawkeye Pentacrest",
      service: "Morning",
      seniority: "3 years",
      training: "Complete",
      bionic: "Qualified",
      dispatch: "Qualified",
      status: "Needs Review",
    },
    {
      name: "[Sample Name]",
      id: "S4186",
      email: "sample5@uiowa.edu",
      phone: "(319) 555-0125",
      role: "Driver",
      route: "36 Research Park",
      service: "Special",
      seniority: "10 months",
      training: "Complete",
      bionic: "Not Qualified",
      dispatch: "Qualified",
      status: "Active",
    },
    {
      name: "[Sample Name]",
      id: "S4052",
      email: "sample6@uiowa.edu",
      phone: "(319) 555-0159",
      role: "Driver",
      route: "52 Finkbine Pentacrest",
      service: "Afternoon",
      seniority: "2 years",
      training: "Complete",
      bionic: "Qualified",
      dispatch: "Not Qualified",
      status: "Inactive",
    },
  ];

  const recentChanges = [
    { item: "Qualification updated for [Sample Name]", meta: "Dispatch qualification added · Today" },
    { item: "Availability edited for [Sample Name]", meta: "Tuesday/Thursday afternoon change · Today" },
    { item: "Personnel note added for [Sample Name]", meta: "Entered by Scheduling Supervisor · Yesterday" },
  ];

  const filters = ["All Employees", "Morning", "Afternoon", "Training", "Special", "Dispatch Qualified"];

  const pill = (value: string) => {
    if (value === "Qualified" || value === "Complete" || value === "Active") {
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    }
    if (value === "In Progress" || value === "Needs Review") {
      return "bg-amber-100 text-amber-700 border border-amber-200";
    }
    return "bg-slate-100 text-slate-700 border border-slate-200";
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
                    i === 1 ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-900"
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
                <h1 className="text-4xl font-semibold tracking-tight">Employee Directory</h1>
              </div>
              <div className="flex items-center gap-3">
                <input
                  className="w-80 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm outline-none"
                  placeholder="Search by name, route, ID, or qualification"
                />
                <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                  Add Employee
                </button>
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {filters.map((filter, index) => (
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

            <div className="grid gap-6 xl:grid-cols-4">
              <div className="xl:col-span-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Employee Table</h2>
                  <span className="text-sm text-slate-500">62 total employees</span>
                </div>
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-left text-slate-500">
                      <tr>
                        <th className="px-4 py-3 font-medium">Name</th>
                        <th className="px-4 py-3 font-medium">Employee ID</th>
                        <th className="px-4 py-3 font-medium">Primary Route</th>
                        <th className="px-4 py-3 font-medium">Service</th>
                        <th className="px-4 py-3 font-medium">Training</th>
                        <th className="px-4 py-3 font-medium">Bionic</th>
                        <th className="px-4 py-3 font-medium">Dispatch</th>
                        <th className="px-4 py-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.map((employee) => (
                        <tr key={employee.id} className="border-t border-slate-200">
                          <td className="px-4 py-3">
                            <div className="font-medium">{employee.name}</div>
                            <div className="text-xs text-slate-500">{employee.email}</div>
                          </td>
                          <td className="px-4 py-3">{employee.id}</td>
                          <td className="px-4 py-3">{employee.route}</td>
                          <td className="px-4 py-3">{employee.service}</td>
                          <td className="px-4 py-3">
                            <span className={`rounded-full px-3 py-1 text-xs font-medium ${pill(employee.training)}`}>
                              {employee.training}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`rounded-full px-3 py-1 text-xs font-medium ${pill(employee.bionic)}`}>
                              {employee.bionic}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`rounded-full px-3 py-1 text-xs font-medium ${pill(employee.dispatch)}`}>
                              {employee.dispatch}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`rounded-full px-3 py-1 text-xs font-medium ${pill(employee.status)}`}>
                              {employee.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h2 className="text-xl font-semibold">Directory Summary</h2>
                  <div className="mt-4 space-y-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Dispatch Qualified</span>
                      <span className="font-medium">18</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Bionic Qualified</span>
                      <span className="font-medium">27</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Training In Progress</span>
                      <span className="font-medium">9</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Needs Review</span>
                      <span className="font-medium">4</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h2 className="text-xl font-semibold">Selected Employee</h2>
                  <div className="mt-4 rounded-xl border border-slate-200 p-4">
                    <div className="text-lg font-semibold">[Sample Name]</div>
                    <div className="mt-1 text-sm text-slate-500">S4021 · Driver</div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between"><span>Phone</span><span>(319) 555-0142</span></div>
                      <div className="flex justify-between"><span>Primary Route</span><span>31 Red Route</span></div>
                      <div className="flex justify-between"><span>Primary Service</span><span>Morning</span></div>
                      <div className="flex justify-between"><span>Seniority</span><span>2.5 years</span></div>
                      <div className="flex justify-between"><span>Current Status</span><span>Active</span></div>
                    </div>
                    <button className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium">
                      View Full Profile
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h2 className="text-xl font-semibold">Recent Changes</h2>
                  <div className="mt-4 space-y-3">
                    {recentChanges.map((change) => (
                      <div key={change.item} className="rounded-xl border border-slate-200 p-3">
                        <div className="text-sm font-medium">{change.item}</div>
                        <div className="mt-1 text-xs text-slate-500">{change.meta}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
