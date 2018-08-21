module.exports = {
  entry: './src/client.jsx',
  mode: 'none',
  output: {
    path: __dirname + '/static/dist',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}