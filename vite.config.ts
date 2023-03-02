import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import dtsPlugin from "vite-plugin-dts"

const pathResolve = (src: string) => path.resolve(__dirname, src);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dtsPlugin({
    insertTypesEntry: true,
  })],
  resolve: {
    alias: {
      "@assets": pathResolve("./src/assets"),
      "@styles": pathResolve("./src/assets/styles"),
    }
  },
  build: {
    lib: {
      // путь к основному файлу библиотеки
      entry: pathResolve( "src/lib/index.ts"),
      // название библиотеки
      name: "ReactTSLib",
      // форматы генерируемых файлов
      formats: ["es", "umd"],
      // названия генерируемых файлов
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
    }
  }
})
