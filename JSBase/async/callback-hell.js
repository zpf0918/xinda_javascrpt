// 示例1： 回调地狱问题
listen('click', function handler(event) {
  setTimeout(function request() {
    ajax('http://some.url', function response(text) {
      if (text === 'hello') {
        handler()
      } else {
        request()
      }
    })
  }, 500)
})

// 示例2： 回调的信任问题
// 把何时调用C 交给了ajax（第三方库），因此无法判断当ajax返回结果后是否会调用或者调用多次你期望的那个函数
// A
ajax('http://www.baidu.com', function () {
  // C
})
// B

// 示例3： 回调地狱和promise的解决方式
function add(ajaxX, ajaxY, cb) {
  ajaxX('http://www.getx.com', function responseX(xVal) {
    if (typeof xVal === 'number') {
      ajaxY('http://www/gety.com', function responseY(yVal) {
        if (typeof yVal === 'number') {
          cb(x, y)
        }
      })
    }
  })
}

function add(xPromise, yPromise) {
  return Promise.all(xPromise, yPromise)
  .then(cb(values))
}