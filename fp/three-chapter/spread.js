function foo(x, y) {
  console.log(x + y)
}

function bar(fn) {
  fn([3, 9])
}

bar(foo) // fail

// 辅助展开函数
function spreadArgs(fn) {
  return function spreadFn(argsArr) {
    return fn(...argsArr)
  }
}

bar(spreadArgs(foo))

function gatherArgs(fn) {
  return function gatherFn(...argsArr) {
    return fn(argsArr)
  }
}

function combineFirstTwo([v1, v2]) {
  return v1 + v2
}
