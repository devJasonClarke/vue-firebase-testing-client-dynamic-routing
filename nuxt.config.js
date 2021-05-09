

export default {

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',



  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Genr8-money-tracking',
    htmlAttrs: {
      lang: 'en'
    },
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
    "~/assets/scss/index.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
   generate: {
      routes: ['/','/clients','/addClient'/* ,'/client/JPWB1V89cgBskNgqTBy5' */],
      exclude: ['/client']

  }, 

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBjeQ6IkYEtlIvTjQu9BDW3SOb4pAmQu24",
          authDomain: "genr8-3d-money-tracking.firebaseapp.com",
          projectId: "genr8-3d-money-tracking",
          storageBucket: "genr8-3d-money-tracking.appspot.com",
          messagingSenderId: "430711737245",
          appId: "1:430711737245:web:b916a77ccd918d377a7d74"
         },
        services: {
          auth: true,
            firestore: true
          }
        }
      
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
