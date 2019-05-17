//声明并定义变量

var name = "jonathan";
var age = 18;
var height = 170, weight = 130.1;
var isMan = true;
var student = false;
var xinshengUsername = 'jonathan';
var wechat_user_name = 'jonathan';
var locationBase = '北京';
var company = locationBase + '新生大学';
var myLikeFoods= ['刀削面', '拉面', '牛肉面', '杂酱面', '麻酱面', '烩面', '莜面']
var myLikeColorList = ['blue', 'green', 'black', 'write']

//定义一个函数变量buildPerson(表达式函数定义法)
var buildPerson = function() {
  var xiaoming = {
    config: {
      age,
      height,
      weight,
      isMan,
      student,
      bloodType: 'A',
      haveGirlFriend: true
    },
    like: {
      myLikeColorList,
      myLikeFoods
    },
    work: {
      locationBase,
      company
    }
  };

  return xiaoming;
};

//调用（执行）buildPerson函数，根据基本信息构建
var personObj = buildPerson();
console.log(personObj);
