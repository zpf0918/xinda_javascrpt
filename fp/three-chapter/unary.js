function unary(fn) {
  return function onlyOneArg(arg) {
    return fn(arg)
  }
}

function sum(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i]
  }

  return sum
}

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

let adder = looseCurry(sum, 2)

console.log([1,2,3,4,5].map(adder(3)))
console.log([1,2,3,4,5].map(unary(adder(3))))
