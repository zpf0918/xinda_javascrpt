var setA = new Set([1, 2, 3, 4]),
var setB = new Set([2, 3]),
var setC = new Set([3, 4, 5, 6]);

function isSuperset(set, subset) {
  for (var elem of subset ) {
    if (!set.has(elem)) {
      return false
    }
  }
  return true;
}

isSuperset(setA,setB);
