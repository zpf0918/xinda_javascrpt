// function foo() {
//   var a = 1
//   console.log(a)
// }

// function bar() {
//   var a = 2
//   foo()
// }

// bar()


// var b = 12
// function closure() {
//   var b = 10
//   function test() {
//     console.log(b)
//   }
//   return test
// }

// var closure = closure() // fuction () { console.log(b) } 之前的函数closure实体时区了引用
// closure()


excuteContent = {
  VO: {
    foo: 'reference',
    a: undefined,
  },
  scope_chain: '生成作用域链',
  this: 'this指向'
}