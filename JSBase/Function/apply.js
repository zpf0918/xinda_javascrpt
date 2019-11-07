var obj = {
  name: 'Joe'
}

function foo(arg1, arg2) {
  return {
    name: arg1,
    age: arg2
  }
}

var result = foo.apply(null, ['Joe', 18])
console.log(result)

// 应用1 寻找一个数组中的最大值
var arr = [1, 100, 2100, 200]
console.log(Math.max.apply(null, arr))

// 应用2： 合并数组且改变原数组
var arr1 = [1,2,3]
var arr2 = [10, 11, 12]
var result = arr1.push.apply(arr1, arr2)
console.log(result)
console.log(arr1)


var obj = {
  foo: 'foo',
  bar: bar
}

function bar(arg1, arg2, arg3) {
  console.log(this.foo, arg1, arg2, arg3)
}

bar.apply(obj, [1,2,3])
