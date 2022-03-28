var fs = require("fs");

const data = "this is my second task";
 
fs.readFile('readWrite.txt', function(err,data){
    if(err){
        console.log(err);
    } else{
        console.log(data.toString());
        fs.writeFile('readWrite.txt', data, function(err, res){
            if(err){
                console.log(err);
            }
            console.log("Written Successfully");
        })
    }
})
