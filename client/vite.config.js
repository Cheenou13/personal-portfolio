import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag === 'dotlottie-player'
        }
      }
    })
],
  // ... other Vite configurations
}