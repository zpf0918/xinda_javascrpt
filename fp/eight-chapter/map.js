function map(mapperFn, arr) {
  let newList = []

  for (let idx = 0; idx < arr.length; idx++) {
    newList.push(mapperFn(arr[idx], idx, arr))
  }

  return newList
}

Array.prototype.myMap = function (mapperFn) {
  let newList = [], arr = this

  for (let i = 0; i < arr.length; i++) {
    newList.push(mapperFn(arr[i], i, arr))
  }

  return newList
}

function unary(fn) {
  return function oneArg(arg) {
    return fn(arg)
  }
}

let result = map(unary(parseInt), [1,2,3, '4'])

const one = () => 1
const two = () => 2
const three = () => 3

[one, two, three].map(fn => fn())

const increment = v => ++v
const decrement = v => --v
const square = v => v * v

const double = v => v * 2
const compose = (...fns) => {
  return function composed(result) {
    return fns.reverse().reduce(function (result, fn) {
      return fn(result)
    }, result)
  }
}

result = [increment, decrement, square]
  .map(fn => compose(fn, double))
  .map(fn => fn(3))
console.log(result)

function uppercaseLetter(c) {
  var code = c.charCodeAt( 0 );

  if (code >= 97 && code <= 122) {
    code = code - 32;
  }

  return String.fromCharCode( code );
}

function stringMap(mapperFn,str) {
  return [...str].map( mapperFn ).join( "" );
}

