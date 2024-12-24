/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/assets/images/banner-image.jpg')",
        'about-banner': "url('../src/assets/images/about-banner.jpg')",
        'academics-banner': "url('../src/assets/images/academics-banner.jpg')",
        'admissions-banner': "url('../src/assets/images/admissions-banner.jpg')",
        'contact-banner': "url('../src/assets/images/contact-banner.png')",
        'gallery-banner': "url('../src/assets/images/gallery-banner.jpeg')",
      }
    },
  },
  plugins: [],
}