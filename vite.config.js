import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3333,
  },
  build: {
    target: "esnext",
  },
  optimizeDeps: {
    // Add both @codemirror/state and @codemirror/view to included deps to optimize
    include: ["@codemirror/state", "@codemirror/view"],
  },
  // resolve: {
  //   alias: {
  //     'solid-js' : 'solid-js/dist/dev.js',
  //     'solid-js/web' : 'solid-js/web/dist/dev.js',
  //     'solid-js/store' : 'solid-js/store/dist/dev.js',
  //   }
  // }
});
