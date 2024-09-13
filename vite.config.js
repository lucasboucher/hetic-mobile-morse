import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePWA({
    registerType: 'autoUpdate',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'HETIC Mobile Morse',
      short_name: 'HMM',
      description: 'Faire un traduction de Code Morse capable de transcrire "Hello HETIC".',
      theme_color: '#49eb34',
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})