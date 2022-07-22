module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        push: {
          '0%': { opacity: '1' },
          '50%': { opacity: '.5' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        push: 'push 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionTimingFunction: {
        'out-default': 'cubic-bezier(0, 0, 0.58, 1)',
      },
    },
  },
  plugins: [],
};
