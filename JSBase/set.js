var setA = new Set([1, 2, 3, 4, {name: 'Han'}]),
    setB = new Set([2, 3, {name: 'Han'}]),
    setC = new Set([3, 4, 5, 6, {name: 'Han'}]);

// 检测包含关系
function isSuperset(set, subset) {
  for (var elem of subset ) {
    if (!set.has(elem)) {
      return false
    }
  }
  return true;
}
console.log(isSuperset(setA,setB));


// 结合两个Set对象
function union(setA, setB) {
  var _union = new Set(setA);
  for (var elem of setB) {
    _union.add(elem);
  }
  return _union;
}

console.log(union(setA, setC))


// 查看交集
function intersection(setA, setB) {
  var _intersection = new Set();
  for (var elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem)
    }
  }
  return _intersection;
}

console.log(intersection(setA, setC));


// 查看不同

function difference(setA, setB) {
  var _difference = new Set(setA);
  for (var elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

console.log(difference(setC, setA));
