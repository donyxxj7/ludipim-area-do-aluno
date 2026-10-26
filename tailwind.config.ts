import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { navy: "#0B2C7D", blue: "#2D7FF9", sunshine: "#FFD84D", leaf: "#21C16B", coral: "#FF4D6D", canvas: "#F8FAFC" } } },
  plugins: [],
};

export default config;
