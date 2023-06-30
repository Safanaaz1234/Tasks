/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customColor: "#663398",
        bgColor: "#F3F4F8",
        navyBlue: "#09225A",
      },
      boxShadow: {
        custom: "2px 2px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};

//npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
