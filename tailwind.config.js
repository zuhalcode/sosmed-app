/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: "Inter, sans-serif",
    },
    extend: {
      colors: {
        yellow: "#f5c32c",
        orange: "#fca61f",
        black: "#242d49",
        gray: "rgba(36, 45, 73, 0.65)",
        hr: "#cfcdcd",
        card: "rgba(255, 255, 255, 0.64)",
        input: "rgba(40, 52, 62, 0.07)",
        photo: "#4cb256",
        video: "#4a4eb7",
        location: "#ef5757",
        schedule: "#e1ae4a",
      },
      boxShadow: {
        profile: "0px 4px 17px 2px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: (theme) => ({
        button: "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
      }),
    },
  },
  plugins: [],
};
