function debounce(fn, delay) {
  var timer

  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
}

debounce(() => {
  console.log('ok')
}, 2000)()
