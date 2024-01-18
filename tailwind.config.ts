import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'primary-hover': '3px 6px 20px rgba(255, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'tomato-gradient-to-right': 'linear-gradient(to right, hsl(4, 100%, 67%), hsl(4, 100%, 80%))'
      },
      colors: {
        "primary": "hsl(4, 100%, 67%)",
        "darkGray": "hsl(234, 29%, 20%)",
        "charcolGray": "hsl(235, 18%, 26%)",
      }
    },
  },
  plugins: [],
}
export default config
