module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|webp)$/,
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:8].[ext]'
          }
        }
      ]
    }
  }
}
