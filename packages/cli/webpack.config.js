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
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)s$/,
        exclude: [/(node_modules)/, path.join(__dirname, "bin")],
        use: [{ loader: require.resolve("ts-loader") }],
      },
    ],
  },
};
