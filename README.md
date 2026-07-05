# Servicio — Marketplace MVP

Local services marketplace (customers post jobs, pros quote, bookings, messaging, reviews).

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

## Monorepo layout

```
apps/
  api/          # Fastify + Drizzle (Phase 1 Day 2+)
  mobile/       # Expo + Expo Router (Phase 2 Day 6+)
packages/
  shared/       # Zod schemas, types, enums
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Run dev servers (via Turborepo) |
| `pnpm build` | Build all packages |
| `pnpm typecheck` | Type-check all packages |
| `pnpm lint` | ESLint all packages |
| `pnpm format` | Format with Prettier |

## Development plan

See [docs/MVP-DAILY-PHASES.md](./docs/MVP-DAILY-PHASES.md) for the phased build plan.
