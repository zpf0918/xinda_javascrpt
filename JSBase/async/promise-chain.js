var promise = Promise.resolve()

function taskA() {
  console.log('taskA')
  throw new Error('fail')
}

function taskB() {
  console.log('taskB')
}

function taskC() {
  console.log('taskC')
}

function onRejected(error) {
  console.log(error)
}

promise
  .then(taskA)
  .then(taskB)
  .catch(onRejected)
  .then(taskC)
  .catch(onRejected)
