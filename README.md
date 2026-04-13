# CAMBUS Operations Platform, (in dev)

Internal workforce operations web application for university student transportation service.

## Features

- **Employee Directory** – Manage employee profiles, qualifications, and status
- **Availability Management** – Weekly availability tracking and coverage gap identification  
- **Incident Logging** – Record and track sign-offs, late arrivals, and other incidents
- **Qualification Tracking** – Monitor certifications (Bionic, Dispatch, Special Services)
- **Coverage Needs** – View and manage open staffing needs
- **Analytics** – Reports on coverage rates, qualifications, and trends
- **Audit Trail** – Future-ready for comprehensive activity logging

## Tech Stack

- **Frontend:** Next.js 15 (App Router), React, TypeScript, Tailwind CSS
- **Backend:** Next.js Server Components & Actions
- **Database:** SQLite (Prisma ORM)
- **Development:** Local SQLite file-based database

## Quick Start

### Installation

```bash
cd c:\Users\rothl\CAMBUS\CAMBUS

# Install dependencies
npm install

# Set up database
npx prisma migrate dev --name init

# Seed with sample data
npm run db:seed

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm start` – Start production server
- `npm run lint` – Run TypeScript linter
- `npm run prisma:migrate` – Run migrations
- `npm run db:seed` – Seed database with sample data
- `npm run db:reset` – Reset database to initial state

## Project Structure

```
app/
├── layout.tsx              # Root layout with sidebar
├── globals.css             # Global styles
├── page.tsx                # Dashboard
├── employees/
│   ├── page.tsx            # Employee directory
│   └── [id]/
│       └── page.tsx        # Employee detail page
├── availability/
│   └── page.tsx            # Availability & coverage management
└── reports/
    └── page.tsx            # Analytics & reporting

components/
├── Sidebar.tsx             # Main navigation sidebar
└── UIComponents.tsx        # Reusable UI building blocks

lib/
├── constants.ts            # Route/service/status names and mappings
└── data.ts                 # Server-side data access functions

prisma/
├── schema.prisma           # Database schema with 7 entities
├── seed.ts                 # Sample data generator
└── dev.db                  # SQLite database file
```

## Database Schema

### Entities

1. **Employee** – Workforce members with qualifications and status
2. **Availability** – Weekly availability tracking (Mon-Fri)
3. **Qualification** – Certifications (Bionic, Dispatch, etc.)
4. **Incident** – Sign-offs, late arrivals, absences with points
5. **SpecialService** – Special events requiring staffing
6. **CoverageNeed** – Open shifts and staffing gaps
7. **AuditLog** – Change tracking for audit trail

## Sample Data, (will upgrade to dynamic entries next branch)

The database seeds with:
- 10 sample employees with various roles and qualifications
- Availability data for each employee
- Qualifications (Bionic and Dispatch)
- Recent incidents (sign-offs, late arrivals)
- Coverage needs and special services

## Current Routes & Services, (will also add in all routes and services next branch)

**Routes:**
- 31 Red Route
- 32 Blue Route
- 35 Interdorm
- 36 Research Park
- 42 Hawkeye Pentacrest
- 52 Finkbine Pentacrest

**Services:**
- Morning
- Afternoon
- Training
- Special Events

## Architecture Notes

### Server Components

All main pages use Next.js 15 App Router server components for:
- Direct database access via Prisma
- Server-side data fetching
- No unnecessary client-side JavaScript

### Data Access Layer

`lib/data.ts` provides all server-side queries:
- Employee management
- Availability & coverage queries
- Incident/qualification tracking
- Reporting aggregations

### UI Components

`components/UIComponents.tsx` provides reusable building blocks:
- StatCard – Key metric display
- Card – Content container
- Pill – Status/qualification badges
- Button – Action buttons
- PageHeader – Page title & subtitle

## Environment

Database uses SQLite with file at `prisma/dev.db`. Connection string in `.env.local`:

```
DATABASE_URL="file:./prisma/dev.db"
```

## Development

- Edit `.tsx` files directly
- Database queries in `lib/data.ts`
- UI components in `components/`
- Database schema in `prisma/schema.prisma`

Run `npm run dev` to see changes automatically.

## Future Features

- User authentication & role-based access
- Advanced search & filtering
- Bulk operations (CSV import/export)
- Email notifications
- Policy automation (sign-off escalation, qualification expiration alerts)
- Advanced reporting (custom date ranges, exports)
- Mobile app (React Native)

## TypeScript

Strict mode enabled. All code is fully typed.

## Tailwind CSS

Professional internal admin design using:
- Slate color palette
- Minimal, clean aesthetic
- Responsive grid layouts
- No unnecessary animations

## Support

For questions about the architecture or development, refer to the inline code comments and this README.
