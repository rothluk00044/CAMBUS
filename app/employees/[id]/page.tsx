import { Card, PageHeader, Pill } from '@/components/UIComponents'
import { getEmployeeById } from '@/lib/data'
import { routeNames, serviceNames, employeeStatus, qualificationStatus } from '@/lib/constants'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function EmployeeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const employee = await getEmployeeById(id)

  if (!employee) {
    notFound()
  }

  const getVariant = (status: string): 'success' | 'warning' | 'neutral' | 'error' => {
    if (status === 'QUALIFIED' || status === 'COMPLETE') return 'success'
    if (status === 'PENDING_REVIEW') return 'warning'
    if (status === 'EXPIRED' || status === 'NOT_QUALIFIED') return 'error'
    return 'neutral'
  }

  return (
    <div className="p-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/employees" className="mb-6 inline-flex text-blue-600 hover:underline text-sm">
          ← Back to Employees
        </Link>

        <PageHeader title={employee.name} subtitle="Employee Profile" />

        <div className="grid gap-6 xl:grid-cols-3">
          {/* Summary */}
          <Card className="xl:col-span-2">
            <h2 className="mb-4 text-xl font-semibold">Summary</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-slate-500">Employee ID</div>
                <div className="mt-1 font-mono text-sm font-medium">{employee.employeeId}</div>
              </div>
              <div>
                <div className="text-sm text-slate-500">Status</div>
                <div className="mt-1">
                  <Pill variant={employee.status === 'ACTIVE' ? 'success' : employee.status === 'NEEDS_REVIEW' ? 'warning' : 'neutral'}>
                    {employeeStatus[employee.status]}
                  </Pill>
                </div>
              </div>
              <div>
                <div className="text-sm text-slate-500">Role</div>
                <div className="mt-1 font-medium">{employee.role.charAt(0) + employee.role.slice(1).toLowerCase()}</div>
              </div>
              <div>
                <div className="text-sm text-slate-500">Seniority</div>
                <div className="mt-1 font-medium">{employee.seniority || '—'}</div>
              </div>
              <div>
                <div className="text-sm text-slate-500">Email</div>
                <div className="mt-1 text-sm text-blue-600">{employee.email}</div>
              </div>
              <div>
                <div className="text-sm text-slate-500">Phone</div>
                <div className="mt-1 text-sm">{employee.phone || '—'}</div>
              </div>
              <div>
                <div className="text-sm text-slate-500">Primary Route</div>
                <div className="mt-1 font-medium">{employee.primaryRoute ? routeNames[employee.primaryRoute] : '—'}</div>
              </div>
              <div>
                <div className="text-sm text-slate-500">Primary Service</div>
                <div className="mt-1 font-medium">{employee.primaryService ? serviceNames[employee.primaryService] : '—'}</div>
              </div>
            </div>
            {employee.notes && (
              <div className="mt-6 border-t pt-4">
                <div className="text-sm text-slate-500">Notes</div>
                <div className="mt-2 text-sm">{employee.notes}</div>
              </div>
            )}
          </Card>

          {/* Qualifications */}
          <Card>
            <h2 className="mb-4 text-lg font-semibold">Qualifications</h2>
            <div className="space-y-3">
              {employee.qualifications.length > 0 ? (
                employee.qualifications.map((qual) => (
                  <div key={qual.id} className="rounded-lg border border-slate-200 p-3">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-sm">{qual.qualificationType.charAt(0) + qual.qualificationType.slice(1).toLowerCase()}</div>
                      <Pill variant={getVariant(qual.status)}>
                        {qualificationStatus[qual.status] || qual.status}
                      </Pill>
                    </div>
                    {qual.earnedAt && (
                      <div className="mt-2 text-xs text-slate-500">
                        Earned: {new Date(qual.earnedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    )}
                    {qual.expiresAt && (
                      <div className="text-xs text-slate-500">
                        Expires: {new Date(qual.expiresAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-sm text-slate-500">No qualifications yet</div>
              )}
            </div>
          </Card>
        </div>

        {/* Recent Incidents */}
        {employee.incidents.length > 0 && (
          <Card className="mt-6">
            <h2 className="mb-4 text-xl font-semibold">Recent Incidents</h2>
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-medium">Date</th>
                    <th className="px-4 py-3 font-medium">Type</th>
                    <th className="px-4 py-3 font-medium">Reason</th>
                    <th className="px-4 py-3 font-medium">Points</th>
                    <th className="px-4 py-3 font-medium">Related Shift</th>
                  </tr>
                </thead>
                <tbody>
                  {employee.incidents.map((incident) => (
                    <tr key={incident.id} className="border-t border-slate-200 hover:bg-slate-50">
                      <td className="px-4 py-3 text-slate-600">
                        {new Date(incident.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' })}
                      </td>
                      <td className="px-4 py-3">{incident.type.replace(/_/g, ' ')}</td>
                      <td className="px-4 py-3 text-slate-600">{incident.reason || '—'}</td>
                      <td className="px-4 py-3">{incident.points > 0 ? `+${incident.points}` : incident.points}</td>
                      <td className="px-4 py-3 text-slate-600">{incident.relatedShift || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* Availability */}
        {employee.availability.length > 0 && (
          <Card className="mt-6">
            <h2 className="mb-4 text-xl font-semibold">Weekly Availability</h2>
            <div className="grid grid-cols-5 gap-3">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, idx) => {
                const avail = employee.availability.find((a) => a.dayOfWeek === idx)
                const status = avail?.temporaryOverride || avail?.availabilityStatus || 'AVAILABLE'
                const variant = status === 'AVAILABLE' ? 'success' : status === 'LIMITED' ? 'warning' : 'error'
                return (
                  <div key={day} className="text-center">
                    <div className="text-xs font-medium text-slate-600 mb-2">{day}</div>
                    <Pill variant={variant}>{status.replace(/_/g, ' ')}</Pill>
                  </div>
                )
              })}
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
