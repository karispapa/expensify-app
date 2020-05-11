const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,// only js files 
      exclude: '/node_modules/' // exclude files in the node modules 
    },{
      test: /\.s?css$/,// only css and scss files 
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  mode: 'development',
  devtool: 'cheap-module-eval-sourcemap',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};