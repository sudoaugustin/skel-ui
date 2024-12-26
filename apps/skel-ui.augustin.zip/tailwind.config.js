import skelUITailwind from "@skel-ui/react/tailwind";
import { createPreset } from "fumadocs-ui/tailwind-plugin";
import tailwindCSSShorthand from "tailwindcss-shorthand";
import Colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./@ui/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./codes/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  theme: {
    colors: {
      brand: "#0EA5E9",
      white: "#fff",
      black: "#000",
      current: "currentColor",
      transparent: "transparent",
      neutral: Colors.neutral,
    },
    fontFamily: {
      sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
    },
  },
  presets: [createPreset({})],
  plugins: [tailwindCSSShorthand(), skelUITailwind()],
};
