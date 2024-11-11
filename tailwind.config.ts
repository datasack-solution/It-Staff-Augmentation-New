import type { Config } from "tailwindcss";

const config: Config = {
  important:true,
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
        'bounce-right': 'bounceRight 3s infinite',
        'slide-right': 'slideRight 1s ease-in-out infinite',
        flyinup: 'fly-in-up 0.5s ease-in-out 0s 1',
        jiggle: 'jiggle 1.5s ease-in-out 2s 5',
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
          '50%': { transform: 'translateX(5px)' },
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
        "fly-in-up": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 1500px, 0)",
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "60%": {
            opacity: "1",
            transform: "translate3d(0, -20px, 0)"
          },
          "75%": {
            transform: "translate3d(0, 10px, 0)"
          },
          "90%": {
            transform: "translate3d(0, -5px, 0)"
          },
          "100%": {
            transform: "translate3d(0, 0, 0)"
          },
        },
        jiggle: {
          "0%": {
            transform: "scale3d(1, 1, 1)"
          },
          "30%": {
            transform: "scale3d(1.25, 0.75, 1)"
          },
          "40%": {
            transform: "scale3d(0.75, 1.25, 1)"
          },
          "50%": {
            transform: "scale3d(1.15, 0.85, 1)"
          },
          "65%": {
            transform: "scale3d(0.95, 1.05, 1)"
          },
          "75%": {
            transform: "scale3d(1.05, 0.95, 1)"
          },
          "100%": {
            transform: "scale3d(1, 1, 1)"
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: 'Poppins',
        cursive: 'Cedarville Cursive'
      }
    },
  },
  plugins: [],
};
export default config;
