function uncurry(fn) {
  return function uncurried(...args) {
    let ret = fn;

    for (let i = 0; i < args.length; i++) {
      ret = ret(args[i]);
    }

    return ret;
  }
}

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

function sum(...args) {
  let sum = 0;
  for (let i = 0; i <= args.length; i++) {
    sum = sum + i
  }

  return sum
}

console.log(uncurry(curry(sum, 5))(1, 2, 3, 4, 5))