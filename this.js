var a = 30
function foo() {
  console.log(this.a)
}

var obj = {
  a: 18
}

var obj1 = {
  a: 20
}

var bar = function() {
  console.log(this.a)
  foo.call(obj)
}

bar()
bar.call(obj1)