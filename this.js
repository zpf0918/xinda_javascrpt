function foo() {
  console.log(this.a)
}

var obj = {
  a: 1
}

var bar = foo.call()
console.log(bar)
