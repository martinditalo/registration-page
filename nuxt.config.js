export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'registration-page',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['quasar/dist/quasar.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/quasar', '@/plugins/vee-validate.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['quasar'],
  },
  auth: {
    strategies: {
      google: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://accounts.google.com/o/oauth2/v2/auth',
          token: 'https://oauth2.googleapis.com/token',
          userInfo: 'https://www.googleapis.com/oauth2/v3/userinfo',
          logout: 'https://accounts.google.com/logout',
        },
        codeChallengeMethod: '',
        responseType: 'token id_token',
        redirectUri: 'http://localhost:3000/auth/callback',
        clientId: 'YOUR_GOOGLE_CLIENT_ID', // replace with your Google Client ID
        scope: ['openid', 'profile', 'email'],
      },
      facebook: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://www.facebook.com/v10.0/dialog/oauth',
          token: 'https://graph.facebook.com/v10.0/oauth/access_token',
          userInfo: 'https://graph.facebook.com/me?fields=id,name,email',
          logout: 'https://www.facebook.com/logout.php',
        },
        responseType: 'token',
        redirectUri: 'http://localhost:3000/auth/callback',
        clientId: 'YOUR_FACEBOOK_APP_ID', // replace with your Facebook App ID
        scope: ['public_profile', 'email'],
      },
    },
  },
}
