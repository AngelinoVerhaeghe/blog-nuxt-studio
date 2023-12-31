// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig( {
    devtools: { enabled: false },
    css: [ '~/assets/css/main.css' ],
    modules: [
        '@nuxt/content',
        'nuxt-icon'
    ],
    content: {
        // https://content.nuxtjs.org/api/configuration
        highlight: {
            theme: 'dracula',
            preload: ['ts', 'js', 'css', 'javascript', 'vue', 'tsx', 'bash', 'php', 'json', 'sql']
        },
        markdown: {
            anchorLinks: false,
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
} );
