import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/fonts/Poppins-Bold.ttf"
  ],
  // darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.625rem',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        slideoutdown: 'slide-out-down 0.2s ease-in-out 0.1s 1',
        slideinleft: 'slide-in-left 5s ease-in-out 0.25s infinite',
        'bounce-right': 'bounceRight 1s infinite',
        'slide-right': 'slideRight 1s ease-in-out infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        slideRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
        bounceRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
        "slide-out-down": {
          "0%": {
              transform: "translate3d(0, 0, 0)",
          },
          "100%": {
              visibility: "hidden",
              transform: "translate3d(0, 100%, 0)",
          },
      },
      "slide-in-left": {
        "0%": {
            visibility: "visible",
            transform: "translate3d(-100%, 0, 0)",
        },
        "100%": {
            transform: "translate3d(0, 0, 0)",
        },
    },
      },   
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        poppins:'Poppins',
        cursive:'Cedarville Cursive'
      }
    },
  },
  plugins: [],
};
export default config;
