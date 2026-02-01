/**
 * Shared Configuration
 *
 * Application-wide configuration constants and settings.
 */

export const config = {
  app: {
    name: import.meta.env.VITE_APP_NAME || "Payper",
    version: import.meta.env.VITE_APP_VERSION || "0.0.0",
  },
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
  },
  features: {
    mswEnabled: import.meta.env.VITE_DISABLE_MSW !== "true",
  },
} as const;
