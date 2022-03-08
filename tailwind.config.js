module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        redhat: ["Red Hat Display"],
        inter: ["Inter"],
      },
      colors: {
        palleteLight1: "#E4F5E9",
        palleteDark1: "#356E79",
        palleteLight2: "#95B0B6",
        palleteDark2: "#324B50",
      },
    },
  },
  plugins: [],
};
