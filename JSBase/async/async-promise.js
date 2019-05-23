function asyncPromise() {
  return new Promise(function (resolve) {
    console.log(1)
    resolve(4)
  })
}

async function test() {
  let value = await asyncPromise().then(value => {
    console.log(value)
    return value
  })
  console.log('value', value)
  console.log(2)
}

test()
console.log(3)