// 1. function 前加了async 关键字，那么这个函数返回的是一个resolved状态的promise对象
async function asyncFunction () {
  return 42
}

//相当于

function asyncFunction () {
  return Promise.resolve(42)
}

// 2. 一个resovled状态的promise对象前加了await关键字, 那么会返回resolve中的那个值
async function asyncFunction () {
  console.log(await Promise.resolve(42))
}

asyncFunction()

//相当于
function asyncFunction () {
  return Promise.resolve(42)
}

var result
asyncFunction().then(function (value) {
  result = value
})
setTimeout(() => {
  console.log(result)
}, 2000)

