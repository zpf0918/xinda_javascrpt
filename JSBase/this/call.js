// call 指定函数运行时的this指向。它接受的第一个参数为想要指定的this值；之后的参数作为传入目标函数的参数。
function Foo(name, age) {
  this.name = name
  this.age = age
}

var foo = {}
Foo.call(foo, 'Jonathan', 18)
console.log(foo)