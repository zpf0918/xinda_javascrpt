function observe(obj) {
  Object.keys(obj).forEach(key => {
    let internalVal = obj[key]
    let dep = []
    Object.defineProperty(obj, key, {
      get () {
        dep.push(target)
        return internalVal
      },
      set (newValue) {
        if (internalVal === newValue) {
          return
        }
        internalVal = newValue
        dep.map(sub => sub())
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

function target () {
  console.log('ok')
}

observe(state)


state.a
state.a
state.a = 2
state.b = 5


