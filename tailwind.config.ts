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
      backgroundImage: {
        'easybankGradient': 'linear-gradient(75deg, #33D35E, #2AB6D9)',
        'easybankUnderLine': 'linear-gradient(to left, #33D35E, #2AB6D9)',
      },
      backgroundSize: {
        'underline': '100% 4px', // Adjust thickness
      },
      backgroundPosition: {
        'underline': '0 100%', // Align to bottom
      },
      lineHeight: {
        'extra-loose': '5',
      }
    },
  },
  plugins: [],
} satisfies Config;
