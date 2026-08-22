import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { enquiryApiPlugin } from "./server/vite-plugin.js";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: process.env.VITE_BASE ?? "/",
    plugins: [react(), enquiryApiPlugin(env)],
  };
});
