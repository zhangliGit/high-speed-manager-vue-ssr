module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ssrapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ssrapp demo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /**
   * modules
   */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'https://cnodejs.org/api/v1',
    // or other axios configs.
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /**
   * Global Css
   */
  css: [
    'assets/font/iconfont.css',
    '~/assets/css/common.css',
    {
      src: 'corlib/lib/flex.css'
    },
    {
      src: 'corlib/lib/base.css'
    }
  ],
  /**
   * Global Js
   */
  plugins: [
    '~/assets/js/common.js',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

