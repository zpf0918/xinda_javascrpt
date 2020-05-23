function identity(v) {
  return v
}

['', 1, 2, ''].filter(identity) 

function constant(v) {
  return function value() {
    return v
  }
}

const promise = Promise.resolve()

promise.then(foo).then(() => p2).then(bar)

promise.then(foo).then(constant(p2)).then(bar)