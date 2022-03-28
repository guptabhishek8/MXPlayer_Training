var fs = require("fs");

const data = "this is my new modified Code.";

fs.appendFile("append.txt", data, function(err, res){
    if(err){
        console.log(err);
    }console.log("File Written Successfully");
})
