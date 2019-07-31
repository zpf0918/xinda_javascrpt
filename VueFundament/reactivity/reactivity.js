function observe(obj) {
  Object.keys(obj).forEach(key => {
    let internalValue = obj[key]
    let dep = []
    Object.defineProperty(obj, key, {
      get () {
        dep.push(target)
        return internalValue
      },
      set (newValue) {
        internalValue = newValue
        dep.map(sub => sub())
      },
      enumerable: true,
      configurable: true
    })
  })
}

let b, c, d, target

const state = {
  count: 1
}

function onChange (update) {
  function wrappUpdate () {
    target = wrappUpdate
    update()
  }
  wrappUpdate()
}

observe(state)

onChange(() => b = state.count * 10)
onChange(() => c = state.count * 20)
onChange(() => d = state.count * 30)
console.log(b, c , d)
