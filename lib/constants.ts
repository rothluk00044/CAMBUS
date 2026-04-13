export const routeNames: Record<string, string> = {
  ROUTE_31_RED: '31 Red Route',
  ROUTE_32_BLUE: '32 Blue Route',
  ROUTE_35_INTERDORM: '35 Interdorm',
  ROUTE_36_RESEARCH_PARK: '36 Research Park',
  ROUTE_42_HAWKEYE_PENTACREST: '42 Hawkeye Pentacrest',
  ROUTE_52_FINKBINE_PENTACREST: '52 Finkbine Pentacrest',
}

export const serviceNames: Record<string, string> = {
  MORNING: 'Morning',
  AFTERNOON: 'Afternoon',
  TRAINING: 'Training',
  SPECIAL: 'Special',
}

export const employeeRoles: Record<string, string> = {
  DRIVER: 'Driver',
  SUPERVISOR: 'Supervisor',
  DISPATCHER: 'Dispatcher',
  ADMIN: 'Admin',
  TRAINEE: 'Trainee',
}

export const employeeStatus: Record<string, string> = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
  ON_LEAVE: 'On Leave',
  TERMINATED: 'Terminated',
  NEEDS_REVIEW: 'Needs Review',
}

export const incidentTypes: Record<string, string> = {
  SIGN_OFF: 'Sign-Off',
  LATE_ARRIVAL: 'Late Arrival',
  EARLY_DEPARTURE: 'Early Departure',
  ABSENCE: 'Absence',
  OTHER: 'Other',
}

export const availabilityStatuses: Record<string, string> = {
  AVAILABLE: 'Available',
  LIMITED: 'Limited',
  UNAVAILABLE: 'Unavailable',
}

export const qualificationStatus: Record<string, string> = {
  NOT_QUALIFIED: 'Not Qualified',
  QUALIFIED: 'Qualified',
  PENDING_REVIEW: 'Pending Review',
  EXPIRED: 'Expired',
}

export function getQualificationVariant(status: string): 'success' | 'warning' | 'neutral' | 'error' {
  if (status === 'QUALIFIED' || status === 'COMPLETE') return 'success'
  if (status === 'PENDING_REVIEW') return 'warning'
  if (status === 'EXPIRED' || status === 'NOT_QUALIFIED') return 'error'
  return 'neutral'
}
