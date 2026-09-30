import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: '#0E0E10',
        surface: '#1A1A1C',
        'surface-elevated': '#1F2937',
        primary: '#E50914',
        'primary-hover': '#C70616',
        'primary-light': '#F58F89',
        foreground: '#FFFFFF',
        secondary: '#A0A0A0',
        muted: '#6B7280',
        border: 'rgba(255, 255, 255, 0.08)',
        input: 'rgba(255, 255, 255, 0.08)',
        ring: '#E50914',
        card: '#1A1A1C',
        'card-foreground': '#FFFFFF',
        popover: '#1A1A1C',
        'popover-foreground': '#FFFFFF',
      },
      borderRadius: {
        lg: '12px',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: '9999px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": "marquee 30s linear infinite",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'cinematic': '0 8px 32px rgba(0, 0, 0, 0.5)',
        'red-glow': '0 0 24px rgba(229, 9, 20, 0.4)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;