/**
 * Central handlers registry
 *
 * Import all domain handlers here and combine them.
 * This pattern allows for clean separation by feature/domain
 * while providing a single export point.
 */

import { userHandlers } from "./user";
import { authHandlers } from "./auth";

/**
 * All request handlers for MSW
 * Add new domain handlers here as the application grows
 */
export const handlers = [
  ...authHandlers,
  ...userHandlers,
  // Add more domain handlers as needed:
  // ...paymentHandlers,
  // ...notificationHandlers,
];

// Re-export individual handlers for selective use in tests/stories
export { userHandlers } from "./user";
export { authHandlers } from "./auth";
