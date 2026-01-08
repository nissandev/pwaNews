/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#e11d24", // Prothom Alo red
                secondary: "#111827",
                gray: {
                    100: "#f3f4f6",
                    200: "#e5e7eb",
                    500: "#6b7280",
                    800: "#1f2937",
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                bengali: ['Noto Sans Bengali', 'sans-serif'], // Placeholder for Bengali font if needed
            },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    "2xl": "1280px",
                },
            },
        },
    },
    plugins: [],
}
