import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL
},
  buildModules: ['@pinia/nuxt'],
    imports: {
        dirs: ['stores'],
      },    
  meta: {
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    script: [],
    modules: [
        
        '@pinia/nuxt',
        {
            autoImports: ['defineStore',['defineStore', 'definePiniaStore'], 'acceptHMRUpdate'],
          },
        ,
      ],


    link: [

      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
      },
    ],
  },
  css: ["assets/styles/main.scss"],
});


