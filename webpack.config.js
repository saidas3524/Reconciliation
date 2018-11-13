const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const devMode = process.env.NODE_ENV !== "production";

const VENDOR_LIBS = [
  "babel-polyfill",
  "react",
  "redux",
  "react-redux",
  "react-loadable",
  "react-dom",
  "redux-form",
  "bootstrap",
  "react-datepicker",
  "reactstrap",
  "moment",
  "isomorphic-fetch",
  "redux-saga",
  "react-router",
  "immutable",
  "query-string"
];

module.exports = {
  entry: {
    bundle: ["babel-polyfill", "./src/index.js"],
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname),
    publicPath: "/",
    filename: "build/js/[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-1"],
          plugins: ["transform-object-rest-spread"]
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          {
            loader: "postcss-loader", options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[name]-[hash:8].[ext]',
              publicPath: '/build/documents/',
              outputPath: '/build/documents/'

            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",

            options: {
              limit: 10000,
              publicPath: '/build/assets/',
              outputPath: '/build/assets/'
            }
          },
          "image-webpack-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "build/css/[name].[hash].css",
      chunkFilename: "build/css/[id].[hash].css"
    }),
    // new BundleAnalyzerPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HTMLWebpackPlugin({
      template: "src/app/templates/index.html"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          enforce: true
        },
      }
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./"
  }
};
