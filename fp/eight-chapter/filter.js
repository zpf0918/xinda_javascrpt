function filter(predicateFn, arr) {
  let newList = []

  for (let i = 0; i < arr.length; i++) {
    if (predicateFn(arr[i], i, arr)) {
      newList.push(arr[i])
    }
  }

  return newList
}

function filter(predicateFn, arr) {
  let newList = []

  for (let [idx, v] of arr.entries()) {
    if (predicateFn(v, idx, arr)) {
      newList.push(v)
    }
  }

  return newList
}

function filterOut(predicateFn, arr) {
  return filterIn(not(predicateFn), arr)
}
