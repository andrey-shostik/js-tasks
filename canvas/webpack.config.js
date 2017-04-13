var ReloadPlugin = require('webpack-reload-plugin');
module.exports = {
  entry: './Main.js',
  output: {
    filename: './dist/Bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new ReloadPlugin('localhost')
  ]
};
