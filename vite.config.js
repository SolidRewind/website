import { defineConfig, loadEnv } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV,
    },
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
    mode: 'development'
  }
  
})

// export default defineConfig({
//   plugins: [solidPlugin()],
//   server: {
//     port: 3333,
//   },
//   build: {
//     target: "esnext",
//   },
//   optimizeDeps: {
//     // Add both @codemirror/state and @codemirror/view to included deps to optimize
//     include: ["@codemirror/state", "@codemirror/view"],
//   },
//   // resolve: {
//   //   alias: {
//   //     'solid-js' : 'solid-js/dev'
//   //   }
//   // }
//   mode: 'development'
// });
