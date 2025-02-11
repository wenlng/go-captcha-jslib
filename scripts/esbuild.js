const args = require('minimist')(process.argv.slice(2))
const {resolve} = require('path')
const {build} = require('esbuild')
const {sassPlugin} = require('esbuild-sass-plugin');

// const pkg = require(resolve(__dirname, `../package.json`))
const pkgName = 'gocaptcha'
const target = args._[0] || pkgName
const format = args.f || 'global'

// scss
if (format === 'scss') {
  const outfileMin = resolve(__dirname, `../dist/${target}.global.css`)
  build({
    entryPoints: [resolve(__dirname, `../src/scss/go-captcha.scss`)],
    outfile: outfileMin,
    bundle: true,
    minify: true,
    plugins: [sassPlugin()],
    loader: { '.scss': 'text' },
  }).then(() => {
    console.log(`>>>> ${pkgName} min css done ~~~`)
  })
  return
}

// iife   (function(){})()
// cjs    module.exports
// esm    import
const outputFormat = format.startsWith('global') ? 'iife' : format === 'cjs' ? 'cjs' : 'esm'

// js
const outfileMin = resolve(__dirname, `../dist/${target}.${format}.js`)
build({
  entryPoints: [resolve(__dirname, `../.build-cache/index.js`)],
  outfile: outfileMin,
  bundle: true,
  sourcemap: false,
  format: outputFormat,
  globalName: 'GoCaptcha',
  platform: format === 'cjs' ? 'node' : 'browser',
  minify: true,
  // plugins: [sassPlugin()],
  // loader: { '.scss': 'text' },
  external: ['*.scss']
}).then(() => {
  console.log(`>>>> ${pkgName} [${outputFormat}] min build done ~~~`)
})
