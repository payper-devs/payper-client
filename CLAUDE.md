# Payper Client

React frontend for Payper payment platform.

## Tech Stack

- React 19 + TypeScript 5.9 + Vite 7
- Tailwind CSS 4 + Shadcn/ui (New York style)
- MSW 2 for API mocking
- Storybook 10 for component development
- React Hook Form + Zod for forms

## Architecture: Feature-Sliced Design (FSD)

```
src/
├── app/           # App entry, providers, global styles
├── pages/         # Route pages
├── widgets/       # Composite UI blocks
├── features/      # User interactions
├── entities/      # Business entities
├── shared/        # Reusable infrastructure
│   ├── ui/        # Shadcn components
│   ├── lib/       # Utilities (cn, etc.)
│   ├── api/       # API client
│   ├── config/    # App config
│   ├── types/     # Shared types
│   └── hooks/     # Shared hooks
└── mocks/         # MSW handlers
```

### FSD Import Rules (CRITICAL)

Layers can ONLY import from layers below:

```
app → pages → widgets → features → entities → shared
```

Example violations:
- `shared/` importing from `features/` - WRONG
- `entities/` importing from `widgets/` - WRONG
- `features/` importing from `shared/` - CORRECT

## Path Aliases

```typescript
import { Button } from "@/shared/ui"      // UI components
import { cn } from "@/shared/lib/utils"   // Utilities
import { useAuth } from "@/features/auth" // Feature hooks
```

## Shadcn Components

Location: `src/shared/ui/`

Adding new components:
```bash
npx shadcn@latest add <component>
```

Components auto-install to `@/shared/ui` (configured in `components.json`).

## MSW Handlers

Location: `src/mocks/handlers/`

Pattern for new handlers:
```typescript
// src/mocks/handlers/[domain].ts
import { http, HttpResponse, delay } from "msw"

const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api"

export const domainHandlers = [
  http.get(`${API_BASE}/resource`, async () => {
    await delay(100)
    return HttpResponse.json({ data: [] })
  }),
]
```

Register in `src/mocks/handlers/index.ts`.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run lint` | ESLint check |
| `npm run storybook` | Component dev |

## Environment Variables

All prefixed with `VITE_`:
- `VITE_API_BASE_URL` - Backend API endpoint
- `VITE_DISABLE_MSW` - Disable mocking (`true`/`false`)
