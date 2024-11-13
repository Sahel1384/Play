/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        brand1: "url('./assets/img/brands/graygrids.svg')",
        brand2: "url('./assets/img/brands/graygrids-white.svg')",
        brand3: "url('./assets/img/brands/lineicons.svg')",
        brand4: "url('./assets/img/brands/lineicons-white.svg')",
        brand5: "url('./assets/img/brands/uideck.svg')",
        brand6: "url('./assets/img/brands/uideck-white.svg')",
        brand7: "url('./assets/img/brands/ayroui.svg')",
        brand8: "url('./assets/img/brands/ayroui-white.svg')",
        brand9: "url('./assets/img/brands/tailgrids.svg')",
        brand10: "url('./assets/img/brands/tailgrids-white.svg')",
        play1: "url('./assets/img/logo/logo.svg')",
        play2: "url('./assets/img/logo/logo-white.svg')",
        details: "url('./assets/img/blog/blog-details-01.jpg')",
      },
    },
  },
  plugins: [],
};
