const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "dist")
  },
  resolveLoader: {
    modules: ["node_moudles", path.resolve(__dirname, "loaders")]
    // 别名
    // alias: {
    //   loaders: path.resolve(__dirname, "loaders", "loaders1")
    // },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // use: path.resolve(__dirname, "loaders"),
        use: 'loader1'
      }
    ]
  }
};
