import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      backgroundImage: {
        "bg-home-mobile": "url('/home/background-home-mobile.jpg')",
        "bg-home-tablet": "url('/home/background-home-tablet.jpg')",
        "bg-home-desktop": "url('/home/background-home-desktop.jpg')",
        "bg-crew-mobile": "url('/crew/background-crew-mobile.jpg')",
        "bg-crew-tablet": "url('/crew/background-crew-tablet.jpg')",
        "bg-crew-desktop": "url('/crew/background-crew-desktop.jpg')",
        "bg-destination-mobile":
          "url('/destination/background-destination-mobile.jpg')",
        "bg-destination-tablet":
          "url('/destination/background-destination-tablet.jpg')",
        "bg-destination-desktop":
          "url('/destination/background-destination-desktop.jpg')",
        "bg-technology-mobile":
          "url('/technology/background-technology-mobile.jpg')",
        "bg-technology-tablet":
          "url('/technology/background-technology-tablet.jpg')",
        "bg-technology-desktop":
          "url('/technology/background-technology-desktop.jpg')",
      },
      colors: {
        "dark-blue": "#0B0D17",
        "light-blue": "#D0D6F9",
        white: "#FFFFFF",
        "black-transparent": "#ffffff0a",
      },
      fontFamily: {
        barlow: ["var(--font-barlow)", ...fontFamily.sans],
        bellfair: ["var(--font-bellfair)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};

export default config;
