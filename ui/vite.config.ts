import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Fix for libraries that expect process.env to be available
    "process.env": {},
    global: "globalThis",
  },
  optimizeDeps: {
    include: ["@sanity/client"],
  },
});
