// onAChanged 函数
function observe(obj) {
  Object.keys(obj).forEach(key => {
    let internalVal = obj[key]
    Object.defineProperty(obj, key, {
      get () {
        return internalVal
      },
      set (newValue) {
        if (internalVal === newValue) {
          return
        }
        internalVal = newValue
        onAChanged(() => b = state.a * 2)
      },
      enumerable: true,
      configurable: true
    })
  })
}

let b

const state = {
  a: 1
}

function onAChanged(cb) {
  cb()
}

observe(state)

state.a = 2
console.log(b)

