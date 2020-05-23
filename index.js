// 时间复杂度为O(nlog(n))
function nlogn(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    let j = 1
    while (j < n) {
      sum++
      j = j * 2
    }
  }
  return sum;
}
console.log(nlogn(1024))

// 时间复杂度为O(log(n))
// 每循环一次 i乘以3  此时正好i的指数就是循环的次数
function logn(n) {
  let i = 1
  let sum = 0
  while (i < n) {
    sum++
    i = i * 3
  }
  return sum
}
console.log(logn(81))

// 时间复杂度为O(n2)
function n2(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      sum++
    }
  }
  return sum
}
console.log(n2(10))

// 时间复杂度为O(n)
function n(n) {
  let sum = 0
  let i = 1
  while (i <= n) {
    sum++
    i++
  }
  return sum
}
console.log(n(10))

// 时间复杂度为O(1)
// sum的值与n的值无关，即程序执行的时间与数据规模n无关，时间复杂度为O(1)
function one(n) {
  let sum = 0
  let i = 0
  while (i < 10) {
    sum++
  }
}
console.log(one(10))
