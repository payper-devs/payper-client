/**
 * Shared API Layer
 *
 * API client configuration, request/response types, and utilities.
 *
 * Example structure:
 * shared/api/
 * ├── client.ts       # API client (axios, fetch wrapper)
 * ├── types.ts        # Common API types
 * ├── interceptors.ts # Request/response interceptors
 * └── index.ts
 */

// API base URL from environment
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

// Re-export API utilities as they are added
export {};
