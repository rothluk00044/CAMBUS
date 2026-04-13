import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Clear existing data
  await prisma.auditLog.deleteMany()
  await prisma.incident.deleteMany()
  await prisma.qualification.deleteMany()
  await prisma.availability.deleteMany()
  await prisma.coverageNeed.deleteMany()
  await prisma.specialService.deleteMany()
  await prisma.employee.deleteMany()

  // Create employees
  const employees = await Promise.all([
    prisma.employee.create({
      data: {
        employeeId: 'S4021',
        name: 'John Smith',
        email: 'john.smith@uiowa.edu',
        phone: '(319) 555-0142',
        role: 'DRIVER',
        status: 'ACTIVE',
        seniority: '2.5 years',
        primaryRoute: 'ROUTE_31_RED',
        primaryService: 'MORNING',
        trainingStatus: 'COMPLETE',
        bionicQualified: true,
        dispatchQualified: false,
        notes: 'Reliable and punctual',
      },
    }),
    prisma.employee.create({
      data: {
        employeeId: 'S4178',
        name: 'Sarah Johnson',
        email: 'sarah.johnson@uiowa.edu',
        phone: '(319) 555-0194',
        role: 'DRIVER',
        status: 'ACTIVE',
        seniority: '1.5 years',
        primaryRoute: 'ROUTE_32_BLUE',
        primaryService: 'AFTERNOON',
        trainingStatus: 'COMPLETE',
        bionicQualified: true,
        dispatchQualified: true,
        notes: null,
      },
    }),
    prisma.employee.create({
      data: {
        employeeId: 'S4230',
        name: 'Michael Chen',
        email: 'michael.chen@uiowa.edu',
        phone: '(319) 555-0137',
        role: 'TRAINEE',
        status: 'ACTIVE',
        seniority: '4 months',
        primaryRoute: 'ROUTE_35_INTERDORM',
        primaryService: 'TRAINING',
        trainingStatus: 'IN_PROGRESS',
        bionicQualified: false,
        dispatchQualified: false,
        notes: 'On track for certification',
      },
    }),
    prisma.employee.create({
      data: {
        employeeId: 'S4014',
        name: 'Emily Davis',
        email: 'emily.davis@uiowa.edu',
        phone: '(319) 555-0170',
        role: 'DRIVER',
        status: 'NEEDS_REVIEW',
        seniority: '3 years',
        primaryRoute: 'ROUTE_42_HAWKEYE_PENTACREST',
        primaryService: 'MORNING',
        trainingStatus: 'COMPLETE',
        bionicQualified: true,
        dispatchQualified: true,
        notes: 'Recent performance concerns - follow up required',
      },
    }),
    prisma.employee.create({
      data: {
        employeeId: 'S4186',
        name: 'Robert Wilson',
        email: 'robert.wilson@uiowa.edu',
        phone: '(319) 555-0125',
        role: 'DRIVER',
        status: 'ACTIVE',
        seniority: '10 months',
        primaryRoute: 'ROUTE_36_RESEARCH_PARK',
        primaryService: 'SPECIAL',
        trainingStatus: 'COMPLETE',
        bionicQualified: false,
        dispatchQualified: true,
        notes: 'Excellent customer feedback',
      },
    }),
    prisma.employee.create({
      data: {
        employeeId: 'S4052',
        name: 'Jessica Martinez',
        email: 'jessica.martinez@uiowa.edu',
        phone: '(319) 555-0159',
        role: 'DRIVER',
        status: 'INACTIVE',
        seniority: '2 years',
        primaryRoute: 'ROUTE_52_FINKBINE_PENTACREST',
        primaryService: 'AFTERNOON',
        trainingStatus: 'COMPLETE',
        bionicQualified: true,
        dispatchQualified: false,
        notes: 'On temporary leave',
      },
    }),
    prisma.employee.create({
      data: {
        employeeId: 'S4045',
        name: 'David Lee',
        email: 'david.lee@uiowa.edu',
        phone: '(319) 555-0148',
        role: 'DRIVER',
        status: 'ACTIVE',
        seniority: '1.2 years',
        primaryRoute: 'ROUTE_31_RED',
        primaryService: 'MORNING',
        trainingStatus: 'COMPLETE',
        bionicQualified: true,
        dispatchQualified: false,
        notes: '3 recent sign-offs noted',
      },
    }),
    prisma.employee.create({
      data: {
        employeeId: 'S4063',
        name: 'Amanda Brown',
        email: 'amanda.brown@uiowa.edu',
        phone: '(319) 555-0156',
        role: 'DRIVER',
        status: 'ACTIVE',
        seniority: '6 months',
        primaryRoute: 'ROUTE_32_BLUE',
        primaryService: 'AFTERNOON',
        trainingStatus: 'COMPLETE',
        bionicQualified: false,
        dispatchQualified: false,
        notes: 'Missing special service qualification',
      },
    }),
    prisma.employee.create({
      data: {
        employeeId: 'S4089',
        name: 'Marcus Taylor',
        email: 'marcus.taylor@uiowa.edu',
        phone: '(319) 555-0163',
        role: 'SUPERVISOR',
        status: 'ACTIVE',
        seniority: '4 years',
        primaryRoute: 'ROUTE_36_RESEARCH_PARK',
        primaryService: 'SPECIAL',
        trainingStatus: 'COMPLETE',
        bionicQualified: true,
        dispatchQualified: true,
        notes: null,
      },
    }),
    prisma.employee.create({
      data: {
        employeeId: 'S4101',
        name: 'Lisa Anderson',
        email: 'lisa.anderson@uiowa.edu',
        phone: '(319) 555-0171',
        role: 'DRIVER',
        status: 'ACTIVE',
        seniority: '2.8 years',
        primaryRoute: 'ROUTE_31_RED',
        primaryService: 'MORNING',
        trainingStatus: 'COMPLETE',
        bionicQualified: true,
        dispatchQualified: true,
        notes: null,
      },
    }),
  ])

  console.log(`✓ Created ${employees.length} employees`)

  // Create availability records (Monday-Friday for each employee)
  const availabilityData = []
  for (const emp of employees) {
    for (let day = 0; day < 5; day++) {
      // Generate some variety
      const statuses: Array<'AVAILABLE' | 'LIMITED' | 'UNAVAILABLE'> = ['AVAILABLE', 'LIMITED', 'UNAVAILABLE']
      const status = statuses[Math.floor(Math.random() * statuses.length)]

      availabilityData.push(
        prisma.availability.create({
          data: {
            employeeId: emp.id,
            dayOfWeek: day,
            availabilityStatus: status,
            notes: status === 'LIMITED' ? 'Limited availability after 3 PM' : null,
          },
        })
      )
    }
  }

  await Promise.all(availabilityData)
  console.log('✓ Created availability records')

  // Create qualifications
  const qualifications = []
  for (const emp of employees) {
    if (emp.bionicQualified) {
      qualifications.push(
        prisma.qualification.create({
          data: {
            employeeId: emp.id,
            qualificationType: 'BIONIC',
            status: 'QUALIFIED',
            earnedAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), // 90 days ago
          },
        })
      )
    }
    if (emp.dispatchQualified) {
      qualifications.push(
        prisma.qualification.create({
          data: {
            employeeId: emp.id,
            qualificationType: 'DISPATCH',
            status: 'QUALIFIED',
            earnedAt: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000), // 180 days ago
          },
        })
      )
    }
  }

  await Promise.all(qualifications)
  console.log('✓ Created qualifications')

  // Create incidents
  const supervisor = employees.find((e) => e.role === 'SUPERVISOR')!

  const incidents = [
    prisma.incident.create({
      data: {
        employeeId: employees[0].id, // John Smith
        date: new Date('2026-04-12'),
        type: 'SIGN_OFF',
        reason: 'Illness',
        points: 1,
        enteredById: supervisor.id,
        relatedShift: '36 Research Park 7:30 AM',
        notes: 'Doctor note provided',
      },
    }),
    prisma.incident.create({
      data: {
        employeeId: employees[1].id, // Sarah Johnson
        date: new Date('2026-04-12'),
        type: 'LATE_ARRIVAL',
        reason: 'Traffic',
        points: 0.5,
        enteredById: supervisor.id,
        relatedShift: '31 Red Route 3:30 AM',
        notes: null,
      },
    }),
    prisma.incident.create({
      data: {
        employeeId: employees[6].id, // David Lee
        date: new Date('2026-04-11'),
        type: 'SIGN_OFF',
        reason: 'Personal',
        points: 1,
        enteredById: supervisor.id,
        notes: null,
      },
    }),
    prisma.incident.create({
      data: {
        employeeId: employees[6].id, // David Lee
        date: new Date('2026-04-10'),
        type: 'SIGN_OFF',
        reason: 'Illness',
        points: 1,
        enteredById: supervisor.id,
        notes: null,
      },
    }),
    prisma.incident.create({
      data: {
        employeeId: employees[6].id, // David Lee
        date: new Date('2026-04-09'),
        type: 'SIGN_OFF',
        reason: 'Vehicle issue',
        points: 1,
        enteredById: supervisor.id,
        notes: 'Personal vehicle problems',
      },
    }),
  ]

  await Promise.all(incidents)
  console.log('✓ Created incidents')

  // Create special services
  const specialServices = [
    prisma.specialService.create({
      data: {
        title: 'Football Stadium Event',
        date: new Date('2026-04-15'),
        route: 'ROUTE_42_HAWKEYE_PENTACREST',
        service: 'SPECIAL',
        staffingNeed: 3,
        fillStatus: 'FILLED',
        notes: 'Game day coverage',
      },
    }),
    prisma.specialService.create({
      data: {
        title: 'Campus Fair',
        date: new Date('2026-04-16'),
        route: 'ROUTE_31_RED',
        service: 'SPECIAL',
        staffingNeed: 2,
        fillStatus: 'PARTIAL',
        notes: null,
      },
    }),
    prisma.specialService.create({
      data: {
        title: 'Evening Concert',
        date: new Date('2026-04-17'),
        route: 'ROUTE_35_INTERDORM',
        service: 'SPECIAL',
        staffingNeed: 2,
        fillStatus: 'OPEN',
        notes: 'High visibility route',
      },
    }),
    prisma.specialService.create({
      data: {
        title: 'University Closed - Emergency Service Only',
        date: new Date('2026-04-18'),
        route: 'ROUTE_36_RESEARCH_PARK',
        service: 'SPECIAL',
        staffingNeed: 1,
        fillStatus: 'FILLED',
        notes: null,
      },
    }),
    prisma.specialService.create({
      data: {
        title: 'Graduation Shuttle',
        date: new Date('2026-05-10'),
        route: 'ROUTE_32_BLUE',
        service: 'SPECIAL',
        staffingNeed: 4,
        fillStatus: 'OPEN',
        notes: 'Multiple routes needed',
      },
    }),
  ]

  await Promise.all(specialServices)
  console.log('✓ Created special services')

  // Create coverage needs
  const coverageNeeds = [
    prisma.coverageNeed.create({
      data: {
        route: 'ROUTE_52_FINKBINE_PENTACREST',
        service: 'AFTERNOON',
        time: '1:40 PM',
        needDescription: '1 driver needed',
        status: 'OPEN',
      },
    }),
    prisma.coverageNeed.create({
      data: {
        route: 'ROUTE_31_RED',
        service: 'MORNING',
        time: '6:15 AM',
        needDescription: 'Backup driver needed',
        status: 'NEEDS_BACKUP',
      },
    }),
    prisma.coverageNeed.create({
      data: {
        route: 'ROUTE_36_RESEARCH_PARK',
        service: 'SPECIAL',
        time: '5:20 PM',
        needDescription: 'Training support needed',
        status: 'REVIEWING_OPTIONS',
      },
    }),
  ]

  await Promise.all(coverageNeeds)
  console.log('✓ Created coverage needs')

  console.log('✅ Database seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
