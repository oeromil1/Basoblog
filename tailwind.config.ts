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
        'blue1': '#5771db',
        'blue2': '#4663d8',
        'blue3': '#3555D4',
        'gold': '#deb841',
        'gold1': '#e1bd51',
        'gold2': '#AE8A1E',
        'gray1': '#EBE9ED',
        'gray2': '#D6D2DA',
        'gray3': '#CCC7D1',
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
