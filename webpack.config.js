const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "client", "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: { loader: "awesome-typescript-loader" },
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", "ts", "tsx"],
  },
};
