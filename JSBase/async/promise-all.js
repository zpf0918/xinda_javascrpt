// 获取多个请求的结果
function getURL(URL) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest()
    req.open('GET', URL, true)
    req.onload = function () {
      if (req.status === 200) {
        resolve(req.responseText)
      } else {
        reject(new Error(req.statusText))
      }
    }
    req.onerror = function () {
      reject(new Error(req.statusText))
    }
    req.send()
  })
}

var request = {
  comment: function getComment() {
    return getURL('http://azu.github.io/promises-book/json/comment.json').then(function (value) {
      return JSON.parse(value)
    })
  },
  people: function getPeople() {
    return getURL('http://azu.github.io/promises-book/json/people.json').then(JSON.parse)
  }
}

function main() {
  return Promise.all([request.comment(), request.people()])
}

main().then(function (value) {
  console.log(value)
}).catch(function (error) {
  console.log(error)
})

function timerPromisefy(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(delay)
    }, delay)
  })
}

var startDate = Date.now()

Promise.all([
  timerPromisefy(2000),
  timerPromisefy(3000),
  timerPromisefy(4000),
  timerPromisefy(5000),
]).then(function (values) {
  console.log(Date.now() - startDate) // 5008
  console.log(values)
})
