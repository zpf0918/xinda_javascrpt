const divideFn = require("./division")

exports.add = (first, second) => {
  console.log('add')
  return first + second
}

exports.subtract = (first, second) => {
  console.log('subtract')
  return first - second
}

exports.test = () => {
  console.log('test')
}

exports.divide = divideFn