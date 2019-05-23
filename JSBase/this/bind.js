function foo(x) {
  console.log(this.a, x)
}

var obj = {
  a: 2
}

var test = foo.bind(obj, 5)
console.log(test(5))
console.log(test(6))


