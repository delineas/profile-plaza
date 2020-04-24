import path from "path";

module.exports = {
  mode: "universal",
  modules: ["@nuxtjs/axios"],

  axios: {
    // proxyHeaders: false
  },

  plugins: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // add frontmatter-markdown-loader
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, "content"),
        loader: "frontmatter-markdown-loader"
      });
    }
  },

  buildModules: ["@nuxtjs/tailwindcss"]
};
