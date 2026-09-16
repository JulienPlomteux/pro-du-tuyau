import animate from "tailwindcss-animate";

/** Pro du Tuyau — "tough trade" palette sampled from the reference design. */
export default {
  darkMode: ["selector", "class"],
  prefix: "",
  content: ["./app/**/*.{vue,js,ts,jsx,tsx}", "./nuxt.config.ts"],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        /* Charcoal scale — sampled #171516 (bands) / #211F21 (nav) */
        coal: {
          DEFAULT: '#171516',
          deep:   '#121011',
          nav:    '#211F21',
          line:   '#2E2B2D',
          muted:  '#8A8587',
        },
        /* Signature red — sampled #C9272B */
        blaze: {
          DEFAULT: '#C9272B',
          dark:    '#A81E22',
          deep:    '#8E181C',
        },
        bone: {
          DEFAULT: '#F5F4F3',
          dim:     '#E9E7E5',
        },
        ink: {
          DEFAULT: '#1A191B',
          soft:    '#3A373A',
          muted:   '#6E6A6D',
        },
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        nav: ['"Bebas Neue"', 'Anton', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: '9999px',
      },
    },
  },
  plugins: [animate],
};
