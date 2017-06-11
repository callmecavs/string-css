import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

const info = require('./package.json')

const config = {
  entry: 'src/string-css.js',
  plugins: [
    resolve(),
    babel({
      babelrc: false,
      presets: [
        [
          'env', {
            modules: false,
            targets: {
              browsers: ['last 2 versions']
            }
          }
        ]
      ]
    })
  ],
  targets: [
    {
      dest: info.main,
      format: 'umd',
      moduleName: 'StringCSS'
    }, {
      dest: info.module,
      format: 'es'
    }
  ]
}

export default config
