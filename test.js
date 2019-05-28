function observe(obj) {
  Object.keys(obj).forEach(key => {
    let internalValue = obj[key]
    Object.defineProperty(obj, key, {
      get () {
        return internalValue
      },
      set (newValue) {
        if (internalValue === newValue) {
          return
        }
        internalValue = newValue
        onAChanged(() => b = state.a * 10)
      },
      enumerable: true,
      configurable: true
    })
  })
}


var b = ''

var state = {
  a: 10
}

function onAChanged(cb) {
  cb()
}

observe(state)

state.a = 20

console.log(b)



