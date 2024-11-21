import type { Config } from "tailwindcss";

const config: Config = {
  important:true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/fonts/Poppins-Bold.ttf"
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens:{
        xs:{
          max:'641px'
        },
        'max-h-730': { raw: '(max-height: 730px)' },
        'max-h-685': { raw: '(max-height: 686px)' }, //this is for get pricing is disturb add custom tech dialog, in nest hub device 1024x600
        'max-h-600': { raw: '(max-height: 601px)' },
      },
      fontSize: {
        'xxs': '0.625rem',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        slideoutdown: 'slide-out-down 0.2s ease-in-out 0.1s 1',
        slideinleft: 'slide-in-left 1s ease-in-out 0.25s 1',
        'bounce-right': 'bounceRight 3s infinite',
        'slide-right': 'slideRight 1s ease-in-out infinite',
        flyinup: 'fly-in-up 0.5s ease-in-out 0s 1',
        jiggle: 'jiggle 1.5s ease-in-out 2s 5',
        'jiggle-infinity': 'jiggle 1.5s ease-in-out 0.2s infinite',
         'slideDown': 'slideDown 0.4s ease-out',
         fadeinbounceup: 'fade-in-bounceup 1s ease-in-out 0.25s 1',
         tada: 'tada 2s ease-in-out 0.25s infinite',
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
            transform: "translate3d(100%, 0, 0)",
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
        "slideDown":{
          "from": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "to": {
            opacity: "1",
            transform: "translateY(0)",
          }
        },
        "fade-in-bounceup": {
          "0%": {
              opacity: "0",
              transform: "translate3d(0%, 100%, 0)",
          },
          "33%": {
              opacity: "0.5",
              transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
              opacity: "0.7",
              transform: "translate3d(0%, 20%, 0)",
          },
          "100%": {
              opacity: "1",
              transform: "translate3d(0, 0, 0)",
          },
      },
      tada: {
        "0%": {
            transform: "scale3d(1, 1, 1)",
        },
        "10%, 20%": {
            transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
        },
        "30%, 50%, 70%, 90%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
        },
        "40%, 60%, 80%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
        },
        "100%": {
            transform: "scale3d(1, 1, 1)",
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
