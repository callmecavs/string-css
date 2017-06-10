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
  const parse = (strings, ...values) => {
    // reduce CSS string to an array of property -> value pairs
    // TODO: add & support, hover/media support, etc
    // TODO: check this logic, might be possible to replace whitepace immediately
    const rules = concat(strings, values)
      .trim()
      .split('\n')                                          // assume 1 rule per line
      .filter(string => string.indexOf(':') !== -1)         // remove invalid rules
      .map(string => {
        return string
          .replace(/\s/g, '')         // remove whitespace
          .slice(0, -1)               // remove semicolon
          .split(':')                 // split into property and value
      })

    // run the rules against the cache
    // return the cumulative class name
    let name = ''

    rules.forEach(rule => {
      const [
        prop,
        value
      ] = rule

      // create empty prop cache if needed
      style[prop] = style[prop] || {}

      // check for value in prop cache
      if (style[prop][value]) {
        // append cached class name and space to name
        name += `${style[prop][value]} `
      } else {
        // generate deterministic class name from prop -> value pair
        const hashed = hash(rule.join(''))

        // cache the value
        style[prop][value] = hashed

        // append hashed class and space to name
        name += `${hashed} `
      }
    })

    return name
  }

  return parse
}

const singleton = css()

export default singleton
