module.exports = {
    apps: [
      {
        name: "author-ibdaatec", // Application name
        script: ".output/server/index.mjs", // Path to the built Nuxt.js server entry point
        exec_mode: "cluster", // Enable cluster mode for load balancing
        instances: "max", // Adjust to the number of CPU cores or set a specific number
        env: {
          NODE_ENV: "production", // Environment variables
          PORT: 3200, // Port to run the application
        },
      },
    ],
  };
  