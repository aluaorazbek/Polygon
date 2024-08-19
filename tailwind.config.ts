/* eslint-disable global-require */
import { Config } from "tailwindcss";

const tailwindConfig = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      desktop: { max: "1440px" },
      tablet: { max: "1280px" },
      mobile: { max: "720px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)"],
        mono: ["var(--font-fira-mono)"],
      },
      colors: {
        current: "currentColor",
        transparent: "transparent",
        default: "rgb(var(--colors-default) / <alpha-value>)",
        overlay: "rgba(0, 0, 0, 0.34)",
        background: "rgb(var(--colors-background) / <alpha-value>)",
        red: {
          100: "rgb(var(--colors-red-100) / <alpha-value>)",
          200: "rgb(var(--colors-red-200) / <alpha-value>)",
        },
        green: {
          100: "rgb(var(--colors-green-100) / <alpha-value>)",
          200: "rgb(var(--colors-green-200) / <alpha-value>)",
          300: "rgb(var(--colors-green-300) / <alpha-value>)",
        },
        yellow: "rgb(var(--colors-yellow) / <alpha-value>)",
        blue: "rgb(var(--colors-blue) / <alpha-value>)",
        black: "rgb(var(--colors-black) / <alpha-value>)",
        gray: {
          100: "rgb(var(--colors-gray-100) / <alpha-value>)",
          200: "rgb(var(--colors-gray-200) / <alpha-value>)",
          300: "rgb(var(--colors-gray-300) / <alpha-value>)",
          400: "rgb(var(--colors-gray-400) / <alpha-value>)",
          500: "rgb(var(--colors-gray-500) / <alpha-value>)",
          600: "rgb(var(--colors-gray-600) / <alpha-value>)",
          700: "rgb(var(--colors-gray-700) / <alpha-value>)",
          800: "rgb(var(--colors-gray-800) / <alpha-value>)",
          900: "rgb(var(--colors-gray-900) / <alpha-value>)",
          1000: "rgb(var(--colors-gray-1000) / <alpha-value>)",
          1100: "rgb(var(--colors-gray-1100) / <alpha-value>)",
          1200: "rgb(var(--colors-gray-1200) / <alpha-value>)",
        },
        purple: {
          100: "rgb(var(--colors-purple-100) / <alpha-value>)",
          200: "rgb(var(--colors-purple-200) / <alpha-value>)",
          300: "rgb(var(--colors-purple-300) / <alpha-value>)",
          400: "rgb(var(--colors-purple-400) / <alpha-value>)",
          500: "rgb(var(--colors-purple-500) / <alpha-value>)",
          600: "rgb(var(--colors-purple-600) / <alpha-value>)",
          700: "rgb(var(--colors-purple-700) / <alpha-value>)",
          800: "rgb(var(--colors-purple-800) / <alpha-value>)",
        },
      },
      fontSize: {
        "3xs": ["0.5625rem", "150%"], // 9px
        "2xs": ["0.6875rem", "150%"], // 11px
      },
      zIndex: {
        menu: "200",
        topModal: "150",
        alert: "100",
        modal: "100",
        select: "90",
      },
      boxShadow: {
        card: [
          "0 3px 4px #0000001f",
          "0 7px 9px #0000002e",
          "0 12px 16px #0000003f",
          "0 22px 28px #00000040",
          "0 42px 53px #0000004d",
          "0 100px 127px #0000006e",
        ].join(", "),
      },
    },
    backgroundImage: {
      "gradient-cover": "linear-gradient(180deg, #0F0E11 0%, #010101 21.76%)",
      "gradient-btn-gray": "linear-gradient(#18161c,#121014)",
      "gradient-btn-purple": "linear-gradient(#8a46ff,#6e38cc)",
      "gradient-btn-green":
        "linear-gradient(91.88deg, #0070C0 -22.71%, #00993D 111.33%)",
      "gradient-btn-green-hover":
        "linear-gradient(91.88deg, #28a745 -22.71%, #3388cc 111.33%)",
      "gradient-card": "linear-gradient(#141217,#0e0c12)",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwind-scrollbar-hide"),
  ],
} satisfies Config;

export default tailwindConfig;
