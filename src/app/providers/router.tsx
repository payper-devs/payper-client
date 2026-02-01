import { Routes, Route } from "react-router";
import { HomePage } from "@/pages/home";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
