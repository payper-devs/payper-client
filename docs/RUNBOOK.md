# Runbook

## Deployment Procedures

### Production Build

1. Ensure all environment variables are set
2. Run the build:
   ```bash
   npm run build
   ```
3. Output will be in `dist/` directory

### Build Verification

Preview the production build locally:
```bash
npm run preview
```

### Deployment Checklist

- [ ] All tests passing
- [ ] Linting passes (`npm run lint`)
- [ ] Format check passes (`npm run format:check`)
- [ ] Build succeeds (`npm run build`)
- [ ] Environment variables configured for target environment
- [ ] MSW disabled in production (`VITE_DISABLE_MSW` not relevant in prod builds)

## Monitoring and Alerts

### Application Health

- Monitor browser console for runtime errors
- Check network requests in DevTools for API failures

### Key Metrics to Watch

- Page load time
- JavaScript bundle size
- API response times

## Common Issues and Fixes

### Issue: Build Fails with Type Errors

**Symptoms:** `npm run build` fails during TypeScript compilation

**Fix:**
1. Run `npm run lint` to identify issues
2. Check TypeScript errors: `npx tsc --noEmit`
3. Fix type errors in reported files

### Issue: Storybook Won't Start

**Symptoms:** `npm run storybook` fails or hangs

**Fix:**
1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules
   npm install
   ```
2. Clear Storybook cache:
   ```bash
   rm -rf node_modules/.cache/storybook
   ```

### Issue: Tailwind Styles Not Applied

**Symptoms:** Tailwind classes not rendering correctly

**Fix:**
1. Verify Tailwind is imported in `src/app/styles/globals.css`
2. Check `@tailwindcss/vite` plugin is configured in `vite.config.ts`
3. Restart dev server

### Issue: HMR Not Working

**Symptoms:** Changes don't reflect without page refresh

**Fix:**
1. Check Vite dev server logs for errors
2. Ensure React Refresh plugin is enabled
3. Restart dev server: `npm run dev`

### Issue: MSW Not Intercepting Requests

**Symptoms:** API calls go to real backend instead of mocks

**Fix:**
1. Verify `VITE_DISABLE_MSW` is not set to `true` in `.env.local`
2. Check browser DevTools console for MSW startup message
3. Verify handlers are registered in `src/mocks/handlers/index.ts`
4. Check API base URL matches handler paths

### Issue: Shadcn Components Not Styled

**Symptoms:** Shadcn/ui components appear unstyled

**Fix:**
1. Ensure `globals.css` includes Tailwind directives
2. Check component imports from `@/shared/ui`
3. Verify CSS variables are defined in globals.css

## Rollback Procedures

### Immediate Rollback

If a deployment causes issues:

1. Identify the last known good commit:
   ```bash
   git log --oneline -10
   ```

2. Revert to previous version:
   ```bash
   git revert HEAD
   ```

3. Rebuild and redeploy:
   ```bash
   npm run build
   ```

### Version History

Check recent deployments:
```bash
git log --oneline --since="7 days ago"
```

## Emergency Contacts

| Role | Responsibility |
|------|----------------|
| Frontend Lead | Application issues |
| DevOps | Deployment/infrastructure issues |
| Backend Team | API-related issues |

## Environment Variables Reference

See `.env.example` for all available environment variables.

| Variable | Purpose | Required | Default |
|----------|---------|----------|---------|
| `VITE_API_BASE_URL` | Backend API endpoint | Yes | `http://localhost:3000/api` |
| `VITE_DISABLE_MSW` | Disable MSW mocking in development | No | `false` |
| `VITE_ENABLE_STORYBOOK` | Enable Storybook features | No | `true` |
| `VITE_APP_NAME` | Application display name | No | `Payper` |
| `VITE_APP_VERSION` | Current version | No | `0.0.0` |

## MSW (Mock Service Worker) Reference

### Handler Locations

| Domain | File |
|--------|------|
| Authentication | `src/mocks/handlers/auth.ts` |
| Users | `src/mocks/handlers/user.ts` |

### Adding New Handlers

1. Create handler file in `src/mocks/handlers/`
2. Export handlers array
3. Add to `src/mocks/handlers/index.ts`

### Testing with MSW

In Vitest tests, use the Node.js server:
```typescript
import { server } from "@/mocks/server";
import { beforeAll, afterEach, afterAll } from "vitest";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```
