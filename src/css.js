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

  }

  // inject rules into a style tag, and into the DOM
  const inject = () => {

  }

  // render styles down to a string
  const render = () => {

  }

  return {
    css,
    inject,
    render
  }
}

const singleton = css()

export default singleton
