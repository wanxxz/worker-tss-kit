import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    tanstackStart({
      router: {
        routesDirectory: './routes',
        generatedRouteTree: './routeTree.gen.ts',
        virtualRouteConfig: './src/routes.ts'
      }
    }),
    viteReact(),
    vanillaExtractPlugin()
  ]
})
