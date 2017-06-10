const css = (strings, ...values) => {
  // immutably weave strings and values together
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

  console.log(concat(strings, values))
}

export default css
