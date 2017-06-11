const expect = require('chai').expect
const lib = require('../dist/string-css.js')

const {
  css,
  inject,
  render
} = lib

/* eslint-env mocha */

describe('string-css', () => {
  it('should work', () => {
    // CSS prop constants
    const BLACK = 'black'
    const BLOCK = 'block'

    // add rule with strings & values
    const rule = css`
      display: ${ BLOCK };
      width: 100px;
      height: 100px;

      background-color: ${ BLACK };
    `

    // add another rule some shared prop:value pairs
    const other = css`
      display: ${ BLOCK };
      width: 50px;
      height: 50px;

      background-color: ${ BLACK };
    `

    // render styles to string
    const test = render()

    // notice expected has the common rules deduped
    const expected = '.css-4zleql{display:block}.css-1pzk433{width:100px}.css-1hgqtge{height:100px}.css-ayn9pq{background-color:black}.css-1u5b859{width:50px}.css-1leqlh9{height:50px}'

    // test rendered string against expected
    expect(test).to.equal(expected)
  })
})
