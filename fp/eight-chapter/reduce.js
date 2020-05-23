function reduce(reducerFn, initialValue, arr) {
  let acc, startIdx
  // 累加器是每次执行完的结果， 缩减器是函数
  if (arguments.length === 3) {
    acc = initialValue
    startIdx = 0
  } else if (arr.length > 0) {
    acc = arr[0]
    startIdx = 1
  } else {
    throw new Error('must provide at least one value')
  }
  
  for (let idx = startIdx; idx < arr.length; idx++) {
    acc = reducerFn(acc, arr[idx], idx, arr)
  }

  return acc
}

function pipe(...fns) {
  return function composed(result) {
    return fns.reduce(function (result, fn) {
      return fn(result)
    }, result)
  }
}

function compose(...fns) {
  return function composed(result) {
    return fns.reduceRight(function (result, fn) {
      return fn(result)
    }, result)
  }
}

let pipeReducer = (composedFn ,fn) => pipe(composedFn, fn)

let fn =
        [3, 17, 6, 4]
        .map(v => n => v * n)
        .reduce(pipeReducer)

function binary(fn) {
  return function two(arg1, arg2) {
    return fn(arg1, arg2)
  }
}

pipeReducer = binary(pipe)

[1, 2, 3].reduce(
  ((list, v) => (
    list.push(v),
    list
  )
  ), []
)
