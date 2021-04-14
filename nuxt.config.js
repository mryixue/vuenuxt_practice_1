module.exports = {
  dir: {
    pages: 'routes',
    components: 'compos'
  },

  modules: ['@nuxtjs/axios'],

  plugins: ['~/plugins/axios.js'],

  components: [
    '~/compos/'
  ],

  css: [
    '~/assets/css/reset.sass',
  ]

}