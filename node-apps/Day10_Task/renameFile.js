var fs = require("fs");

fs.rename("demo1.txt","new-demo.txt",function(err, res){
    if(err){
        console.log(err);
    }console.log("File rename Successfully");
})
