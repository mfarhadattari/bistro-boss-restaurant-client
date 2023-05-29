/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        login: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "featured-img": "url('./src/assets/home/featured.jpg')",
        "authentication-img":
          "url('./src/assets/others/authentication-bg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
