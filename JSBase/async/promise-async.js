// 使用promise处理异步请求
function asyncFunction () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('Async Success')
      // reject('Async Fail')
    }, 500)
  })
}

asyncFunction().then(function (value) {
  console.log(value)
}).catch(function (value) {
  console.log(value)
})

// 使用promise处理异步请求2
function getData(url) {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.onload = function () {
      if (request.status === 200) {
        resolve(request.responseText)
      } else {
        reject(new Error(request.statusText))
      }
    }
    request.onerror = function () {
      reject(new Error(request.statusText))
    }
    request.send()
  })
}
var url = 'http://api.myjson.com/bins/khn66'
getData(url).then(function (value) {
  console.log(value)
}).catch(function (value) {
  console.log(value)
})


// promise 异步
var promise = new Promise(function (resolve, reject) {
  console.log(1)
  resolve(42)
})

promise.then(function (value) {
  console.log(2)
})

console.log(3)
