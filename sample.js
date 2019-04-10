// 对象调用函数 this指向

// function Person() {
//   this.age = 18
//   this.name = 'xu'
//   this.info = function() {
//     return {
//       age: this.age,
//       name: this.name
//     }
//   }
  // return { age: 20 }
// }

// let p = new Person()
// console.log(p)


// function fetchAvatar(print) {
//   setTimeout(function () {
//     print('image')
//   }, 1000)
// }

// function Person() {
//   this.age = 18
//   this.name = 'xu'
//   this.info = function() {
//     fetchAvatar(function print(avatar) {
//       console.log({
//         age: this.age,
//         name: this.name,
//         avatar
//       })
//     })
//   }
// }

// var p = new Person()
// p.info()


var obj = {
  a: 20,
  foo: function () {
    console.log(this.a)
    function bar() {
      console.log(this.a)
    }
    bar()
  }
}

obj.foo()