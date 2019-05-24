// 箭头函数不指定this，默认指定上一层的this
var obj = {
  name: 'Joe',
  getName: () => {
    console.log(this.name)
  }
}

obj.getName()


var objOth = {
  name: 'Han',
  getName: function () {
    console.log(this.name)
  }
}

objOth.getName()

// this绑定丢失
//----- normal function -----//
var name = 'name of global'
var obj = {
  name: 'name of obj',
  getName: function () {
    let age = 10
    setTimeout(function () {
      console.log(age)
      console.log(this.name)
    }, 1000)
  }
}

obj.getName()

//------ arrow function -----//
var name = 'name of global'
var obj = {
  name: 'name of obj',
  getName: function () {
    let age = 10
    setTimeout(() => {
      console.log(age)
      console.log(this.name)
    }, 1000)
  }
}
obj.getName()

//------ another arrow function -----//
var name = 'name of global'
var obj = {
  name: 'name of obj',
  getName: () => {
    let age = 10
    setTimeout(() => {
      console.log(age)
      console.log(this.name)
    }, 1000)
  }
}
obj.getName()

