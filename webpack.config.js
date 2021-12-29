const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/tetris.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 9000,
    hot: true,
  },
};
