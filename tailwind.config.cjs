/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#008de4',
      accent: '#012060',
      background: '#0b0f3b',
      white: '#ffffff',
      gray: '#787878',
      black: '#111921',
      slate: '#f1f5f9',
    },
    container: {
      center: true,
    },
  },
	plugins: [],
}
