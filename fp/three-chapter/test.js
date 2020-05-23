function patial(fn, ...presetArgs) {
  return function partiallyApply(...laterArgs) {
    return fn(...presetArgs, ...laterArgs)
  }
}

function curry(fn, arity = fn.length) {
  return (function nextCurried(prevArgs) {
    return function curried(laterArgs) {
      let args = prevArgs.concat([laterArgs])

      if (args.length >= arity) {
        return fn(...args)
      } else {
        return nextCurried(args)
      }
    }
  })([])
}

function looseCurry(fn, arity = fn.length) {
  return (function nextCurried(prevArgs) {
    return function curried(...laterArgs) {
      let args = prevArgs.concat(laterArgs)

      if (args.length >= arity) {
        return fn(...args)
      } else {
        return nextCurried(args)
      }
    }
  })([])
}

