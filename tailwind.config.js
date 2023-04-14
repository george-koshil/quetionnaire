/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '375px',
      'desktop': '1280px',
    },
    extend: {
      minWidth: {
        '328': '328px',
        '160': '160px',
        '190': '190px',
      },
      maxWidth: {
        '328': '328px',
        '214': '214px',
      },
      height: {
        '40': '40px',
      },
      borderRadius: {
        '16': '16px',
        '20': '20px',
      },
      padding: {
        '14': '14px',
        '22': '22px',
        '20': '20px',
        '9': '9px',
        '16': '16px',
        '36': '36px',
      },
      
      lineHeight: {
        '140': '140%',
      },
      spacing: {
        '172': '172px',
        '352': '352px',
        '330': '330px',
        '290': '290px',
        '10': '10px',
        '22': '22px',
        '20': '20px',
        '30': '30px',
        '50': '50px',
        '55': '55px',
        '-10': '-10px',
        '42': '42px',
      },
      boxShadow: {
        'btn': '2px 2px 6px rgba(84, 60, 151, 0.25)'
      },
      borderWidth: {
        '1': '1px',
      },
      borderColor: {
        'white': 'white'
      },
      fontSize: {
        sm: '12px',
        md: '14px',
        base: '18px',
        xl: '24px',
      },
      backgroundImage: {
        'main-grad': "linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543C97 55.84%, #6939A2 74.96%)",
        'body-grad': " linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543C97 55.84%, #6939A2 74.96%);",
      },
      colors: {
        beige: '#FFF0F0',
        'light-blue': '#EAEEF7',
        black: '#333333',
        'primary-500': '#8E8CF0',
        gray: '#C6C6C6',
        'light-gray': '#4F4F4F',
        'main-violet': '#6A3AA2',
        'md-light-gray': '#CDCDCD',
        'white-secondary': '#FBFBFF',
        'gray-primary': '#C6C6C6',
      }
    },
  },
  plugins: [],
}