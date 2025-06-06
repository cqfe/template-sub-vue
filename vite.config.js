import { fileURLToPath, URL } from 'node:url'
import { mergeConfig } from 'vite'
import devConfig from '../../config/devConfig.mjs'

export default mergeConfig(
  {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      outDir: 'name',
    },
    base: '/iot-os/name',
    server: {
      host: '0.0.0.0',
      port: 8300,
    },
  },
  devConfig,
  false,
)
