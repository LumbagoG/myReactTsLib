// Library's
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

const pathResolve = (src: string) => path.resolve(__dirname, src);

/**
 * Vite config
 * https://vitejs.dev/config/
 */
export default defineConfig({
    // Plugins
    plugins: [
        react({ jsxRuntime: "classic" }),
        dts({
            insertTypesEntry: true,
        }),
    ],
    resolve: {
        // Aliases
        alias: {
            "@assets": pathResolve("./src/assets"),
            "@styles": pathResolve("./src/assets/styles"),
            "@lib": pathResolve("./src/lib"),
        },
    },

    // Settings for production
    build: {
        outDir: "build",

        chunkSizeWarningLimit: 2048,

        // Settings generation files for library
        lib: {
            entry: pathResolve("src/lib/index.ts"),
            name: "ReactTSLib",
            formats: ["es", "umd"],
            fileName: (format) => `react-ts-lib.${format}.js`,
        },
        // https://vitejs.dev/config/build-options.html#build-rollupoptions
        rollupOptions: {
            external: ["react", "react-dom", "styled-components"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "styled-components": "styled",
                },
            },
        },
    },
});
