# Contributing Guide

## Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

## Environment Setup

1. Clone the repository
2. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables

| Variable | Purpose | Default |
|----------|---------|---------|
| `VITE_API_BASE_URL` | Backend API endpoint | `http://localhost:3000/api` |
| `VITE_DISABLE_MSW` | Disable MSW mocking in development | `false` |
| `VITE_ENABLE_STORYBOOK` | Enable Storybook features | `true` |
| `VITE_APP_NAME` | Application display name | `Payper` |
| `VITE_APP_VERSION` | Current version | `0.0.0` |

## Development Workflow

### Starting Development Server

```bash
npm run dev
```

Starts the Vite development server with Hot Module Replacement (HMR).

### Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `vite` | Start development server with HMR |
| `build` | `tsc -b && vite build` | Type-check and build for production |
| `lint` | `eslint .` | Run ESLint to check for code issues |
| `preview` | `vite preview` | Preview production build locally |
| `format` | `prettier --write "src/**/*.{ts,tsx,js,jsx,json,css}"` | Format code with Prettier |
| `format:check` | `prettier --check "src/**/*.{ts,tsx,js,jsx,json,css}"` | Check code formatting without changes |
| `storybook` | `storybook dev -p 6006` | Start Storybook development server on port 6006 |
| `build-storybook` | `storybook build` | Build Storybook for static deployment |

### Code Style

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety

Run format check before committing:
```bash
npm run format:check
```

Auto-fix formatting:
```bash
npm run format
```

## Testing Procedures

### Unit Tests

```bash
npm test
```

### API Mocking with MSW

MSW (Mock Service Worker) is configured for API mocking during development:

- Handlers are located in `src/mocks/handlers/`
- Browser worker: `src/mocks/browser.ts`
- Node.js server (for tests): `src/mocks/server.ts`

To disable MSW in development, set `VITE_DISABLE_MSW=true` in `.env.local`.

### Component Development with Storybook

Start Storybook for isolated component development:
```bash
npm run storybook
```

Access at: http://localhost:6006

MSW is integrated with Storybook for mocking API calls in stories.

## Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | React | ^19.2.0 |
| Build Tool | Vite | ^7.2.4 |
| Language | TypeScript | ~5.9.3 |
| Styling | Tailwind CSS | ^4.1.18 |
| Component Library | Shadcn/ui (New York style) | - |
| Forms | React Hook Form + Zod | ^7.71.1 / ^4.3.6 |
| API Mocking | MSW | ^2.12.7 |
| Documentation | Storybook | ^10.2.1 |

## Project Structure (Feature-Sliced Design)

```
payper-client/
├── src/
│   ├── app/                    # Application layer
│   │   ├── providers/          # Global providers (router, theme, etc.)
│   │   ├── styles/             # Global styles (globals.css)
│   │   └── index.tsx           # App entry component
│   ├── pages/                  # Pages layer
│   │   └── home/               # Home page feature
│   │       └── ui/             # Page components
│   ├── widgets/                # Composite UI blocks
│   ├── features/               # User interactions & business logic
│   ├── entities/               # Business entities
│   ├── shared/                 # Reusable infrastructure
│   │   ├── ui/                 # UI kit (shadcn components)
│   │   ├── lib/                # Utility functions
│   │   ├── api/                # API client configuration
│   │   ├── config/             # App configuration
│   │   ├── types/              # Shared TypeScript types
│   │   └── hooks/              # Shared React hooks
│   ├── mocks/                  # MSW mock handlers
│   │   ├── handlers/           # Domain-organized handlers
│   │   ├── browser.ts          # Browser worker setup
│   │   └── server.ts           # Node.js server setup
│   └── stories/                # Storybook stories (examples)
├── .storybook/                 # Storybook configuration
├── docs/                       # Documentation
└── public/                     # Static assets
```

### FSD Import Rules

- Layers can only import from layers below them
- Import order: `app` > `pages` > `widgets` > `features` > `entities` > `shared`
- Use path aliases: `@/app`, `@/pages`, `@/widgets`, `@/features`, `@/entities`, `@/shared`

## Pull Request Guidelines

1. Create feature branches from `dev`
2. Follow the PR template in `.github/pull_request_template.md`
3. Ensure all checks pass:
   - `npm run lint`
   - `npm run format:check`
   - `npm run build`
