// 柯里化。每次返回一个函数，这个函数只接受一个参数。这个函数也返回一个函数，也只接受一个参数，它的返回结果也是一个函数，知道收集齐原函数的参数，才会执行原函数。
function curry(fn, arity = fn.length) {
  return (function nextCurried(prevArgs) {
    return function curried(nextArgs) {
      var args = prevArgs.concat([nextArgs])

      if (args.length >= arity) {
        return fn(...args)
      } else {
        return nextCurried(args)
      }
    }
  })([])
}

function test(a, b, c) {
  return a + b + c
}

console.log(curry(test)(3)(2)(3))
// prevArgs为[], 返回curried


curry(test)(1)
// curried开始执行, prevArgs为[], nextArgs为1, args为[1]
// 1 < 3 返回nextCurried([1])
// nextCurried开始执行: prevArgs 为[1], 返回curried

curry(test)(1)(2)
// curried开始执行, preArgs为[1], nextArgs为2， args为[1, 2]]
// 2 < 3 返回nextCurried([1, 2])
// nextCurried开始执行: prevArgs为 [1, 2], 返回curried

curry(test)(1)(2)(3)
// curried 开始执行, prevArgs为[1,2], nextArgs为3, args为 [1, 2, 3]
// 3 >= 3 fn(...args) 开始执行  返回  6


function looseCurry(fn, arity = fn.length) {
  return (function nextCurried(prevArgs) {
    return function curried(...nextArgs) {
      let args = prevArgs.concat(nextArgs)

      if (args.length >= arity) {
        return fn(...args)
      } else {
        return nextCurried(args)
      }
    }
  })([])
}

console.log(looseCurry(test)(1)(2)(6))

