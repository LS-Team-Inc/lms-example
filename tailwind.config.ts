import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontWeight: {
      normal: "400",
      semibold: "600",
      bold: "700",
    },
    fontFamily: {
      body: "var(--body-font)",
    },
    extend: {
      backgroundImage: {
        "home-banner": "url('/images/home/banner-shadow.png')",
        "sign-up-modal-bg": "url(/images/modal/signup-bg.png)",
        "sign-in-modal-bg": "url(/images/modal/signin-bg.png)",
      },
      colors: {
        black100: "#13141f",
        black200: "#020014",
        blue200: "#02b5ff",
        blue100: "#00b5ff",
        gray: "#9b9b9b",
        black300: "#1c192d",
      },
    },
  },
  plugins: [],
};
export default config;
