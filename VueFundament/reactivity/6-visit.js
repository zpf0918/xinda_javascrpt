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

function visit(cb) {
  cb()
}

// 访问一次a相当于添加了一个订阅者
visit(() => state.a)
visit(() => state.a)

