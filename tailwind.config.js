/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // add new font family
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    width: {
      95: '95%',
      90: '90%',
      85: '85%',
      80: '80%',
      70: '70%',
      60: '60%',
      40: '40%',
    },
    maxWidth: {
      95: '95%',
      90: '90%',
      85: '85%',
      80: '80%',
      70: '70%',
      60: '60%',
      40: '40%',
    },
    minHeight: {
      95: '95%',
      90: '90%',
      85: '85%',
      80: '80%',
      70: '70%',
      60: '60%',
      40: '40%',
      '95v': '95vh',
      '90v': '90vh',
      '50v': '50vh',
    },
    screens: {
      500: '500px',
      400: '400px',
      300: '300px',
      1750: '1750px',
    },
    // colors: {
    //   warning: '#FF0000',
    //   info: '#183847',
    //   primary: '#3DB1C8',
    //   secondary: '#257180',
    //   success: '#00ff00',
    //   accent: '#4e4e4c',
    //   error: '#ffffff',
    //   ghost: '#FF0000',
    //   neutral: '#212121',
    //   'base-100': '#ffffff',
    //   'base-200': '#ECE8DD',
    // },
  },

  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
