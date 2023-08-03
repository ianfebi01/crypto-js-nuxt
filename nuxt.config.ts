// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    rsaPublic: process.env.NUXT_RSA_PUBLIC_KEY,
    rsaPrivate: process.env.NUXT_RSA_PRIVATE_KEY,
    aesSecret: process.env.NUXT_AES_SECRET,
    hmacSecret: process.env.NUXT_HMAC_SECRET,
  },
})
