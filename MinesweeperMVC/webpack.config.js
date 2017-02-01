var ReloadPlugin = require('webpack-reload-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './app/Main.js',
  output: {
    filename: './dist/Bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./dist/Bundle.css'),
    new ReloadPlugin('localhost')
  ]
};
