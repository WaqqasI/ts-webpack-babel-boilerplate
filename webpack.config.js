const HtmlWebPackPlugin = require("html-webpack-plugin");
//const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                  targets: {
                    node: true
                  },
              }
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ]
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: ['src', 'node_modules']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    //new ForkTsCheckerWebpackPlugin()
  ]
};
