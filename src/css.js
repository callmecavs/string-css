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
    const chain = concat(strings, values)

    console.log(chain)
  }

  return parse
}

const singleton = css()

export default singleton
