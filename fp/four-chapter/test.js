function compose(...fns) {
  return function composed(result) {
    return fns.reverse().reduce(function (result, fn) {
      return fn(result)
    }, result)
  }
}

function compose(...fns) {
  return function composed(result) {
    let list = fns.slice()

    while (list.length > 0) {
      result = list.pop()(result)
    }

    return result
  }
}

// 组合函数
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

let text = "To to up up 1 compose"

// level 1 最原始化的运作
var middleWordsArr = words(text)
var result = unique(middleWordsArr)

// level 2 把两个机器之间的传送带去掉
var result = unique(words(text))

// level 3 把两个机器包起来
function uniqueWords(val) {
  return unique(words(val))
}
uniqueWords(text)

// level 4 制造机器的机器，但是只能接受两个个小机器
function compose2(fn3, fn2, fn1) {
  return function composed(val) {
    return fn3(fn2(fn1(val)))
  }
}

// level 5 制造机器的机器, 但是可以任意个机器
function compose(...fns) {
  return function composed(result) {
    return fns.reverse().reduce(function (result, fn) {
      return fn(result)
    }, result)
  }
}

//把代码变成实际中的一个例子， 例如糖果工厂。

function compose(...fns) {
  return function composed(result) {
    let list = fns.slice()

    while (list.length > 0) {
      result = list.shift()(result)
    }

    return result
  }
}

function compose(...fns) {
  return function composed(result) {
    return fns.reduce(function (result, fn) {
      return fn(result)
    }, result)
  }
}

const uniqueWords = compose(words, unique)
console.log(uniqueWords(text))

function partial(fn, ...presetArgs) {
  return function partiallyApply(...laterArgs) {
    return fn(...presetArgs, ...laterArgs)
  }
}



// ajax(url, data, cb)
var getPerson = partial(ajax, 'https://api/person')
var getLasterOrder = partial(ajax, 'https://api/order', { id: -1 })

getLasterOrder(function orderFound(order) {
  getPerson({ id: order.personId}, function personFound(person) {
    output(person.name)
  })
})