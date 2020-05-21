const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src/');

module.exports = {
  node: {
    __filename: false,
    __dirname: false,
  },
  target: 'electron-main',
  entry: path.resolve(SRC_DIR, 'index.ts'),
  output: {
    filename: 'index.js',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.string$/,
        use: [
          'raw-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.js', '.ts'],
  },
};
