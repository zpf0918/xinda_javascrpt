var fs = require('fs'); //引入模块
var files = fs.readdirSync('../'); //当前目录下的文件
console.log(files);
