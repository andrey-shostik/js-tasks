var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './static/main.js',
  output: {
    filename: './static/build/bundle.js'
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
    new ExtractTextPlugin('./static/build/styles.css')
  ]
};
