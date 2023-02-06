import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/resetform": "http://localhost:5000",
      "/contactform": "http://localhost:5000",
      "/validateClientAccess": "http://localhost:5000",
      "/isLoggedIn": "http://localhost:5000",
    },
  },
});
