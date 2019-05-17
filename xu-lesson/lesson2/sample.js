var obj = {
  count: 1
}

function output(obj) {
  obj = Object.assign({}, obj)
  obj.count = obj.count + 1;
  console.log(obj.count);
}

output(obj);
console.log(obj.count);
