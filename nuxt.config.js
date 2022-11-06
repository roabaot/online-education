import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // titleTemplate: '%s - Ahmed Al-akbari',
    title: 'Ahmed Al-akbari',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/index.scss',
    '~assets/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/core-components.client.js', ssr: false },
    '~plugins/icons.js',
    // '~plugins/axios.js',
    '~plugins/vee-validate.js'
    // '~plugins/star-rating.client.js',
    // '~plugins/persistedState.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
    ['@nuxtjs/dotenv', { systemvars: true }],
    'nuxt-socket-io'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:4000',
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' }
  },

  // proxy: {
  //   "/api": 'http://localhost:4000'
  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~assets/variables.scss'],
    rtl: false,
    // treeShake: true,
    theme: {
      themes: {
        dark: {
          subbackground: "#0a0d14",
          background: "#181d2b",
          primary: '#2878EB',
          accent: '#16162a',
          secondary: '#28283e',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          subbackground: "#0a0d14",
          background: "#181d2b",
          primary: '#2878EB',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#28a745',
          warning: '#FFC107'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules']
  },

  io: {
    // module options
    sockets: [{
      name: 'main',
      url: 'http://localhost:4000',
      default: true,
      vuex: {
        mutations: [{
          // When "messages" is received, 
          // commit mutation "newMessage"
          messages: 'newMessage' 
        },
        {
          // When "messages" is received, 
          // commit mutation "setMessages"
          messages: 'setMessages'
        }
        ],
        actions: [
          // When "messages" is received,
          // dispatch action "newMessage"
          { messages: 'newMessage' } 
        ],

        emitBacks: [
          // When "messages" state changes,
          // emit back the event "messages"
          'messages'
        ]
      }
    }]
  },

  auth: {
    strategies: {
      local: {
        // endpoints: {
        //   login: {
        //     propertyName: 'token'
        //   },
        //   logout: true
        // }

        token: {
          property: 'token',
          global: true
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user'
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          // logout: { url: '/logout', method: 'post' },
          user: { url: '/getUser', method: 'get' }
        }
      }
    }
  },

  // serverMiddleware: ['~/server-middleware/cart']

  extend (config, ctx) {
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
  }
}
