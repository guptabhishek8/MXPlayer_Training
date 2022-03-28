var fs = require("fs");

var data = '';

var readStream = fs.createReadStream("demo.txt");

readStream.setEncoding("utf-8");

readStream.on('data', function(chunks){
    data+=chunks;
});

readStream.on('error', function(err){
    console.log(err);
});

readStream.on('end', function(){
    console.log(data);
})
