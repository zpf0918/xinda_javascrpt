class Dep {
  constructor () {
    this.name = 'Joe'
  }
  depend () {
    console.log('ok')
  }
  notify () {
    console.log('notify')
  }
}

const dep = new Dep()
dep.depend()
console.log(dep)