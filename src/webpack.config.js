const path = require("path");
// var CommonsChunkPlugin = require("../../lib/optimize/CommonsChunkPlugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.glsl$/,
        exclude: /node_modules/,
        loader: "raw-loader",
      },
    ],
  },
};
