import { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#23A6F0',
        'light-text': '#FFFFFF',
        secondary: '#737373',
        danger: '#E74040',
        'accent-1': '#B9EAA8',
        'accent-2': '#FFDCD1',
      },
    },
  },
  plugins: [],
};
