function throttle(fn, wait) {
  var timer
  var last

  return function () {
    var now = Date.now()

    if (last && now < wait + last) {
      clearTimeout(timer)

      timer = setTimeout(() => {
        last = now
        fn()
      }, wait)
    } else {
      last = now
      fn()
    }
  }
}

const foo = () => console.log('ok')

const bar = throttle(foo, 5000)

setInterval(bar, 10)