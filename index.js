function shallowClone(source) {
  const obj = {}
  for (let i in source) {
    if (source.hasOwnProperty(i)) {
      obj[i] = source[i]
    }
  }
  return obj
}

function deepClone(source) {
  const obj = {}
  for (let i in source) {
    if (source.hasOwnProperty(i)) {
      if (Object.prototype.toString.call(source[i]) === '[object Object]') {
          obj[i] = deppClone(source[i])
      } else {
        obj[i] = source[i]
      }
    }
  }
}
