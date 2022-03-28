var fs = require('fs');

var zlib = require("zlib");

fs.createReadStream('demo.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('compressed-file.gz'));

console.log("File zipped sucessfully");