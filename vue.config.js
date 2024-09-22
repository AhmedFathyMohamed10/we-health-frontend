module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8990',
        changeOrigin: true,
        secure: false,
      },
    },
    port: 8080,
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "/public/assets/scss/_variables.scss";`
      },
      less: {
        // additionalData: `@import "@/your-path-to-less-variables";`
      }
    }
  },
  // configureWebpack: {
  //   resolve: {
  //     fallback: {
  //       // crypto: require.resolve("crypto-browserify"),
  //       // stream: require.resolve("stream-browserify"),
  //       // buffer: require.resolve("buffer/"),
  //       // path: require.resolve("path-browserify")
  //     }
  //   },
  // },
  chainWebpack: (config) => {
    config.module
      .rule("i18n")
      .resourceQuery(/blockType=i18n/)
      .type("javascript/auto")
      .use("i18n")
      .loader("@kazupon/vue-i18n-loader")
      .end();
  },
};
