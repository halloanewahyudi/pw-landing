// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-locomotive-scroll'
  ],
  
//  css:['./assets/typography.css'],
  tailwindcss:{
    configPath:'tailwind.config.js',
    cssPath:'./assets/style.css'
  },
  //saya ingin membuat baseurlrest api
    runtimeConfig: {
    public: {
      baseUrl: 'https://wahyudi.clean.web.id/wp-json'
    }
  }

})