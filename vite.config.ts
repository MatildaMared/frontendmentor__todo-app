import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/practice__todo-app/",
	plugins: [
		react(),
		svgr({
			exportAsDefault: true,
		}),
	],
});
