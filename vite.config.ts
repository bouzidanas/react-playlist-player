import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts';


export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'rpp',
      // the proper extensions will be added
      fileName: 'rpp',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
     // output: {
     //   // Provide global variables to use in the UMD build
     //   // for externalized deps
     //   globals: {
     //   react: 'React',
     //   },
     // },
    },
  },
  plugins: [dts()],
})