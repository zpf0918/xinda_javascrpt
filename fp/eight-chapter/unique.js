function unique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

function unique(arr) {
  return arr.reduce((list, v) => {
    if (list.indexOf(v) === -1) {
      list.push(v)
    }
    return list
  }, [])
}

function partialThis(fn, ...presetArgs) {
  return function partiallyApply(...laterArgs) {
    return fn.apply(this, ...presetArgs, ...laterArgs)
  }
}

function composeChainedMethods(...fns) {
  return function composed(result) {
    return fns.reduceRight(function (result, fn) {
      return fn.call(result)
    }, result)
  }
}