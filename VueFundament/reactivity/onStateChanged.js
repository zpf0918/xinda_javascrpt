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
        onStateChanged(() => console.log(state.a, state.b))
      },
      enumerable: true,
      configurable: true
    })
  })
}

const state = {
  a: 1,
  b: 2
}

observe(state)

function onStateChanged(cb) {
  cb()
}

state.a = 5