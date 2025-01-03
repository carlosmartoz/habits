// Vite
import { defineConfig } from "vite";

// React
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
