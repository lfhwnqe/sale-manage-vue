module.exports = {
  assetsDir: 'assets',
  // 选项...
  devServer: {
    proxy: 'http://localhost:7001'
  },
  // configureWebpack: {
  //   externals: {
  //     vue: "Vue",
  //     "vue-router": "VueRouter",
  //     "element-ui": "ELEMENT",
  //     "MuseUI": "muse-ui"
  //   }
  // }
};
