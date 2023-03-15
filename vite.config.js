// Библиотеки
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
var pathResolve = function (src) {
    return path.resolve(__dirname, src);
};
/**
 * https://vitejs.dev/config/
 */
export default defineConfig({
    // Плагины
    plugins: [
        react({ jsxRuntime: "classic" }),
        dts({
            insertTypesEntry: true,
        }),
    ],
    resolve: {
        // Аллиасы
        alias: {
            "@assets": pathResolve("./src/assets"),
            "@styles": pathResolve("./src/assets/styles"),
            "@lib": pathResolve("./src/lib"),
        },
    },
    // Настройки production сборки
    build: {
        outDir: "build",
        chunkSizeWarningLimit: 2048,
        // Настройки генерации файлов для библиотеки
        lib: {
            // Путь к основному файлу библиотеки
            entry: pathResolve("src/lib/index.ts"),
            // Название библиотеки
            name: "ReactTSLib",
            // Форматы генерируемых файлов
            formats: ["es", "umd"],
            // Названия генерируемых файлов
            fileName: function (format) {
                return "react-ts-lib.".concat(format, ".js");
            },
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
