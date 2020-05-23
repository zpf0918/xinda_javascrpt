function partial(fn, ...presetArgs) {
  return function partiallyApply(...laterArgs) {
    return fn(...presetArgs, ...laterArgs)
  }
}

function curry(fn, arity = fn.length) {
  return (function nextCurried(prevArgs) {
    return function curried(nextArgs) {
      let args = prevArgs.concat([nextArgs])

      if (args.length >= arity) {
        return fn(...args)
      } else {
        return nextCurried(args)
      }
    }
  })([])
}

function add(x, y) {
  return x + y
}

// [1, 2, 3, 4, 5].map(function adder(item) {
//   return add(3, item)
// })

[1, 2, 3, 4, 5].map(partial(add, 3));

console.log([1, 2, 3, 4, 5].map(curry(add)(3)));



