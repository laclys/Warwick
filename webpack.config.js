const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  module: {
    rules:[
      {
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          // placeholder
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limiit: 2048
        }
      }
    },
      {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2, // 通过@import 引入的css文件也要去走前两个loader
            modules: true // 开启css模块化打包
          }
        },
        'sass-loader',
        'postcss-loader'
      ]
    }
  ]
  },
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}