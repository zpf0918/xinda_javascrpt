function observe(obj) {
  Object.keys(obj).forEach(key => {
    let internalVal = obj[key]
    Object.defineProperty(obj, key, {
      get () {
        console.log(`get: obj ${key} is: ${internalVal}`)
        return internalVal
      },
      set (newValue) {
        if (internalVal === newValue) {
          return
        }
        internalVal = newValue
        console.log(`set: obj ${key} is: ${internalVal}`)
        autorun(() => console.log('ok'))
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

function autorun(update) {
  update()
}

observe(state)
state.b = 10