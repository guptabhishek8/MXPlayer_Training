var fs = require('fs');

var readStream = fs.createReadStream('demo.txt');
var writeStream = fs.createWriteStream('test.txt');

readStream.pipe(writeStream);

console.log("read and write is done.");