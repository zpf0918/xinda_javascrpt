var getName = function (callback) {
  setTimeout(function () {
    callback('xiaoming')
  }, 100)
}

// getName(function (name) {
//   console.log(name);
// })


var getAge = function (name, callback) {
  setTimeout(function () {
    if (name && name.includes('xiaoming')) {
      callback('年龄18')
    } else {
      callback('鬼知道是谁')
    }
  }, 100)
}

// getAge('xiaoming', function (age) {
//   console.log(age);
// })


getName(function (name) {
  getAge(name, function (age) {
    console.log(age);
  })
})


getName.

