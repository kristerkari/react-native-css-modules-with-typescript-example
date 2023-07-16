const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var babelLoader = {
  loader: 'babel-loader',
  options: {
    configFile: false,
    babelrc: false,
    presets: ['@babel/env', 'react', 'module:metro-react-native-babel-preset'],
    plugins: ['react-hot-loader/babel'],
  },
};

module.exports = {
  entry: ['./polyfills', 'react-hot-loader/patch', './index.web.js'],
  devServer: {
    static: './',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          babelLoader,
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                noEmit: false,
                target: 'es5',
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
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'dts-css-modules-loader',
            options: {
              namedExport: true,
              camelCase: true,
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCaseOnly',
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer()],
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'dts-css-modules-loader',
            options: {
              namedExport: true,
              camelCase: true,
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCaseOnly',
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer()],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
    extensions: ['.ts', '.web.tsx', '.tsx', '.js', '.jsx'],
    mainFields: ['browser', 'main'],
  },
};
