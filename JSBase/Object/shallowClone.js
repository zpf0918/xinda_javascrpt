function shallowClone(obj) {
  const target = {}
  for (let item in obj) {
    target[item] = obj[item]
  }
  return target
}

const obj = {
  name: {
    id: 1
  }
}

const resultObj = shallowClone(obj);

resultObj.name.id = "2"

console.log(obj, resultObj);
