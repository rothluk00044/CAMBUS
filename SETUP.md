# CAMBUS Operations Platform - Setup Instructions

## Prerequisites

- Node.js 18+ installed
- npm or yarn

## One-Command Setup

```bash
cd "c:\Users\rothl\CAMBUS\CAMBUS"
npm install && npx prisma migrate dev --name init && npm run db:seed && npm run dev
```

This will:
1. Install all dependencies
2. Create SQLite database and schema
3. Seed with 10 sample employees and realistic data
4. Start the development server at http://localhost:3000

## Step-by-Step Setup (if one-command fails)

### Step 1: Install Dependencies
```bash
cd "c:\Users\rothl\CAMBUS\CAMBUS"
npm install
```

### Step 2: Initialize Database
```bash
npx prisma migrate dev --name init
```

This creates `prisma/dev.db` with all tables.

### Step 3: Seed Sample Data
```bash
npm run db:seed
```

This adds:
- 10 sample employees (drivers, supervisors, trainees)
- Weekly availability records
- Qualifications (Bionic, Dispatch)
- 5 recent incidents
- 5 special services
- 3 coverage needs

### Step 4: Start Development Server
```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## What You'll See

### Dashboard Page (/)
- Summary metrics: Active employees, staffing gaps, special services
- Coverage needs table
- Active alerts
- Recent incidents log

### Employee Directory (/employees)
- Sortable table of all 10 employees
- Qualifications shown as pills
- Status badges
- Click "View" to see employee detail

### Employee Detail (/employees/[id])
- Full employee profile
- Qualifications breakdown
- Weekly availability
- Recent incidents for that employee

### Availability (/availability)
- Weekly grid showing all employees' availability
- Color-coded: Green (Available), Yellow (Limited), Red (Unavailable)
- Open coverage needs listed below

### Reports (/reports)
- Key metrics: Total employees, active today, incidents, special services
- Route coverage percentages
- Qualification breakdown
- Incident distribution by service type
- Business insights

## Navigation

Use the left sidebar to navigate between pages. The current page is highlighted.

## Sample Data Included

**10 Employees:**
- John Smith (S4021) - Driver, Bionic qualified
- Sarah Johnson (S4178) - Driver, Dispatch + Bionic
- Michael Chen (S4230) - Trainee, In training
- Emily Davis (S4014) - Driver, Status: Needs Review
- Robert Wilson (S4186) - Driver, Dispatch qualified
- Jessica Martinez (S4052) - Inactive employee
- David Lee (S4045) - 3 recent sign-offs
- Amanda Brown (S4063) - Missing special service qual
- Marcus Taylor (S4089) - Supervisor
- Lisa Anderson (S4101) - Driver, Both qualifications

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
- Special

## Development

To modify code:

1. Edit any `.tsx` files in `app/` or `components/`
2. Changes auto-refresh in browser
3. Add new routes by creating new folders in `app/`

To modify database:

1. Update `prisma/schema.prisma`
2. Run: `npx prisma migrate dev --name descriptive_name`
3. Run: `npm run db:seed` to repopulate

## Troubleshooting

**"npm: command not found"**
- Node.js not installed. Download from https://nodejs.org/

**"Port 3000 already in use"**
- Another app is using port 3000
- Stop the other app or run: `npm run dev -- -p 3001`

**Database errors**
- Run: `npm run db:reset` to completely reset
- Then: `npm run db:seed` to reseed

**TypeScript errors**
- Run: `npm install`
- Restart VS Code
- Run: `npm run build` to force type check

## What's Next

The app is ready for development. To add features:

1. **Create new pages** – Add folders in `app/`
2. **Add database queries** – Edit `lib/data.ts`
3. **Create UI components** – Add to `components/`
4. **Modify schema** – Edit `prisma/schema.prisma` then migrate

All code is fully typed with TypeScript and uses Next.js 15 best practices.

## Support

- Check README.md for architecture overview
- Review code comments in type functions
- Inspect sample data in `prisma/seed.ts`
