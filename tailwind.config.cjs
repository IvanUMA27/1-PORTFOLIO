/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        'dots-pattern': "radial-gradient(circle at 25px 25px, rgba(203, 166, 247, 0.15) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(137, 180, 250, 0.15) 2px, transparent 0)",
      },
      backgroundSize: {
        'dots-size': '100px 100px',
      },
    },
  },
  plugins: [],
}

