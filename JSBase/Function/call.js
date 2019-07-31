var obj = {
  name: 'Joe'
}

function foo(arg1, arg2) {
  return {
    name: arg1,
    age: arg2
  }
}

var result = foo.call(null, 'Han')
console.log(result)
