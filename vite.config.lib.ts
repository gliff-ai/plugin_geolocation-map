import { defineConfig } from "vite";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false, // TODO maybe?
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "geolocation-map",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
            external: [
        "react",
        ],
      output: {
        globals: {},
      },
    },
  },
});
