const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
      assetModuleFilename: "assets/[hash][ext]"
  },
  mode: 'development',
  module: {
      rules: [ 
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: false },
            }
          ]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
            {
              loader: "sass-resources-loader",
              options: {
                resources: [
                  'src/styles/vars.scss'
                ]
              }
            }
          ],
          
        },

      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
      }
    ),
  ],
  optimization: {
    minimize: true,
  },
  devServer: {
      compress: true,
      port: 3000,
  },
};