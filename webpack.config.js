const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [{
      test: /\.ts$/,
      use: "ts-loader"
    }, {
      test: /\.node$/,
      loader: 'node-loader'
    }]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './res',
      to: path.resolve(__dirname, 'dist')
    }])
  ],
  resolve: {
    extensions: [
      '.ts', '.js'
    ]
  },
  node: {
    __dirname: false
  }
};
