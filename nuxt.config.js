module.exports = {
  dir: {
    pages: 'routes',
    components: 'compos'
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  plugins: ['~/plugins/axios.js'],

  components: [
    '~/compos/'
  ],

  css: [
    '~/assets/css/reset.sass',
    '~/assets/css/style.sass',
    '~/assets/css/user.sass'
  ],

  styleResources: {
    sass: '~/assets/css/style.sass'
  }

}