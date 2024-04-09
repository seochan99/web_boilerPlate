import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                fadeIn: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
            },
            animation: {
                fadeIn: "fadeIn 1s forwards",
            },
        },
    },
    plugins: [],
};

export default config;
