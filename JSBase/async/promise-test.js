// 使用回调方式进行多个异步调用
// function getURLCallback(URL, callback) {
//   var req = new XMLHttpRequest()
//   req.open('GET', URL, true)
//   req.onload = function () {
//     if (req.status === 200) {
//       callback(null, req.responseText)
//     } else {
//       callback(new Error(req.statusText), req.response)
//     }
//   }
//   req.onerror = function () {
//     callback(new Error(req.statusText), req.response)
//   }
//   req.send()
// }

// function jsonParse(callback, error, value) {
//   if (error) {
//     callback(error, true)
//   } else {
//     try {
//       var result = JSON.parse(value)
//       callback(null, result)
//     } catch (error) {
//       callback(error, true)
//     }
//   }
// }

// var request = {
//   comment: function (callback) {
//     return getURLCallback('http://azu.github.io/promises-book/json/comment.json', jsonParse.bind(null, callback))
//   },
//   people: function (callback) {
//     return getURLCallback('http://azu.github.io/promises-book/json/people.json', jsonParse.bind(null, callback))
//   }
// }

// function allRequest(requests, callback, results) {
//   if (requests.length === 0) {
//     return callback(null, results)
//   }
//   var req = requests.shift()
//   req(function (error, value) {
//     if (error) {
//       callback(error, value)
//     } else {
//       results.push(value)
//       allRequest(requests, callback, results)
//     }
//   })
// }

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
