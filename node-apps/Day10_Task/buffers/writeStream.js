var fs = require("fs");

var data = 'This is my data to write as write stream';

var writeStream = fs.createWriteStream("newDemo.txt");

writeStream.write(data, "utf-8");
writeStream.end();

writeStream.on('error', function(err){
    console.log(err);
});

writeStream.on('finish', function(){
    console.log("writing finished");
})
