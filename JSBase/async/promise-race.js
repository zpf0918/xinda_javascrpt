function timerPromisefy(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(delay)
    }, delay)
  })
}

var startDate = Date.now()

Promise.race([
  timerPromisefy(2000),
  timerPromisefy(3000),
  timerPromisefy(4000),
  timerPromisefy(5000)
]).then(function (value) {
  console.log(Date.now() - startDate)
  console.log(value)
})