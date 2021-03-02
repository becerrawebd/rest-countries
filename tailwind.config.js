module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'dark': 'var(--bg-color-dark)',
        'light': 'var(--bg-color-light)',
        'shadow': 'var(--shadow-color)',
        'primary': 'var(--color-primary)',
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}