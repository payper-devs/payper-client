import { setupServer } from "msw/node";
import { handlers } from "./handlers";

/**
 * Node.js server setup for testing
 *
 * This server intercepts requests in Node.js environment.
 * Used for unit tests, integration tests with Vitest.
 *
 * Usage in test setup file (e.g., vitest.setup.ts):
 *
 * ```ts
 * import { server } from "@/mocks/server";
 * import { beforeAll, afterEach, afterAll } from "vitest";
 *
 * beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
 * afterEach(() => server.resetHandlers());
 * afterAll(() => server.close());
 * ```
 */
export const server = setupServer(...handlers);
