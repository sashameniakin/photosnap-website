/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      template:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.0001), rgba(0, 0, 0, 0.661222))",
    },
    colors: {
      pureBlack: "hsl(0, 0%, 0%)",
      lightGrey: "hsl(0, 0%, 87%)",
      pureWhite: "hsl(0, 0%, 100%)",
      first: "hsl(28, 100%, 79%)",
      second: "hsl(329, 36%, 59%)",
      third: "hsl(229, 100%, 67%)",
      gradientBlackStart: "rgba(0, 0, 0, 0.0001)",
      gradientBlackEnd: "rgba(0, 0, 0, 0.661222)",
    },
    fontSize: {
      h1: [
        "40px",
        {
          lineHeight: "48px",
          fontWeight: "700",
          letterSpacing: "4.17px",
        },
      ],
      h2: [
        "24px",
        {
          lineHeight: "25px",
          fontWeight: "700",
        },
      ],
      h3: [
        "18px",
        {
          lineHeight: "25px",
          fontWeight: "700",
        },
      ],
      h4: [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "700",
          letterSpacing: "2px",
        },
      ],
      body: [
        "15px",
        {
          lineHeight: "25px",
          fontWeight: "400",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
