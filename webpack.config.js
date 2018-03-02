const webpack = require("webpack");
const path = require("path");

var babelLoader = {
  loader: "babel-loader",
  query: {
    babelrc: false,
    presets: ["es2015", "react", "react-native"],
    plugins: ["react-hot-loader/babel"],
  },
};

module.exports = {
  entry: ["react-hot-loader/patch", "./index.web.js"],
  devServer: {
    hot: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          babelLoader,
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                target: "es5",
              },
            },
          },
        ],
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        ...babelLoader,
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[hash].[ext]",
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "typings-for-css-modules-loader",
            options: {
              namedExport: true,
              camelCase: true,
              modules: true,
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "typings-for-css-modules-loader",
            options: {
              namedExport: true,
              camelCase: true,
              modules: true,
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "react-native": "react-native-web",
    },
    extensions: [".ts", ".web.tsx", ".tsx", ".js", ".jsx"],
    mainFields: ["jsnext:main", "browser", "main"],
  },
};
