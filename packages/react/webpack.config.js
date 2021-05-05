const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/index.ts",
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)s(x)?$/,
        exclude: /(node_modules|ui)/,
        use: [{ loader: require.resolve("ts-loader") }],
      },
    ],
  },
};
