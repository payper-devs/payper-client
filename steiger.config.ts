import { defineConfig } from "steiger";
import fsd from "@feature-sliced/steiger-plugin";

export default defineConfig([
  ...fsd.configs.recommended,
  {
    // mocks/ is not a standard FSD layer — exclude from architecture checks
    ignores: ["./src/mocks/**"],
  },
]);
