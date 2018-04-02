var fs = require('fs');
var dirPathString = '../../prectice-js/lesson6'
var files = fs.readdirSync(dirPathString);
console.log(files);
