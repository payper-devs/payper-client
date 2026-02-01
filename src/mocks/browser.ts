import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

/**
 * Browser Service Worker setup
 *
 * This worker intercepts requests in the browser environment.
 * Used for development and Storybook.
 */
export const worker = setupWorker(...handlers);

/**
 * Start the MSW worker with recommended options
 */
export async function startWorker() {
  return worker.start({
    onUnhandledRequest: "bypass", // Don't warn about unhandled requests (assets, etc.)
    serviceWorker: {
      url: "/mockServiceWorker.js",
    },
  });
}
