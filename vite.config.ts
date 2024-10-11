/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true, // Enables global test functions (e.g., test, describe, expect)
		environment: "jsdom", // Use jsdom for testing DOM-related code
		setupFiles: "./src/setupTests.ts", // Path to your setup file
	},
});
