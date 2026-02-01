/**
 * MSW Entry Point
 *
 * This module provides a unified way to initialize mocking
 * based on the current environment.
 */

export async function initMocks() {
  // Only enable mocking in development
  if (import.meta.env.DEV) {
    // Check if mocking is explicitly disabled
    if (import.meta.env.VITE_DISABLE_MSW === "true") {
      console.log("[MSW] Mocking disabled via VITE_DISABLE_MSW");
      return;
    }

    const { worker } = await import("./browser");

    await worker.start({
      onUnhandledRequest: "bypass",
      serviceWorker: {
        url: "/mockServiceWorker.js",
      },
    });

    console.log("[MSW] Mocking enabled");
  }
}

// Re-export for convenience
export { handlers } from "./handlers";
export { worker, startWorker } from "./browser";
