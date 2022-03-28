var fs = require("fs");

fs.unlink("demo1.txt",function(err, res){
    if(err){
        console.log(err);
    }console.log("File deleted Successfully");
})
