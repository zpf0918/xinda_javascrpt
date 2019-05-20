let str = '2019-05-11 18:53:00'

str = new Date(str)

str.getDate()

let value = new Date(str.setDate(str.getDate() - 21))
value = value.toLocaleDateString()
console.log(value)

// 有个方式会改变原始值