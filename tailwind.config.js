/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // path/to/template/files
    // "./src/**/*.{html,js}"
    // ex: /resources/views/welcome.blade.php
    "/resources/**/*.{blade.php, js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
