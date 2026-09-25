// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   modules: ['@nuxtjs/tailwindcss'],
//   // css: ['./app/assets/css/tailwind.css'],
// })

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  
  // Konfigurasi Head Global (Tab Title, Favicon, Meta Tag)
  app: {
    head: {
      title: 'The Kecilung Kitchen & Resto',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'The Kecilung Kitchen & Resto - Nikmati hidangan istimewa dan suasana nyaman di Surabaya.' 
        }
      ],
      link: [
        { 
          rel: 'icon', 
          type: 'image/webp', 
          // Pastikan gambar kecilung_logo.webp benar-benar ada di dalam folder: public/assets/images/
          href: '/assets/images/kecilung_logo.webp' 
        }
      ]
    }
  }
})