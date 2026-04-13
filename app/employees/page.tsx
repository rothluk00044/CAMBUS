import { Card, PageHeader, Pill } from '@/components/UIComponents'
import { getEmployees } from '@/lib/data'
import { routeNames, serviceNames, employeeStatus, getQualificationVariant } from '@/lib/constants'
import Link from 'next/link'

export default async function EmployeesPage() {
  const employees = await getEmployees()

  return (
    <div className="p-8">
      <div className="mx-auto max-w-7xl">
        <PageHeader 
          title="Employee Directory" 
          subtitle="Workforce Operations Platform"
        />

        <Card>
          <div className="mb-4 flex items-center justify-between">
            <input
              type="text"
              placeholder="Search employees..."
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">ID</th>
                  <th className="px-4 py-3 font-medium">Role</th>
                  <th className="px-4 py-3 font-medium">Route</th>
                  <th className="px-4 py-3 font-medium">Qualifications</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.id} className="border-t border-slate-200 hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium">{emp.name}</td>
                    <td className="px-4 py-3 text-slate-600 font-mono text-xs">{emp.employeeId}</td>
                    <td className="px-4 py-3">{emp.role.charAt(0) + emp.role.slice(1).toLowerCase()}</td>
                    <td className="px-4 py-3">{emp.primaryRoute ? routeNames[emp.primaryRoute] : '—'}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {emp.bionicQualified && <Pill variant="success">Bionic</Pill>}
                        {emp.dispatchQualified && <Pill variant="success">Dispatch</Pill>}
                        {!emp.bionicQualified && !emp.dispatchQualified && <span className="text-xs text-slate-500">—</span>}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <Pill variant={emp.status === 'ACTIVE' ? 'success' : emp.status === 'NEEDS_REVIEW' ? 'warning' : 'neutral'}>
                        {employeeStatus[emp.status]}
                      </Pill>
                    </td>
                    <td className="px-4 py-3">
                      <Link 
                        href={`/employees/${emp.id}`}
                        className="text-blue-600 hover:underline text-sm font-medium"
                      >
                        View
                      </Link>
                    </td>
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

