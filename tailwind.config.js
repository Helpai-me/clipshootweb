/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                'brand-teal': '#5ef0c4',
                'brand-mint': '#2ab7a9',
                'slate-900': '#0f172a',
                'slate-600': 'rgba(15, 23, 42, 0.7)',
                'glass-white': 'rgba(255, 255, 255, 0.78)',
                'glass-border': 'rgba(255, 255, 255, 0.6)',
            },
            fontFamily: {
                sans: ['Inter', 'ui-rounded', 'SF Pro Rounded', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                '3xl': '24px',
                '4xl': '32px',
                'badge': '999px',
            },
            boxShadow: {
                'glass': '0 20px 45px -25px rgba(15, 23, 42, 0.55)',
            },
        },
    },
    plugins: [],
}
