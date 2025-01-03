import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";

import { resolve } from 'path'

const options = { pretty: true };
const locals = { name: "My Pug" };


export default defineConfig({
  plugins: [pugPlugin({ localImports: true }, { hello: "world", baseUrl: "./src" })],
  base: './',

  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      }
    }
  },

  server: {
    watch: {
      usePolling: true
    }
  },

  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, './src/pages/index.pug'),
  //     },
  //   },
  // },
  
 /* build: {
    outDir: '../dist',
    emptyOutDir: true, // also necessary
  }*/
  
})

