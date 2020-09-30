if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [
      require('autoprefixer'),
      require('tailwindcss'),
      require('cssnano')
    ]
  }
} else {
  module.exports = {
    plugins: [
      require('autoprefixer'),
      require('tailwindcss')
    ]
  }
}
