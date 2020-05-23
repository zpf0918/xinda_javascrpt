function compose(...fns) {
  return function composed(result) {
    return fns.reverse().reduce(function (result, fn) {
      return fn(result)
    }, result)
  }
}

// function compose(...fns) {
//   return fns.reverse().reduce(function reducer(fn1, fn2) {
//     return function composed(...args) {
//       return fn2(fn1(...args))
//     }
//   })
// }
