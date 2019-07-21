// // function composeArgs(fn) {
// //   return function compose(...args) {
// //     return fn(args)
// //   }
// // }

// // function f(args) {
// //   console.log(args)
// // }

// // var g = composeArgs(f)
// // g(1,2,3,4)

// // function isOdd(v) {
// //   return v % 2 === 1
// // }

// // function isEven(v) {
// //   return !isOdd(v)
// // }

// // function not(fn) {
// //   return function negated(v) {
// //     return !fn(v)
// //   }
// // }

// function output(txt) {
// 	console.log(txt);
// }

// function when(fn) {
//   return function printIf(predicate) {
//     return function (msg) {
//       if (predicate(msg)) {
//         fn(msg)
//       }
//     }
//   }
// }

// function isShortEnough(str) {
// 	return str.length <= 5;
// }

// function notIsShortEnough(fn) {
//   return function noShort(str) {
//     return !fn(str)
//   }
// }

// var isLongEnough = notIsShortEnough(isShortEnough)

// var msg1 = "Hello";
// var msg2 = msg1 + " World";
// var printIf = when(output)

// printIf(isShortEnough)(msg1);		// Hello
// printIf(isShortEnough)(msg2);
// printIf(isLongEnough)(msg1);
// printIf(isLongEnough)(msg2);		// Hello World

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 3000)
// }

let promise = new Promise((resolve, reject) => {
  console.log('hahha')
  resolve('ok')
})

promise.then(function (value) {
  console.log(value)
})

console.log('lulu')