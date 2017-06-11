import hash from './hash.js'

const css = () => {
  const style = {}

  // immutably concat strings and values together
  const concat = (strings, values) => {
    const len = strings.length

    let index
    let result = ''

    for (index = 0; index < len; index++) {
      result += strings[index]

      // catch one less value than string
      if (index !== len - 1) {
        result += values[index]
      }
    }

    return result
  }

  // parse template string into class name(s)
  const css = (strings, ...values) => {
    // reduce CSS string to an array of "prop:value" rule strings
    const rules = concat(strings, values)
      .replace(/\s/g, '')         // remove whitespace (including new lines)
      .slice(0, -1)               // remove trailing semicolon
      .split(';')                 // split on semicolons yielding rule strings

    // build the cumulative class name, using the cache
    let name = ''

    rules.forEach(rule => {
      if (style[rule]) {
        // cache hit - append: prefix, cached class name, whitespace
        name += `css-${style[rule]} `
      } else {
        // create deterministic class name from "prop:value" string
        const hashed = hash(rule)

        // cache it
        style[rule] = hashed

        // append: prefix, new class name, whitespace
        name += `css-${hashed} `
      }
    })

    // remove extra trailing space
    name = name.slice(0, -1)

    return name
  }

  // inject rules into a style tag, and into the DOM
  const inject = () => {
    // create and inject style tag
    const tag = document.createElement('style')
    tag.setAttribute('data-css', '')
    document.head.appendChild(tag)

    // retrieve sheet after injecting
    const sheet = tag.sheet

    // inject rules
    let inject
    let name

    Object
      .keys(style)
      .forEach(rule => {
        // retrieve class name from cache
        name = style[rule]

        // create full CSS string to inject using class name and rule
        inject = `.css-${name}{ ${rule} }`

        // inject rule at head of sheet
        sheet.insertRule(inject, 0)
      })
  }

  // stringify styles object
  const string = () => {
    let total = ''

    // iterate rules
    let append
    let name

    Object
      .keys(style)
      .forEach(rule => {
        // retrieve class name from cache
        name = style[rule]

        // create full CSS string to inject using class name and rule
        append = `.css-${name}{${rule}}`

        // append to cumulative CSS string
        total += append
      })

    return total
  }

  return {
    css,
    inject,
    string
  }
}

const singleton = css()

export default singleton
