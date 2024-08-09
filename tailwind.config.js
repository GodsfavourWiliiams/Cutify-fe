/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryDark: '#1E308F',
        primary: {
          DEFAULT: '#57AEDD',
          10: '#DDEFF8',
          20: '#C7E4F4',
          30: '#ABD7EE',
          40: '#73BCE3',
          50: '#57AEDD',
          60: '#4991B8',
        },
        secondary: {
          DEFAULT: '#BABD4C',
          10: '#F1B08B',
          20: '#EBD9C3',
          30: '#DDC6A6',
          40: '#C6A06A',
          50: '#BABD4C',
          60: '#9B763F',
        },
        gray: {
          DEFAULT: '#212227',
          10: '#D3D3D4',
          20: '#B5B5B7',
          30: '#909193',
          40: '#6B6C6F',
          50: '#46474B',
          60: '#212227',
        },
        error: {
          DEFAULT: '#FF459C',
          10: '#FFD8DE',
          20: '#FFC2C9',
          30: '#FFA4AE',
          40: '#FF8692',
          50: '#FF6777',
          60: '#AA313D',
        },
        success: {
          DEFAULT: '#21D19F',
          10: '#D3F6EC',
          20: '#B5F0DF',
          30: '#90E8CF',
          40: '#6BE0BF',
          50: '#46D9AF',
          60: '#168B6A',
        },
      },
    },
  },
  plugins: [],
}
