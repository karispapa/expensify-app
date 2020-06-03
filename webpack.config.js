const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === 'test'){
// set test environmental variables 
require('dotenv').config({'path': '.env.test'})
}else if(process.env.NODE_ENV === 'development'){
  // set development environmental variables 
require('dotenv').config({'path': '.env.development'})
}
 
module.exports = (env)=>{

  const isProduction = env === 'production'
  console.log(env)
  return {
    entry: ['@babel/polyfill', './src/app.js'],
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
            // 'style-loader', used for inline css, not required in prod
            {
              loader: MiniCSSExtractPlugin.loader
            },
            { loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            { loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
       
       
      }]
    },
    plugins : [new MiniCSSExtractPlugin({
      filename: 'styles.css'}),
    new webpack.DefinePlugin({
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
      'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
    })],
    mode: isProduction ? 'production': 'development',
    devtool: isProduction ? 'source-maps': 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
}
