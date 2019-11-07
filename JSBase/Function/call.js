// var obj = {
//   name: 'Joe'
// }

// function foo(arg1, arg2) {
//   return {
//     name: arg1,
//     age: arg2
//   }
// }

// var result = foo.call(obj, 'Han')
// console.log(result)

var obj = {
  foo: 'foo',
  bar: bar
}

function bar (arg1, arg2, arg3) {
  console.log(this.foo, arg1, arg2, arg3)
}

var foo = 'window foo'

