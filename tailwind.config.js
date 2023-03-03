/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      template:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.0001), rgba(0, 0, 0, 0.661222))",
      gradient:
        "linear-gradient(to top right, hsl(28, 100%, 79%) 0%, hsl(329, 36%, 59%) 43%, hsl(229, 100%, 67%) 83%)",
    },

    screens: {
      desktop: "821px",
      tablet: "415px",
    },

    colors: {
      pureBlack: "hsl(0, 0%, 0%)",
      lightGrey: "hsl(0, 0%, 87%)",
      pureWhite: "hsl(0, 0%, 100%)",
      first: "hsl(28, 100%, 79%)",
      second: "hsl(329, 36%, 59%)",
      third: "hsl(229, 100%, 67%)",
      modal: "rgba(0, 0, 0, 0.5)",
      gradientBlackStart: "rgba(0, 0, 0, 0.0001)",
      gradientBlackEnd: "rgba(0, 0, 0, 0.661222)",
      gradient:
        "linear-gradient(to top right, hsl(28, 100%, 79%) 0%, hsl(329, 36%, 59%) 43%, hsl(229, 100%, 67%) 83%)",
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
      h1Mobile: [
        "32px",
        {
          lineHeight: "40px",
          fontWeight: "700",
          letterSpacing: "3.33px",
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
      menu: [
        "15px",
        {
          fontWeight: "700",
          lineHeight: "19.53px",
          letterSpacing: "2.5px",
        },
      ],
      stories: [
        "13px",
        {
          fontWeight: "400",
          lineHeight: "16.93px",
        },
      ],
    },
    extend: {
      gridTemplateRows: {
        2: "repeat(2, minmax(300px, 300px))",
      },
    },
  },
  plugins: [],
};
