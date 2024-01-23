import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/container/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blueO': '#0b1332',
        'gold': '#deb841',
        'night': '#0a090b'
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-delay': 'spin 10s linear infinite -3s'
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
export default config
