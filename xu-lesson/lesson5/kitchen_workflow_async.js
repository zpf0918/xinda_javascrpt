function buyFoods(callback) {
  console.log('开始采购');

  setTimeout(function() {
    console.log('采购完毕'),
    var foodList = ['fish', 'egg', 'meat'];
    callback(foodList);
  }, 5000);
}

function prepare() {
  console.log('')
}