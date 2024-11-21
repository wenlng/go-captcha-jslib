const config = require('../rspack.config')
const {rspack} = require('@rspack/core')

const configList = [
  {
    ...config,
    target: ['web', 'es5'],
    output: {
      library: {
        name: 'GoCaptchaLib',
        type: 'umd',
      },
      filename: '[name].global.js',
    },
  },
  {
    ...config,
    target: ['es5', 'node'],
    output: {
      library: {
        type: 'commonjs',
      },
      filename: '[name].cjs.js',
    },
  },
]

function build(config) {
  rspack(
    config,
    (err, stats) => {
      process.stdout.write(stats.toString() + '\n');
    },
  );
}

build(configList)