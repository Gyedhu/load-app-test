import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6CA89E",
          "primary-content": "#FFFFFF",
          secondary: "#eeeeee",
          "secondary-content": "#121212",
          accent: "#f7f7f7",
          "either-content": "#121212",
          success: "#6BC579",
          "success-content": "#FFFFFF",
          warning: "#FBBD23",
          error: "#E2442F",
          "error-primary": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Saira", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  
} satisfies Config;
