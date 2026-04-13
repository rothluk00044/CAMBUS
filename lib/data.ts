import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getEmployees() {
  return prisma.employee.findMany({
    include: {
      qualifications: true,
      availability: true,
    },
    orderBy: { name: 'asc' },
  })
}

export async function getEmployeeById(id: string) {
  return prisma.employee.findUnique({
    where: { id },
    include: {
      qualifications: true,
      availability: true,
      incidents: {
        include: {
          enteredBy: true,
        },
        orderBy: { date: 'desc' },
        take: 10,
      },
    },
  })
}

export async function getEmployeesByRoute(route: string) {
  return prisma.employee.findMany({
    where: { primaryRoute: route },
    include: {
      qualifications: true,
    },
  })
}

export async function getEmployeeStats() {
  const active = await prisma.employee.count({ where: { status: 'ACTIVE' } })
  const inactive = await prisma.employee.count({ where: { status: 'INACTIVE' } })
  const needsReview = await prisma.employee.count({ where: { status: 'NEEDS_REVIEW' } })
  const totalEmployees = await prisma.employee.count()

  return {
    total: totalEmployees,
    active,
    inactive,
    needsReview,
  }
}

export async function getTodaysSchedule() {
  // Get coverage needs for today
  const coverageNeeds = await prisma.coverageNeed.findMany({
    orderBy: { time: 'asc' },
  })

  return coverageNeeds
}

export async function getRecentIncidents(limit: number = 10) {
  return prisma.incident.findMany({
    include: {
      employee: true,
      enteredBy: true,
    },
    orderBy: { date: 'desc' },
    take: limit,
  })
}

export async function getAlerts() {
  // Get employees with recent incidents
  const incidentsLast7Days = await prisma.incident.findMany({
    where: {
      date: {
        gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      },
    },
    include: {
      employee: true,
      enteredBy: true,
    },
  })

  // Group by employee and count
  const employeeIncidents: Record<string, typeof incidentsLast7Days> = {}
  incidentsLast7Days.forEach((incident) => {
    if (!employeeIncidents[incident.employeeId]) {
      employeeIncidents[incident.employeeId] = []
    }
    employeeIncidents[incident.employeeId].push(incident)
  })

  // Create alerts
  const alerts = Object.entries(employeeIncidents)
    .filter(([_, incidents]) => incidents.length >= 2)
    .map(([_, incidents]) => ({
      employee: incidents[0].employee.name,
      date: new Date().toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      }),
      reason: `${incidents.length} recent sign-offs`,
      enteredBy: incidents[0].enteredBy.name,
    }))

  // Check for missing qualifications
  const specialServices = await prisma.specialService.findMany({
    where: {
      date: {
        gte: new Date(),
      },
    },
  })

  for (const service of specialServices) {
    // Check if employees on that route have special service qualification
    const employees = await prisma.employee.findMany({
      where: { primaryRoute: service.route },
      include: { qualifications: true },
    })

    for (const emp of employees) {
      const hasSpecialQual = emp.qualifications.some((q) => q.qualificationType === 'SPECIAL_SERVICE')
      if (!hasSpecialQual) {
        alerts.push({
          employee: emp.name,
          date: new Date().toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
          }),
          reason: 'Missing qualification for upcoming special service',
          enteredBy: 'System',
        })
      }
    }
  }

  return alerts.slice(0, 5)
}

export async function getAvailabilityGrid() {
  const employees = await prisma.employee.findMany({
    include: { availability: true },
    orderBy: { name: 'asc' },
  })

  return employees.map((emp) => {
    const availMap: Record<number, any> = {}
    emp.availability.forEach((a) => {
      availMap[a.dayOfWeek] = a
    })

    return {
      id: emp.id,
      name: emp.name,
      route: emp.primaryRoute,
      service: emp.primaryService,
      availability: [
        availMap[0] || { dayOfWeek: 0, availabilityStatus: 'AVAILABLE' },
        availMap[1] || { dayOfWeek: 1, availabilityStatus: 'AVAILABLE' },
        availMap[2] || { dayOfWeek: 2, availabilityStatus: 'AVAILABLE' },
        availMap[3] || { dayOfWeek: 3, availabilityStatus: 'AVAILABLE' },
        availMap[4] || { dayOfWeek: 4, availabilityStatus: 'AVAILABLE' },
      ],
    }
  })
}

export async function getCoverageNeeds() {
  return prisma.coverageNeed.findMany({
    orderBy: { time: 'asc' },
  })
}

export async function getSpecialServices() {
  return prisma.specialService.findMany({
    where: {
      date: {
        gte: new Date(),
      },
    },
    orderBy: { date: 'asc' },
  })
}

export async function getReports() {
  const totalEmployees = await prisma.employee.count()
  const activeEmployees = await prisma.employee.count({ where: { status: 'ACTIVE' } })
  const incidents = await prisma.incident.findMany({})
  const specialServices = await prisma.specialService.findMany({})

  return {
    totalEmployees,
    activeEmployees,
    inactiveEmployees: totalEmployees - activeEmployees,
    totalIncidents: incidents.length,
    totalSpecialServices: specialServices.length,
  }
}
