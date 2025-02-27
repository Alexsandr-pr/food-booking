import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                white: "#FFF",
                primary: "#F49B33",
                secondary: "#2B2B2B",
                tertiary: "#5E5E5E",
                sub: "#CECECE",
                modal_bg: "rgba(43, 43, 43, 0.58)",
            },
            boxShadow: {
                sm: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
                md: "0px 0px 16px 0px rgba(0, 0, 0, 0.08)",
            },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    sm: "1532px",
                },
            }
        },
    },
    plugins: [],
} satisfies Config;
