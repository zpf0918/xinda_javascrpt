// 情况1
// const parent = { a: 1 }
// const child = Object.create(parent)

// child.a = 2
// console.log(child.a)

// 情况2
// 'use strict'
// const parent = {}
// Object.defineProperty(parent, 'a', {
//   value: 1,
//   writable: false,
//   enumerable: true,
//   configurable: true
// })

// const child = Object.create(parent)
// child.a = 2
// console.log(child.a)

// 情况3
const parent = {
  get a() {
    return '我是parent的a'
  }
}

const child = Object.create(parent)
console.log(child.a)