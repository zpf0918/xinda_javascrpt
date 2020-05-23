function partialProps(fn, presetArgsObj) {
  return function partiallyApplied(laterArgsObj) {
    return fn(Object.assign({}, presetArgsObj, laterArgsObj))
  }
}

function curryProps(fn, arity = 1) {
  return (function nextCurried(prevArgsObj) {
    return function curried(nextArgsObj = {}) {
      let [key] = Object.keys(nextArgsObj)
      let allArgsObj = Object.assign({}, prevArgsObj, { [key]: nextArgsObj[key] })

      if (Object.keys(allArgsObj).length >= arity) {
        return fn(allArgsObj)
      } else {
        return nextCurried(allArgsObj)
      }
    }
  })({})
}

function foo({ x, y, z } = {}) {
  console.log(`x: ${x}, y: ${y}, z: ${z}`)
}

const foo1 = partialProps(foo, { y: 1 })
foo1({ x: 2, z: 3 })

const foo2 = curryProps(foo, 3)
foo2({ y: 2 })({ x: 1 })({ z: 3 })

void function () {
  console.log('ok')
}()
