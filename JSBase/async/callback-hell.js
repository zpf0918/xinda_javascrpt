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






// 模拟回调地狱
function taskA(callback) {
  setTimeout(() => {
    callback('taskA')
  }, 2000)
}

function taskB(callback) {
  setTimeout(() => {
    callback('taskB')
  }, 2000)
  return callback
}

function taskC(callback) {
  setTimeout(() => {
    callback('taskC')
  }, 2000)
  return callback
}

taskA(
  taskB(
    taskC(
      function (res) {
        console.log(res)
      }
    )
  )
)


function TaskA(url, callback) {
  let req = new XMLHttpRequest()
  req.open('GET', url, true)
  req.onload = function () {
    if (req.status === 200) {
      callback(req.responseText)
    } else {
      new Error(req.statusText)
    }
  }
  req.onerror = function () {
    new Error(req.statusText)
  }
  req.send()
}


function TaskB(url, callback) {
  let req = new XMLHttpRequest()
  req.open('GET', url, true)
  req.onload = function () {
    if (req.status === 200) {
      callback(req.responseText)
    } else {
      new Error(req.statusText)
    }
  }
  req.onerror = function () {
    new Error(req.statusText)
  }
  req.send()
}

function TaskC(url, callback) {
  let req = new XMLHttpRequest()
  req.open('GET', url, true)
  req.onload = function () {
    if (req.status === 200) {
      callback(req.responseText)
    } else {
      new Error(req.statusText)
    }
  }
  req.onerror = function () {
    new Error(req.statusText)
  }
  req.send()
}

TaskA('http://some.url', 
  TaskB('http://some.url',
    TaskC('http://some.url',
      function (res) {
        console.log(res)
      }
    )
  )
)

function TaskA(callback) {
  let result = 1
  callback(result)
}

function TaskB(callback) {
  let result = 2
  callback(result)
}

function TaskC(callback) {
  let result = 3
  callback(result)
}

TaskA(function (result) {
  console.log(result)
  if (result === 1) {
    TaskB(function (result) {
      console.log(result)
      if (result === 2) {
        TaskC(function (result) {
          console.log(result)
        })
      }
    })
  }
})


