import { Toaster } from "@/shared/ui";
import { AppRouter } from "@/app/providers";
import { QueryProvider } from "@/app/providers";
import "./styles/globals.css";

export function App() {
  return (
    <QueryProvider>
      <AppRouter />
      <Toaster />
    </QueryProvider>
  );
}
