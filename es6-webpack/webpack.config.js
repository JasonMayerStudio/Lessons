const webpack = require('webpack');
const path = require('path');

module.exports = {
   entry: ['./app/index.js'],
   output: {
     path: path.resolve(__dirname, './build'),
     filename: 'bundle.js'
   },
   module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
   devServer: {
     port:8080,
     contentBase: './build',
     inline: true
   }
}
