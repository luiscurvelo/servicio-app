# Servicio — Marketplace MVP

Local services marketplace (customers post jobs, pros quote, bookings, messaging, reviews).

## Current status

| Phase | Day | Status |
| --- | --- | --- |
| 1 — Foundation | 1 Monorepo scaffold | ✅ Done |
| 1 — Foundation | 2 Backend shell | ✅ Done |
| 1 — Foundation | 3 Database layer | ⏳ Next |

See [docs/MVP-DAILY-PHASES.md](./docs/MVP-DAILY-PHASES.md) for the full plan.

## Prerequisites

- **Node.js 26** — use [nvm](https://github.com/nvm-sh/nvm): `nvm install` (reads `.nvmrc`)
- **pnpm 10** — `corepack enable && corepack prepare pnpm@10.12.4 --activate`
- **PostgreSQL** — required from Phase 1 Day 3 onward (no Docker for now)

### PostgreSQL (local, no Docker)

Install via Homebrew:

```bash
brew install postgresql@16
brew services start postgresql@16
createdb servicio_dev
```

Or use [Postgres.app](https://postgresapp.com/) and create a `servicio_dev` database.

Connection string (used in Phase 1 Day 3):

```
DATABASE_URL=postgresql://localhost:5432/servicio_dev
```

## Getting started

```bash
pnpm install
pnpm build
pnpm typecheck
pnpm lint
```

### API dev server

```bash
cp apps/api/.env.example apps/api/.env   # optional — defaults work
pnpm dev:api
```

Server runs at **http://localhost:3000**. Health check:

```bash
curl http://localhost:3000/health
# {"status":"ok"}
```

## Monorepo layout

```
apps/
  api/          # Fastify API (Day 2 ✅ — Drizzle in Day 3)
    src/
      modules/  # auth, users, jobs, pros, leads, quotes, bookings, messaging, reviews
      routes/   # /health
  mobile/       # Expo placeholder (Phase 2 Day 6+)
packages/
  shared/       # Zod schemas, types, enums
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Run all dev tasks via Turborepo (api + mobile placeholder) |
| `pnpm dev:api` | Start API dev server on port 3000 |
| `pnpm build` | Build all packages |
| `pnpm typecheck` | Type-check all packages |
| `pnpm lint` | ESLint all packages |
| `pnpm format` | Format with Prettier |

## Development plan

See [docs/MVP-DAILY-PHASES.md](./docs/MVP-DAILY-PHASES.md) for the phased build plan.
