// function TaskA(callback) {
//   let result = 1
//   callback(result)
// }

// function TaskB(callback) {
//   let result = 2
//   callback(result)
// }

// function TaskC(callback) {
//   let result = 3
//   callback(result)
// }


// TaskA(function (result) {
//   if (result === 1) {
//     TaskB(function (result) {
//       if (result === 2) {
//         TaskC(function (result) {
//           console.log(result)
//         })
//       }
//     })
//   }
// })


function TaskA(aa) {
  let result = 1
  aa(result)
}

function TaskB(bb) {
  let result = 2
  bb(result)
}

function TaskC(cc) {
  let result = 3
  cc(result)
}

function aa(result) {
  if (result === 1) {
    TaskB(function bb(result) {
      if (result === 2) {
        TaskC(function cc(result) {
          console.log(result)
        })
      }
    })
  }
}

function bb(result) {
  if (result === 2) {
    TaskC(cc)
  }
}

function cc(result) {
  console.log(result)
}

TaskA(aa)
