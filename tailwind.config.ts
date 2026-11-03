import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { predia: { ink: "#24170F", brown: "#352318", warm: "#59402F", beige: "#D9BFA1", cream: "#F4E9D9", gold: "#C99A61" } } } }, plugins: [] };
export default config;