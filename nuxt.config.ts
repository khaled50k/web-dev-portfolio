// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Khaled Walead Abu Eriban - Full Stack Developer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Experienced Full Stack Developer passionate about crafting user-centered web applications. Skilled in Vue.js, Node.js, React.js, and Tailwind CSS.",
        },
        // Open Graph / Facebook
        {
          hid: "og:title",
          property: "og:title",
          content: "Khaled Walead Abu Eriban - Full Stack Developer",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Experienced Full Stack Developer passionate about crafting user-centered web applications. Skilled in Vue.js, Node.js, React.js, and Tailwind CSS.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "URL to an image representing your website (1200x630px recommended)",
        },
        { hid: "og:url", property: "og:url", content: "URL of your website" },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "Khaled Walead Abu Eriban Portfolio",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        // Twitter
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Khaled Walead Abu Eriban - Full Stack Developer",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Experienced Full Stack Developer passionate about crafting user-centered web applications. Skilled in Vue.js, Node.js, React.js, and Tailwind CSS.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content:
            "URL to an image representing your website (1200x630px recommended)",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        // Add any other specific meta tags or links your website requires
      ],
    },
  },
  // devtools: { enabled: true },
  modules: ["@vite-pwa/nuxt", "@nuxtjs/tailwindcss"],
  pwa: {
    // disables the icon module
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
    manifest: {
      icons: [
        {
          src: "icons/icon_64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icons/icon_144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "icons/icon_192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/icon_512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      name: "Khaled Walead Abu Eriban - Full Stack Developer", // Your app's name
      short_name: "Portfolio", // Short name for the app (used on the home screen)
      start_url: "/", // Starting URL when the app is launched
      display: "standalone",
      background_color: "#0a0a0a",
      theme_color: "##9b5cff", // Your preferred theme color
    },
  },
});
