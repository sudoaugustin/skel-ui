import skelUITailwind from "@skel-ui/react/tailwind";
import { createPreset } from "fumadocs-ui/tailwind-plugin";
import tailwindCSSShorthand from "tailwindcss-shorthand";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,md,mdx}",
    "./components/**/*.{ts,tsx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
    },
  },
  presets: [createPreset({})],
  plugins: [tailwindCSSShorthand(), skelUITailwind()],
};
