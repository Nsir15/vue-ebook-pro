var path = require('path')
const { VueLoaderPlugin }  = require('vue-loader');
const HtmlWebpackPlugin  = require('html-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const webpack = require('webpack');

module.exports = {
  // 入口:可以是字符串、数组、对象。我们这里入口只有一个，所以写一个字符串即可
  entry:'./src/main.js',
  // 出口：通常是一个对象，里面至少包含两个重要属性，path和filename
  output:{
    path:path.resolve(__dirname,'dist'), // path 通常是一个绝对路径
    filename:'bundle.js',
    // publicPath:'dist/'
  },
  module: {
    rules: [
        {
          test: /\.css$/,
          use: [
              'style-loader',
              'css-loader' 
            ] 
        } ,
        {
          test: /\.less$/,
          use: [{
            loader: "style-loader" // creates style nodes from JS strings
          }, {
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "less-loader" // compiles Less to CSS
          }]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 8192,
              name:'img/[name].[hash:8].[ext]'
            }
          }]
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        },
        {
          test:/\.vue$/,
          use:['vue-loader']
        }
      ] ,  
  },
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('最终解释权归MRNAN所有'),
    new HtmlWebpackPlugin({
      template:'index.html',
    }),
    // new UglifyJsPlugin()
  ],
  devServer:{
    contentBase:'./dist',
    inline:true
  }
};