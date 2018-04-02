var fs = require('fs');

var outputPathString = './write_file_sync.txt';

var fileContent = 'Hello, JS';

fs.writeFileSync(outputPathString, fileContent);
