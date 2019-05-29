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

let target

observe(state)

// 每次执行回调函数时, 把回调函数加入依赖的订阅者列表中
function visit(cb) {
  target = cb
  // console.log(state.a)
  state.a
  state.a
}

visit(() => console.log('ok'))
state.a = 2
