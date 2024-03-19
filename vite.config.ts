import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    origin: "http://192.168.0.3:5173",
  },
  assetsInclude: "**/*.md",
  plugins: [react()],
});
