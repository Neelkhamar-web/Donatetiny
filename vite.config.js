// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 8080, // Set port to $PORT or default to 8080
    host: "0.0.0.0", // Bind to all available network interfaces
  },
  preview: {
    port: process.env.PORT || 8080,
    host: "0.0.0.0", // Required to bind the preview to all interfaces
  },
});
