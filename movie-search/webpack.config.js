const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist",
  },
  devServer: {
    overlay: true,
  },

  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader",
          },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              plugins: function () {
                return [require("precss"), require("autoprefixer")];
              },
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },

      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin(),
    require("autoprefixer"),
  ],
};
