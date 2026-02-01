import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/app";

async function enableMocking() {
  // Only enable mocking in development mode
  if (!import.meta.env.DEV) {
    return;
  }

  // Allow disabling MSW via environment variable
  if (import.meta.env.VITE_DISABLE_MSW === "true") {
    return;
  }

  const { worker } = await import("@/mocks/browser");

  return worker.start({
    onUnhandledRequest: "bypass",
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
