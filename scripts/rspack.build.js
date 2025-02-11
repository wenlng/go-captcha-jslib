const config = require('../rspack.config')
const {rspack} = require('@rspack/core')

if (config.entry['example']) {
  delete config.entry['example']
}

if (config.plugins && Array.isArray(config.plugins)) {
  config.plugins = config.plugins.filter((plugin) => {
    return plugin?.name !== 'HtmlRspackPlugin'
  })
}

const configList = [
  {
    ...config,
    target: ['web', 'es5'],
    output: {
      library: {
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