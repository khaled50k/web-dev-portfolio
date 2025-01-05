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
            "Experienced Full Stack Developer passionate about crafting user-centered web applications. Skilled in Vue.js, Node.js, React.js, Tailwind CSS, and Next.js.",
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
            "Experienced Full Stack Developer passionate about crafting user-centered web applications. Skilled in Vue.js, Node.js, React.js, Tailwind CSS, and Next.js.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://media.graphassets.com/fq6etNuQR2K86WAaBsbx", // Replace with your image URL
        },
        { hid: "og:url", property: "og:url", content: "https://author.ibdaatec.com" },
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
            "Experienced Full Stack Developer passionate about crafting user-centered web applications. Skilled in Vue.js, Node.js, React.js, Tailwind CSS, and Next.js.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://media.graphassets.com/fq6etNuQR2K86WAaBsbx", // Replace with your image URL
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "stylesheet", href: "/styles/global.css" }, // Example of a global stylesheet
      ],
    },
  },
  modules: ["@vite-pwa/nuxt", "@nuxtjs/tailwindcss"],
  pwa: {
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
      name: "Khaled Walead Abu Eriban - Full Stack Developer",
      short_name: "Portfolio",
      start_url: "/",
      display: "standalone",
      background_color: "#0a0a0a",
      theme_color: "#9b5cff",
      description:
        "An engaging portfolio showcasing the work and expertise of Khaled Walead Abu Eriban, a Full Stack Developer with a passion for modern web technologies.",
    },
  },
});
