// promise的类比
function foo(x) {
  return listener
}

var event = foo(42)

event.on('completion', function () {})
event.on('failure', function () {})


// promise
function foo(x) {
  // 开始做一些花费时间的事情，比如异步请求任务
  return new Promise(function (resolve, reject) {
    
  })
}

var f = foo(42)
f.then(function () {
  console.log('ok')
})
