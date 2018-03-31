/*
* 表达式语句/赋值语句
*/

var age = 18;
var myLikeColorsList = ['blue', 'green', 'black', 'write']

1 + 1; // 表达式

console.log('\n');

/*
* 条件语句 -- if
*/

if (age >= 18) {
  console.log('已成年');
} else {
  console.log('未成年');
}

console.log('\n');

/*
* 条件语句 -- switch
*/
switch (age >= 18 ) {
  case true:
    console.log('已成年');
    break; // 退出循环
  case false:
     console.log('未成年');
     break;
  default: //当所有条件都不符合时
    console.log('not a man');
}
// 上面代码存在逻辑问题，永远不会有default的情况。true 与 false 不用swith

console.log('\n');


/*
* 循环语句 -- for
*
* 循环语句的三要素
* 1. 循环开始的初始化变量 var i = 0;
* 2. 循环条件 i < myLikeColorsList.length;
* 3. 计数器变量更新 i++;
*/

for (var i = 0; i < myLikeColorsList.length; i++) {
  console.log(myLikeColorsList[i])
}
// ; 代表一个空语句
// typeof 查询变量的数据类型

// 等价于
var i = 0;
for (; i < myLikeColorsList.length; i++) {
  console.log(myLikeColorsList[i])
}

// 等价于
var i = 0;
for (; i < myLikeColorsList.length;) {
  console.log(myLikeColorsList[i]);
  i++
}


//改进写法： 初始化变量可以是多个，计数器变量更新也可以是多个

for (var i = 0, j = 0; i < myLikeColorsList.length; i++, j++){
  console.log("种类" + j);
  console.log(myLikeColorsList[i]);
}

// 轮询数组的技巧
for (var i = 0, j = myLikeColorsList.length - 1; i < myLikeColorsList.length /2; i++, j--){
  console.log(myLikeColorsList[i]);
  console.log(myLikeColorsList[j]);
}

console.log('\n')
