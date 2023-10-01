import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://kmicac.github.io/MoviePlay-Client/",
  plugins: [react()],
})
