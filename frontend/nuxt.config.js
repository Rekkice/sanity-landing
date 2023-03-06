// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/sanity', '@nuxtjs/tailwindcss'],
    sanity: {
        projectId: '38nlo03o',
        dataset: 'production',
    }
})
