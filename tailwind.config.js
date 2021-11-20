// --------------------------------------------------------------------
// buid tailwind:
// npx tailwindcss-cli@latest build  -i ./src/tailwind.css -o ./styles.css
// --------------------------------------------------------------------
// when buiding tailwind for production:
// module.exports = {
//   purge: {
//     enabled: true, <----- set true to remove unused styles ---------
// --------------------------------------------------------------------

module.exports = {
  purge: {
    enabled: true,
    content: ["./*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        brand: {
          "soft-red": "hsl(7, 99%, 70%)",
          yellow: "hsl(51, 100%, 49%)",
          "dark-cyan": "hsl(167, 40%, 24%)",
          "dark-blue": "hsl(198, 62%, 26%)",
          cyan: "hsl(168, 34%, 41%)",
          "very-dark-blue": "hsl(212, 27%, 19%)",
          "very-dark-grey-blue": "hsl(213, 9%, 39%)",
          "dark-grey-blue": "hsl(232, 10%, 55%)",
        },
      },
      backgroundImage: (theme) => ({
        "header-mobile": "url('/images/mobile/image-header.jpg')",
        "header-desktop": "url('/images/desktop/image-header.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
