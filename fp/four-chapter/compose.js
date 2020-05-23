function words(str) {
  return String(str)
          .toLowerCase()
          .split(/\s|\b/)
          .filter(function alpha(v) {
            return /^[\w]+$/.test(v)
          })
}

function unique(list) {
  let uniqueList = []

  for(let i = 0; i < list.length; i++) {
    if (!uniqueList.includes(list[i])) {
      uniqueList.push(list[i])
    }
  }

  return uniqueList
}

var text = "To to up up 1 compose"

// level 1 有传送带的机器
var wordsFound = words(text)
var wordsUsed = unique(wordsFound)

// level 2 不用传送带 把机器都堆在一起
var wordsUsed = unique(words(text))

// level 3 用一个大盒子包装了一下
function uniqueWords(str) {
  return unique(words(str))
}
var wordsUsed = uniqueWords(text)

// level 4 制造大盒子的机器， 把小机器都输入，中间进行小机器的组合，输入一个大机器(uniqueWords)
function compose2(fn2, fn1) {
  return function composed(originValue) {
    return fn2(fn1(originValue))
  }
}
var uniqueWords = compose2(unique, words)

var letters = compose2(words, unique)
var chars = letters('how are you henry?')
console.log(chars)

// level 5 输入任意数量的盒子，输出一个大机器
function compose(...fns) {
  return function composed(result) {
    let list = fns.slice()

    while (list.length > 0) {
      result = list.pop()(result)
    }

    return result
  }
}

function skipShortWords(list) {
  let filterList = []

  for (let i = 0; i < list.length; i++) {
    if (list[i].length > 4) {
      filterList.push(list[i])
    }
  }

  return filterList
}

var biggerWords = compose(skipShortWords, unique, words)
console.log(biggerWords(text))

function compose(...fns) {
  return function composed(result) {
    let list = fns.slice()

    while (list.length > 0) {
      result = list.pop()(result)
    }

    return result
  }
}

function compose(...fns) {
  return function composed(result) {
    return fns.reverse().reduce(function (result, fn) {
      return fn(result)
    }, result)
  }
}

function compose(...fns) {
  let [fn1, fn2, ...rest] = fns

  let composedFn = function composed(...args) {
    return fn2(fn1(...args))
  }

  if (rest.length === 0) return composedFn

  return compose(...rest.reverse(), composedFn)
}
