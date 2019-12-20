const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports  = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Learn Webpack'
        })
    ],
    module: {
            rules: [
              {
                test: /\.css$/,
                use: [
                  'style-loader',
                  {                   
                    loader: 'css-loader',
                    options: {
                      modules: true,
                    },
                  },
                ]
              }
         ]
          }
}