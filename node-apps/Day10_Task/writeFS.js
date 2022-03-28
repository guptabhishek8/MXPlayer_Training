var fs = require("fs");

console.log("First Line");

const data = "this is my first file generate by node file system";

fs.writeFile("demo.txt", data, function(err, res){
    if(err){
        console.log(err);
    }console.log("File Written Successfully");
})


console.log("Last Line");