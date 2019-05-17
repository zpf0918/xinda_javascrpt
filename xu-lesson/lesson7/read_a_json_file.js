var jsonFile = require('jsonfile');

var file = './test_data/data.json';

jsonFile.readFile(file, function (err, obj) {
  if (err) {
    console.log(err);
  } else {
    console.log('read ok');
  }
});