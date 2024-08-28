import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        mainColor: '#f3f7f9',
        subColor: '#858382',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: "0"},
          '100%': {opacity: "1"},
        },
        fadeUp: {
          '0%': {transform: "translateY(100px)", opacity: "0"},
          '100%':{transform: "translateY(0px)",opacity: "1"}
        },
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
        fadeUp: "fadeUp .5s linear"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
};
export default config;
