const myObj = {
  a: 1,
  b: 2
}

// const anotherObj = Object.assign({}, myObj)
function assign (obj) {
  let valueObj = {}
  console.log(obj)
  for (item in obj) {
    valueObj[item] = obj[item]
  }
  return valueObj
}

console.log(assign(myObj))
