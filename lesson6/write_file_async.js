var fs = require('fs');

var filePathString = './write_file_async.txt';

var fileContent = 'Hello, js';

function callback(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}

fs.writeFile(filePathString, fileContent, callback); //通过回调的方式来返回结果
