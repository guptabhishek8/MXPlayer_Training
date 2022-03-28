var fs = require("fs");

fs.open("demo1.txt",'w',function(err, res){
    if(err){
        console.log(err);
    }console.log("File Written Successfully");
})
