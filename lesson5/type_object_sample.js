var config = {
  height: 170,
  weight: 120,
  sex: 'man',
  age: 18
};

console.log('---小明的基本信息---');
console.log(config);

console.log('\n ---修改小明的基本信息---');
config.sex = 'woman';
console.log(config);

console.log('\n ---增加小明的属性（血型）---');
config.bloodType = 'A';
console.log(config);

console.log('\n 删除小明的年龄');
delete config.age;
console.log(config);

config.run = function() {
  console.log('\n ### function ###');
  console.log(' i am running');
}

config.run();

console.log('\n --- config ---');
console.log(config);

console.log('\n ########');
console.log('我是分割线');
console.log('#########');


var config2 = {
  height: 170,
  weight: 120,
  sex: 'man',
  age: 18,
  run: function() {
    console.log('\n ### function ###');
    console.log(' i am running');
  }
}

config2.run();
