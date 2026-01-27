const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Be Vietnam Pro", "Inter", "system-ui", "sans"],
      monospace: ["DM Mono", "monospace"],
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      orange: colors.orange,
      purple: colors.purple,
    pink: colors.pink,
    },
    extend: {
      colors: {
        bg: "#000a1f",
        // Improved contrast ratios for WCAG AA compliance
        "fun-gray-light": "#c5cce0", // Lightened for better contrast (was #b2bbcf)
        "fun-gray": "#9aa8c2", // Lightened for better contrast (was #7b89a8)
        "fun-gray-medium": "#8a9199", // Lightened for better contrast (was #767c85)
        "fun-gray-darker": "#2a2a2c",
        "fun-gray-dark": "#1F1F20",
        "fun-gray-darkest": "#141414",
        "fun-pink": "#00c7ff",
        "fun-pink-darker": "#000f2e",
        "fun-pink-darkest": "#000c24",
        "fun-pink-dark": "#192742",
        "fun-pink-light": "#00b8eb", // Slightly adjusted for better contrast (was #009ac5)
      },
      rotate: {
        '360': '360deg'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'fadeInAndBounce': 'fadeIn 3s ease-out',
      },
      willChange: {
        'projectCard': 'border-color, opacity, transform',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
