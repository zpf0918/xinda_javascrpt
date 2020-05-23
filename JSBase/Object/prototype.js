function Foo(name) {
  this.name = name
  this.school = '清华'
}

Foo.prototype.myName = function () {
  return this.name
}

function Bar(name, label) {
  Foo.call(this, name)
  this.label = label
}

Bar.prototype = Object.create(Foo.prototype)


// 模拟内置库各对象委托的实现
function FunctionOth() {}

let StringOth = Object.create(FunctionOth.prototype)
let NumberOth = Object.create(FunctionOth.prototype)
let BooleanOth = Object.create(FunctionOth.prototype)
let ObjectOth = Object.create(FunctionOth.prototype)

StringOth = function () {}
NumberOth = function () {}
BooleanOth = function () {}
ObjectOth = function () {}
FunctionOth.__proto__ = FunctionOth.prototype

StringOth.prototype = {
  chartAt: function() {
    return 'my string method chartAt'
  }
}

NumberOth.prototype = {
  parseInt: function() {
    return 'my number method parseInt'
  }
}

BooleanOth.prototype = {
  get length() {
    return 'my boolean property length'
  }
}

ObjectOth.prototype = {
  toString: function() {
    return 'my object method toString'
  }
}

FunctionOth.prototype = {
  call: function() {
    return 'my function method call'
  }
}

Object.setPrototypeOf(StringOth.prototype, ObjectOth.prototype)
Object.setPrototypeOf(NumberOth.prototype, ObjectOth.prototype)
Object.setPrototypeOf(BooleanOth.prototype, ObjectOth.prototype)
Object.setPrototypeOf(FunctionOth.prototype, ObjectOth.prototype)
ObjectOth.prototype.__proto__ = null

const str = new StringOth()
const number = new NumberOth()
const boolean = new BooleanOth()
const obj = new ObjectOth()
const func = new FunctionOth()

Object.getPrototypeOf(str) === StringOth.prototype
Object.getPrototypeOf(number) === NumberOth.prototype
Object.getPrototypeOf(boolean) === BooleanOth.prototype
Object.getPrototypeOf(obj) === ObjectOth.prototype
Object.getPrototypeOf(func) === FunctionOth.prototype
