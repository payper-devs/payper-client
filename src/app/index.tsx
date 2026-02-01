import { Toaster } from "@/shared/ui";
import { AppRouter } from "./providers/router";
import "./styles/globals.css";

export function App() {
  return (
    <>
      <AppRouter />
      <Toaster />
    </>
  );
}
