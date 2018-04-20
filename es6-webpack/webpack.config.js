const webpack = require('webpack');
const path = require('path');

module.exports = {
   entry: ['./app/index.js'],
   output: {
     path: path.resolve(__dirname, './build'),
     filename: 'bundle.js'
   },
   module:{
     loaders:[
       {
         loader: 'bable-loader',
         test: /\.js$/,
         exclude: /node_modules/
       }
     ]
   },
   devServer: {
     port:8080,
     contentBase: './build',
     inline: true
   }

}
