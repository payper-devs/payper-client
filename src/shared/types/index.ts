/**
 * Shared Types
 *
 * Common TypeScript types used across the application.
 */

// Common utility types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;

// API response wrapper
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

// Pagination types
export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Error types
export interface ApiError {
  message: string;
  code?: string;
  details?: Record<string, string[]>;
}
