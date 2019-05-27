// 1. 计算一个数组中每个元素出现的个数
var arr = [1, 2, 3, 4, 1, 1, 2]

var result = arr.reduce(function (accumulator, item) {
  if (!accumulator.hasOwnProperty(item)) {
    accumulator[item] = 1
  } else {
    accumulator[item]++
  }
  return accumulator
}, {})

// console.log(result)

// 2. 数组去重(只含有基本类型)
var arr = [1, 2, 3, 4, 1, 1, 2]
var result = arr.reduce((accumulator, item) => {
  if (!accumulator.includes(item)) {
    accumulator.push(item)
  }
  return accumulator
}, [])
// console.log(result)

// 3. 按照属性给object分类
var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
]
function group(objArray, property) {
  const result = objArray.reduce((acc, item) => {
    // if (!accumulator.hasOwnProperty(item[property])) {
    //   accumulator[item[property]] = [item]
    // } else if (accumulator.hasOwnProperty(item[property])) {
    //   accumulator[item[property]].push(item)
    // }
    var key = item[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(item)
    return acc
  }, {})
  return result
}

console.log(group(people, 'age'))

