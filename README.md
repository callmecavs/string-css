# string-css

[![string-css on Travis](https://img.shields.io/travis/callmecavs/string-css.svg?style=flat-square)](https://travis-ci.org/callmecavs/string-css) [![string-css on NPM](https://img.shields.io/npm/v/string-css.svg?style=flat-square)](https://www.npmjs.com/package/string-css) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Create CSS-in-JS via tagged template strings.

## Install

```sh
$ npm i string-css --save
```

## API

The export is a singleton containing 3 methods:

* [`css`](#css)
* [`inject`](#inject)
* [`string`](#string)

Bearing in mind the use of the singleton pattern, calls to `inject` or `string` should appear after all styles are created.

### .css(string)

The function that parses CSS-in-JS template strings.

```javascript
import { css } from 'string-css'

// constants should be external
const BLACK = 'black'
const BLOCK = 'block'

// create rule with strings & values
// returns class names to apply to element
const rule = css`
  display: ${ BLOCK };
  width: 100px;
  height: 100px;

  background-color: ${ BLACK };
`

// apply class names to DOM element
document.getElementById('example').className = rule
```

### .inject()

Injects created styles into the DOM, using [`insertRule`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule).

```javascript
import { inject } from 'string-css'

// synchronously creates a style tag in the head, then inserts the rules
inject()
```

### .string()

Returns a string representation of all the created CSS.

```javascript
import { string } from 'string-css'

// synchronously creates a string of CSS
const style = string()
```

## See Also

* [hsx](https://github.com/callmecavs/hsx) - Static HTML sites with JSX and webpack (no React).
* [string-dom](https://github.com/callmecavs/string-dom) - Create HTML strings using JSX (or functions).

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
