function debounce(fn, delay) {
  var timer

  return function () {
    clearTimeout(timer)
    setTimeout(() => {
      fn()
    }, delay)
  }
}

debounce(() => {
  console.log('ok')
}, 2000)()
