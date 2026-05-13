/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      spacing: {
        50: '12.5rem',    // 200px
        100: '25rem',     // 400px
        205: '51.25rem',  // 820px
        230: '57.5rem',   // 920px
        240: '60rem',     // 960px
      },
      margin: {
        50: '12.5rem',
        80: '20rem',
        100: '25rem',
        205: '51.25rem',
        230: '57.5rem',
        240: '60rem',
      },
      padding: {
        50: '12.5rem',
        100: '25rem',
        205: '51.25rem',
      },
    },
  },
  content: ['./index.html', './src/**/*.{js,jsx}'],
};
