'use strict'

const parientObj = {}
// Object.defineProperty(parientObj, 'name', {
//   value: 'jonathan',
//   writable: false,
//   configurable: true,
//   enumerable: true
// })

Object.defineProperty(parientObj, 'name', {
  get () {
    return 'jonathan'
  },
  set (value) {
    console.log(value)
  },
  configurable: true,
  enumerable: true
})

const childrenObj = Object.create(parientObj)

// case 1 ‘子对象'要设置的属性在'父对象'中 不存在
childrenObj.age = 18
console.log(parientObj, childrenObj, childrenObj.name)

// case 2 '子对象'要设置的属性在 '父对象' 中存在 分为 是否是setter 是否writable 
// childrenObj.name = 'Han'
// console.log(parientObj, childrenObj)
