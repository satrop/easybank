import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background:     "var(--background)",
        foreground:     "var(--foreground)",
        easybankBlue:   "#2D314D",
        easybankGreen:  "#31d35c",
        easybankCyan:   "#3cb3ab",
        easybankBlue50: "#f0f0f0",
        easybankGray50: "#b7b7b7",
        easybankGray25: "#4d4d4d"
      },
      fontFamily: {
        publicSans: ['Public Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
