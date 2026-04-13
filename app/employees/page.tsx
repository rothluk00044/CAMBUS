import { Card, PageHeader } from '@/components/UIComponents'

export default function EmployeesPage() {
  const employees = [
    {
      id: 'S4021',
      name: 'John Smith',
      email: 'john.smith@uiowa.edu',
      role: 'Driver',
      route: '31 Red Route',
      status: 'Active',
    },
    {
      id: 'S4178',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@uiowa.edu',
      role: 'Driver',
      route: '32 Blue Route',
      status: 'Active',
    },
  ]

  return (
    <div className="p-8">
      <div className="mx-auto max-w-7xl">
        <PageHeader 
          title="Employee Directory" 
          subtitle="Workforce Operations Platform"
        />

        <Card>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">ID</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Role</th>
                  <th className="px-4 py-3 font-medium">Route</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.id} className="border-t border-slate-200 hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium">{emp.name}</td>
                    <td className="px-4 py-3 text-slate-600">{emp.id}</td>
                    <td className="px-4 py-3 text-slate-600">{emp.email}</td>
                    <td className="px-4 py-3">{emp.role}</td>
                    <td className="px-4 py-3">{emp.route}</td>
                    <td className="px-4 py-3">{emp.status}</td>
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
