const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src/');

module.exports = {
  target: 'electron-main',
  entry: path.resolve(SRC_DIR, 'index.ts'),
  output: {
    filename: 'index.js',
  },
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
  optimization: {
    namedModules: true,
  },
};
