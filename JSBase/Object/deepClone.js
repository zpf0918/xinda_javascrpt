const obj = { 
  a: 1,
  b: {
    c: 2
  }
}
// 
function deepClone(source) {
  const target = {}
  for (let item in source) {
    if (source.hasOwnProperty(item)) {
      if (typeof source[item] === 'object') {
        target[item] = deepClone(source[item])
      } else {
        target[item] = source[item]
      }
    }
  }
  return target
}

