import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/products": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
      "/reports": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
      "/users": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
      "/auth": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
