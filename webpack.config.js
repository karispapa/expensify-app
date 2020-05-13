const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
 
module.exports = (env)=>{

  const isProduction = env === 'production'
  console.log(env)
  return {
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
      filename: 'styles.css'})],
    mode: isProduction ? 'production': 'development',
    devtool: isProduction ? 'source-maps': 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
}
