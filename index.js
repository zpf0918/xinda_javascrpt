// function add(getX, getY, cb) {
//   var x, y
//   getX(function (xVal) {
//     x = xVal
//     if (y !== undefined) {
//       cb(x + y)
//     }
//   })

//   getY(function (yVal) {
//     y = yVal
//     if (x !== undefined) {
//       cb(x + y)
//     }
//   })
// }

// add(fetchX, fetchY, function (sum) {
//   console.log(sum)
// })

let promise = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)
})

promise.then(function (value) {
  console.log(value)
})

console.log(3)