function getPerson(data, cb) {
  ajax('https://example/person', data, cb)
}
var getPerson = partial(ajax, 'https://example/person')


function getOrder(data, cb) {
  ajax('https://example/order', data, cb)
}
var getOrder = partial(ajax, 'https://example/order')

function getCurrentUser(cb) {
	getPerson({ user: CURRENT_USER_ID }, cb )
}
var getCurrentUser = partial(ajax, 'https://example/person', { user: CURRENT_USER_ID })
var getCurrentUser = partial(getPerson, { user: CURRENT_USER_ID })

var getCurrentUser = function outerPartiallyApplied(...outerLaterArgs) {
  var getPerson = function innerPartiallyApplied(...innerLaterArgs) {
    return ajax('https://example/person', ...innerLaterArgs)
  }
  return getPerson({ user: CURRENT_USER_ID }, ...outerLaterArgs)
}

// 一个函数有多个函数，此时我们想先确定部分参数，然后稍后再指定其他参数，此时就会用到偏函数。
// partial 其实是一个工厂函数，制造类似getPerson,getOrder这样的函数，而不用我们手动去实现。
function partial(fn, ...presetArgs) {
  return function partiallyApplied(...laterArgs) {
    return fn(...presetArgs, ...laterArgs)
  }
}

