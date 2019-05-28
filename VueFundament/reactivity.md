```js
onAchanged(() => {
  b = a * 10
})
// 当a变化时，就会执行onAChanged函数。

let update
const onStateChanged = _update => {
  update = _update
}

const onAChanged = _update => {
  update()
}

function update() {
  b = a * 10
}

const setState = newState => {
  state = newState
  update()
}


```
dom与数据 响应
<span class="cell"></span>

```js
var a = 10

onStateChanged(() => {
  document
    .querySelector('.cell')
    .textContent = state.a * 10
})
```


abstract away 抽象出来
<span class="cell">
  {{ state.a * 10 }}
</span>
``` js
//rename onStateChanged to autorun
onStateChanged(() => {
  view = render(state)
})
```


step1: 把对象的属性变为getter 和 setter
```js
// 不记住对象其他属性，设置对象getter属性的值
function convert(obj) {
  Object.keys.forEach(key => {
    let internalValue = obj[key]
    Object.defineProperty(obj, key, {
      get () {
        return internalValue
      },
      set (newValue) {
        intervalValue = newValue
      },
      enumerable: true,
      configurable: true
    })
  })
}
```

step2: 依赖追踪
``` js

class Dep {
  constructor () {
    this.subscribers = new Set()
  }
  
  depend () {
    if (activeUpdate) {
      this.subsrcibers.add(activeUpdate)
    }
  }

  notify () {
    this.subscribers.forEach(sub => sub())
  }
}

const dep = new Dep()

let activeUpdate

function autorun(update) {
  function wrappedUpdate() {
    activeUpdate = wrappedUpdate
    update()
    activeUpdate = null
  }
  wrappedUpdate()
}

autorun(() => {
  dep.depend()
})
```