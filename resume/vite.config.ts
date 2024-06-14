/// <reference types="vitest" />

import analog from "@analogjs/platform";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import { defineConfig, splitVendorChunkPlugin } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    publicDir: "src/public",
    cacheDir: `../node_modules/.vite`,

    build: {
      outDir: "../dist/./resume/client",
      reportCompressedSize: true,
      target: ["es2020"],
    },
    server: {
      fs: {
        allow: ["."],
      },
    },
    plugins: [
      analog({
        vite: {
          inlineStylesExtension: "scss",
        },
        nitro: {
          preset: "firebase",
          firebase: {
            nodeVersion: "20",
            gen: 2,
            httpsOptions: {
              region: "europe-west1",
              maxInstances: 100,
            },
          },
        },
      }),

      nxViteTsPaths(),
      splitVendorChunkPlugin(),
    ],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["src/test-setup.ts"],
      include: ["**/*.spec.ts"],
      reporters: ["default"],
    },
    define: {
      "import.meta.vitest": mode !== "production",
    },
  };
});
