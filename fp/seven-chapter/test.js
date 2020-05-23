function outer() {
  var one = 1
  var two = 2

  return function innter() {
    return one + two
  }
}

var three = outer()
three()

var obj = {
  one: 1,
  two: 2
}

function three(outer) {
  return outer.one + outer.two
}
three(obj)

var point 
function outer() {
}