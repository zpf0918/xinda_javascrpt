function observe(obj) {
  Object.keys(obj).forEach(key => {
    let internalValue = obj[key]
    let dep = []
    Object.defineProperty(obj, key, {
      get () {
        dep.push(target)
        console.log(dep)
        return internalValue
      },
      set (newValue) {
        if (internalValue === newValue) {
          return
        }
        internalValue = newValue
        dep.map(sub => sub())
      },
      enumerable: true,
      configurable: true
    })
  })
}


var state = {
  a: 1
}

observe(state)

let target, b, c, d

function autorun(update) {
  target = function () {
    update()
  }
}

// 即想访问到a，也能把函数赋值过去
function autorun(update) {
  target = function () {
    update()
  }
  update()
}

// 上面函数的优化 注: 只是写法更高级了，思想没有变
function autorun(update) {
  function internal() {
    target = internal
    update()
  }
  internal()
}


// 如果只是单纯的访问了a，什么也不更新，那么此时就不需要订阅， 那么问题就在于如果得知是单纯的访问a，即没有更新函数
function autorun(update) {
  target = function () {
    update()
  }
  update()
}

autorun(() => b = state.a * 10)
autorun(() => c = state.a * 20)
autorun(() => d = state.a * 30)
console.log(b, c, d)
