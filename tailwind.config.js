/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './assets/css/tailwind.css'
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#0d0821ff',
        'oxford-blue': '#0b0722ff',
        'ultra-violet': '#5b61a0ff',
        'russian-violet': '#1e1647ff',
        'russian-violet-2': '#110d34ff'
      },
      fontFamily: {
        mono: ['Space Mono', 'IBM Plex Mono', 'monospace'],
        ibmMono: ['IBM Plex Mono', 'monospace'],
        sans: ['Open Sans', 'Inter', 'Helvetica', 'sans-serif'],
        openSans: ['Open Sans']
      }
    },
  },
  plugins: [],
}

