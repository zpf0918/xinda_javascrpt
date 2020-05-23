function intersection(...args) {
  if (args.length === 0) return []

  if (args.length === 1) return args[0]

  return [...new Set(args.reduce(function (result, arg) {
    return result.filter(item => arg.includes(item))
  }))]
}

var list1 = [1,2,3,4]

var list2 = [3,4,5,6]

console.log(intersection(list1, list2))
