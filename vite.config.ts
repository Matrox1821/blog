import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: "**/*.md",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react"],
    },
  },
});
