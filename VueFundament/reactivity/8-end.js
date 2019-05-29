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

  depend () {
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

let target, b

const dep = new Dep()

observe(state)

function autorun (update) {
  function wrappedUpdate () {
    target = wrappedUpdate
    update()
  }
  wrappedUpdate()
}

/**
 * 1. 每次访问state中的数据，相当于给对应的属性加一个订阅者
 * 2. 做到更新
 */
autorun(() => {
  b = state.a * 10
})