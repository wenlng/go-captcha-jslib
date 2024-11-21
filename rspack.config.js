const path = require('path')
const { defineConfig } = require('@rspack/cli');
const { HtmlRspackPlugin } = require('@rspack/core');
const isProduction = process.env.NODE_ENV === 'production';

const config = defineConfig({
  context: __dirname,
  target: ['web', 'es5'],
  mode: isProduction ? 'production' : 'development',
  experiments: {
    css: true,
  },
  entry: {
    gocaptchalib: './src/index.ts',
    example: './example/index.ts',
  },
  output: {
    clean: true,

    library: {
      type: 'umd',
    },
    globalObject: 'this',
    filename: '[name].js',
  },
  optimization: {
    minimize: true,
  },
  resolve: {
    tsConfig: path.resolve(__dirname, './tsconfig.json'),
    extensions: ['.ts', '.js', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'builtin:swc-loader',
        options: {
          jsc: {
            parser: {
              syntax: 'typescript',
            },
          },
        },
        type: 'javascript/auto',
      },
      {
        test: /\.scss$/i,
        use: [
          'sass-loader'
        ],
        type: 'css',
      },
    ],
  },
  plugins: [
    new HtmlRspackPlugin({
      template: './example/index.html'
    }),
  ],
  devServer: {
    allowedHosts: 'all',
  },
})

module.exports = config