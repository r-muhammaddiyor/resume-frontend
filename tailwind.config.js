/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "system-ui",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
        body: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "system-ui",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
      colors: {
        ink: "#0B1220",
        steel: "#607089",
        frost: "#F5F7FB",
        glass: "rgba(255, 255, 255, 0.72)",
        ocean: "#0A84FF",
        mint: "#30D158",
        sunrise: "#FF9F0A",
        haze: "#E6ECF6",
      },
      boxShadow: {
        glass: "0 24px 60px rgba(15, 23, 42, 0.12)",
        soft: "0 12px 30px rgba(15, 23, 42, 0.12)",
      },
      borderRadius: {
        xl: "20px",
        '2xl': "28px",
        '3xl': "36px",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 20% 10%, rgba(10, 132, 255, 0.14), transparent 45%), radial-gradient(circle at 80% 0%, rgba(48, 209, 88, 0.12), transparent 50%), linear-gradient(180deg, #F7F9FC 0%, #EEF2F8 100%)",
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
