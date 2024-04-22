module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        android: "300px",
      },
    },
  },
  plugins: [require("daisyui")],
};
