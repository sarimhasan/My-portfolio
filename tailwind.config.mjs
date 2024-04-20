/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontSize: {
        xl: '16px',
        h1: '50px',
      },
      colors: {
        accent: '#EFBC9B',
        primary: '#9CAFAA',
        text: '#0F0F0F',
        background: '#FBF3D5',
      },
    },
  },
  plugins: [],
};
