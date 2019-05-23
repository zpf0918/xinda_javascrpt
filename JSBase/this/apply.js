// var arr = ['a', 'b']

// var elements = [0, 1, 2]

// arr.push.apply(arr, elements)

// // console.log(arr)

// var arr = ['jonathan', 18, 'beijing']

// var obj = {}

// function Foo(name, age, address) {
//   this.name = name
//   this.age = age
//   this.address = address
// }

// Foo.apply(obj, arr)

// console.log(obj)


// apply 可以确定this指向，接受两个参数，第一个为函数运行时对应的this值，第二个参数为一个数组，
// 它的每个元素会作为函数的参数。

// 使用场景1  找出给定数组中的最大值和最小值
var arr = [2, 9, 10, 8]
var max = Math.max.apply(null, arr)
var min = Math.min.apply(undefined, arr)
console.log(max, min)

// 遍历实现
var max = -Infinity, min = +Infinity
for (let i = 0, length = arr.length; i < length; i++) {
  if (arr[i] > max) {
    max = arr[i]
  }
  if (arr[i] < min) {
    min = arr[i]
  }
}
console.log(max, min)


// 使用场景2 往数组里推元素, 使得原数组变化.
var arr = ['a', 'b']
var target = [1, 2, 3]
var result = arr.concat(target)
console.log(result)
console.log(arr)

arr.push.apply(arr, target)
console.log(arr)




