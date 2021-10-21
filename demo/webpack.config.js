const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: path.resolve(__dirname),

  entry: "./index.js",
  resolve: {
    fallback: {
      util: path.resolve(__dirname, "node_modules/util"),
      stream: require.resolve("stream-browserify"),
    },
  },
  output: {
    path: path.resolve(__dirname, "./"),
    // the output bundle
    filename: "./bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // do not emit compiled assets that include errors
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],

  devServer: {
    host: "127.0.0.1",
    port: 8090,
    historyApiFallback: false,
    hot: false,
    static: path.join(__dirname),
  },
};
