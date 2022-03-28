var fs = require('fs');

var zlib = require("zlib");

fs.createReadStream('compressed-file.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('uncompressed-data.txt'));

console.log("file uncompressed successfully");