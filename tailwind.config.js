/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Sora", "Noto Sans JP", "Noto Sans SC", "Noto Sans", "sans-serif"],
        body: ["Manrope", "Noto Sans", "Noto Sans JP", "Noto Sans SC", "sans-serif"],
      },
      colors: {
        ink: "#0B1220",
        steel: "#5A6B85",
        frost: "#F2F6FF",
        glass: "rgba(255, 255, 255, 0.6)",
        ocean: "#1B6EF3",
        mint: "#31C5A1",
        sunrise: "#FFB876",
        haze: "#E8EEF9",
      },
      boxShadow: {
        glass: "0 20px 60px rgba(18, 38, 85, 0.12)",
        soft: "0 8px 24px rgba(13, 23, 43, 0.12)",
      },
      borderRadius: {
        xl: "20px",
        '2xl': "28px",
        '3xl': "36px",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at top left, rgba(49, 197, 161, 0.25), transparent 45%), radial-gradient(circle at top right, rgba(27, 110, 243, 0.2), transparent 50%), linear-gradient(180deg, #F7FAFF 0%, #EDF2FA 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease both",
      },
    },
  },
  plugins: [],
};