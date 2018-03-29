function prepare(){
  console.log('洗碗、拖地、打扫。。。。');

  return true;
}

function buyFoods(){
  console.log('去买菜！')

  var foodList = ['鸡蛋', '西红柿', '牛肉', '鸡肉'];

  return foodList;
}

function cooking(foodList){
  console.log('开始做菜');

  console.log(foodList);

  var list = ['木须肉', '鸡胸肉', '牛排'];

  return list;

}

function startWorkFlow(){
  var result = prepare();

  if (result) {
    var foodList = buyFoods();

    var list = cooking(foodList);

    console.log(list)
  }
}

startWorkFlow();
