// https://nuxt.com/docs/api/configuration/nuxt-config
import languages from "./lang/languages";
import theme from "./config/theme";
import brand from "./assets/text/brand";

export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Bright & Fresh | Professional Cleaning Services",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "BrighFresh schoonmaakbedrijf in Werkendam. Professionele schoonmaakdiensten voor bedrijven en particulieren.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "schoonmaakbedrijf Werkendam, schoonmaakbedrijf Gorinchem, schoonmaakbedrijf Sliedrecht, schoonmaakbedrijf Dordrecht",
        },
        // Local business meta
        { name: "geo.placename", content: "Werkendam" },
        {
          name: "google-site-verification",
          content: "kRSvM5nJstrL2bubbDxWw_8j7BgrQySgdHcb8qA04Vc",
        },
        { name: "geo.region", content: "NL-NH" },
        { name: "msapplication-TileColor", content: "#FFFFFF" },
        { name: "msapplication-TileImage", content: "/new-logo.png" },
        // PWA primary color
        { name: "theme-color", content: theme.primary },
        // Facebook
        { property: "author", content: "soroushbsp" },
        { property: "og:site_name", content: "https://brighfresh.com/" },
        { property: "og:locale", content: "nl_NL" },
        { property: "og:type", content: "website" },
        // Twitter
        { property: "twitter:site", content: "https://brighfresh.com/" },
        { property: "twitter:domain", content: "https://brighfresh.com/" },
        { property: "twitter:creator", content: "brighfresh" },
        { property: "twitter:card", content: "summary" },
        { property: "twitter:image:src", content: "/new-logo.png" },
        { property: "og:url", content: brand.starter.url },
        { property: "og:title", content: brand.starter.projectName },
        { property: "og:description", content: brand.starter.desc },
        { name: "twitter:site", content: brand.starter.url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: brand.starter.img },
        { property: "og:image", content: brand.starter.img },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
      ],
      link: [
        // Favicon
        { rel: "shortcut icon", href: "/new-logo.png" },
        { rel: "apple-touch-icon", sizes: "57x57", href: "/new-logo.png" },
        { rel: "apple-touch-icon", sizes: "60x60", href: "/new-logo.png" },
        { rel: "apple-touch-icon", sizes: "72x72", href: "/new-logo.png" },
        { rel: "apple-touch-icon", sizes: "76x76", href: "/new-logo.png" },
        { rel: "apple-touch-icon", sizes: "114x114", href: "/new-logo.png" },
        { rel: "apple-touch-icon", sizes: "120x120", href: "/new-logo.png" },
        { rel: "apple-touch-icon", sizes: "144x144", href: "/new-logo.png" },
        { rel: "apple-touch-icon", sizes: "152x152", href: "/new-logo.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/new-logo.png" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/new-logo.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/new-logo.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/new-logo.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/new-logo.png",
        },
        { rel: "manifest", href: "/manifest.json" },
        // Fonts and Icons
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css",
        },
      ],
    },
  },
  components: false,
  css: [
    "aos/dist/aos.css",
    "vuetify/lib/styles/main.sass",
    "@splidejs/vue-splide/css",
    "@/assets/scss/vuetify-overide.scss",
    "@/assets/scss/transition.scss",
    "@/assets/scss/vendors/animate.css",
    "@/assets/scss/vendors/animate-extends.css",
    "@/assets/scss/vendors/hamburger-menu.css",
  ],
  modules: ["@nuxtjs/i18n", "vite-plugin-eslint", "@vite-pwa/nuxt"],
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Bright & Fresh Cleaning Services",
      short_name: "Bright&Fresh",
      description: "Professional cleaning services for homes and offices",
      theme_color: "#009688",
      background_color: "#FFFFFF",
      display: "standalone",
      start_url: "/",
      icons: [
        {
          src: "/new-logo.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "/new-logo.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "/new-logo.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  i18n: {
    locales: languages,
    lazy: true,
    langDir: "lang",
    defaultLocale: "nl",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // okay to keep
      alwaysRedirect: false, // ⬅️ important to avoid force redirect on sitemap and other non-html routes
    },
    vueI18n: "./config/i18n.js",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: `@import "@/assets/scss/styles.scss";` }, // eslint-disable-line
      },
    },
    plugins: [
      // eslintPlugin(),
    ],
  },
  build: {
    transpile: ["vuetify"],
    extend(config) {
      config.performance.hints = false;
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0", // Ensure it's accessible globally
  },
  devServer: {
    port: 8000,
  },
});
