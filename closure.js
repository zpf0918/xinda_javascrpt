function foo() {
  var a = 1
  function fn () {
    console.log(a)
  }
  return fn
}


var a = foo()
a()

obj = {
  fn: 'reference',
  a: undefined
}

a = 1


var func
function foo() {
  var a = 1;
  function close() {
    console.log(a)
  }
  func = close
}

function bar() {
  var a = 2
  func()
}

foo()
bar()