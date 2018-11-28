const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Top',
    titleTemplate: '%s - showKs',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'showKs'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Portal app for showKs'
      },
      // {
      //   hid: "og:image",
      //   name: "og:image",
      //   content: "https://showks.containerdays.jp/img/icons/ogp.jpg"
      // },
      {
        hid: 'og:image:width',
        name: 'og:image:width',
        content: '1200'
      },
      {
        hid: 'og:image:height',
        name: 'og:image:height',
        content: '630'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://showks.containerdays.jp/'
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'showKs'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@containerdaysjp'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@containerdaysjp'
      }
      // {
      //   hid: "twitter:image",
      //   name: "twitter:image",
      //   content: "https://showks.containerdays.jp/img/icons/ogp.jpg"
      // }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png',
        sizes: '16x16'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui', '@/plugins/font-awesome'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: ['@nuxtjs/pwa'],
  workbox: {
    dev: true //開発環境でもPWAできるように
  },
  manifest: {
    name: 'showKs Portal',
    short_name: 'showKs Portal',
    title: 'showKs Portal',
    'og:title': 'showKs Portal',
    description: 'Portal app for showKs',
    'og:description': 'Portal app for showKs',
    lang: 'ja',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  }
}
