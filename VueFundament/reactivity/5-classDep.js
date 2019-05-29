function observe(obj) {
  Object.keys(obj).forEach(key => {
    let internalVal = obj[key]
    const dep = new Dep()
    Object.defineProperty(obj, key, {
      get () {
        dep.addSubs(target)
        return internalVal
      },
      set (newValue) {
        if (internalVal === newValue) {
          return
        }
        internalVal = newValue
        dep.notify()
      },
      enumerable: true,
      configurable: true
    })
  })
}

class Dep {
  constructor () {
    this.subs = []
  }

  addSubs (target) {
    this.subs.push(target)
  }

  notify () {
    this.subs.map(sub => sub())
  }
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

state.a = 20