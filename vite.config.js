import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Prodigy-Portfolio', // Replace 'your-github-repo-name' with your actual repository name
  plugins: [react()],
});
