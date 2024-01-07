import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import type { Config } from "tailwindcss";

extend([mixPlugin]);

const generateDarkenColorFrom = (input: string, percentage = 0.07): string =>
  colord(input).darken(percentage).toHex();

const generateForegroundColorFrom = (input: string, percentage = 0.8): string =>
  colord(input)
    .mix(colord(input).isDark() ? "white" : "black", percentage)
    .toHex();

export const tailwindColors: { [key: string]: string } = {
  current: "currentColor",
  transparent: "transparent",
  white: "#f9f9f9",
  primary: "#007bec",
  "primary-content": "#ffffff",
  "primary-focus": generateDarkenColorFrom("#007bec"),
  secondary: "#6c5ce7",
  "secondary-content": "#ffffff",
  "secondary-focus": generateDarkenColorFrom("#6c5ce7"),
  accent: "#1fb2a5",
  "accent-content": "#ffffff",
  "accent-focus": generateDarkenColorFrom("#1fb2a5"),
  neutral: "#2a323c",
  "neutral-content": generateForegroundColorFrom("#ffffff"),
  "neutral-focus": generateDarkenColorFrom("#2a323c", 0.03),
  "base-25": "#353d47",
  "base-50": "#2a323c",
  "base-75": "#20272e",
  "base-100": "#1d232a",
  "base-200": "#191e24",
  "base-300": "#15191e",
  "base-content": "#a6adbb",
  info: "#3abff8",
  "info-content": generateForegroundColorFrom("#3abff8"),
  success: "#36d399",
  "success-content": generateForegroundColorFrom("#36d399"),
  warning: "#fbbd23",
  "warning-content": generateForegroundColorFrom("#fbbd23"),
  error: "#f87272",
  "error-content": generateForegroundColorFrom("#f87272"),
  "gradient-first": "#34eaa0",
  "gradient-second": "#0fa2e9",
};

const config: Config = {
  content: ["./src/app/**/*.{tsx,jsx}"],
  theme: {
    colors: tailwindColors,
    extend: {},
    container: {
      center: true,
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
