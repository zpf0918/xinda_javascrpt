function sleep() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('one')
      resolve('one')
    }, 2000)
  })
}

async function test() {
  let value = await sleep()
  console.log(value)
  console.log('two')
}

test()

// var a = 0
// var b = async function () {
//   a = a + await 10
//   console.log('two', a)
//   a = await 10 + a
//   console.log('three', a)
// }

// b()
// a++
// console.log('one', a)