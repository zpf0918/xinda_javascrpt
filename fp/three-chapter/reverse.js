function partial(fn, ...presetArgs) {
  return function partiallyApply(...laterArgs) {
    return fn(...presetArgs, ...laterArgs)
  }
}
function reverArgs(fn) {
  return function argsReversed(...args) {
    return fn(...args.reverse())
  }
}

var cache = {}

var cacheResult = reverseArgs(
  partial(reverArgs(ajax), function onResult(obj) {
    cache[obj.id] = obj
  })
)

cacheResult('https://example/person', { user: CURRENT_USER_ID })


