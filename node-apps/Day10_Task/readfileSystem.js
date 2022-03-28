var fs = require("fs");

console.log("This is the First line");

fs.readFile('dummy.txt', function(err,data){
    if(err){
        console.log(err);
    } else{
        console.log(data.toString());
    }
})
console.log("This is the Second line");