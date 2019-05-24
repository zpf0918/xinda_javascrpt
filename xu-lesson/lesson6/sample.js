var fs = require('fs'); //引入模块
var files = fs.readdirSync('../'); //当前目录下的文件
// fs.readFile('../', function (err, result) {
//   console.log(err)
// })

function aa(b, callback){
  // console.log('开始')
  let result = b + 1
  callback(result)
  // console.log('结束')
}

var b = 1

function callback(result) {
  console.log(result)
}
aa(b, callback)