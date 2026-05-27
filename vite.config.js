import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ganti "nama-repositori-kamu" dengan nama repositori yang akan kamu buat di GitHub
export default defineConfig({
  plugins: [react()],
  base: '/portofolio/', 
})