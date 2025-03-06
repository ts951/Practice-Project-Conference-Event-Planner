import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/Practice-Project-Conference-Event-Planner",
    plugins: [react()],
})
