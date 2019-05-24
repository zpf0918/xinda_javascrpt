// 用法1 绑定this
var name = 'Han'
function test() {
  console.log(this.name)
}

var obj = {
  name: 'Joe'
}

var bindObj = test.bind(obj)
bindObj() // Joe

var bindGlobal = test.bind(null)
bindGlobal() // Han

// 简单的模拟内部实现
function foo() {
  console.log(this.name)
}
function bind(obj) {
  return function () {
    return foo.call(obj)
  }
}

// 偏函数
function foo(arg1, arg2) {
  return {
    name: arg1,
    age: arg2
  }
}

var result = foo.bind(null, 'Joe')
console.log(result())
console.log(result(18, '北京'))


