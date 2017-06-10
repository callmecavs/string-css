const css = () => {
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

    console.log(rules)
  }

  return parse
}

const singleton = css()

export default singleton
