var fs = require("fs");

var data = fs.readFileSync('strings.txt');
console.log(data.toString());

var arr = data.toString().split(".");
console.log(arr);


for(var i=0; i<arr.length;i++){
    fs.writeFile('string'+i, arr[i], function(err, res){
        if(err){
            console.log(err);
        }console.log("File Written Successfully");
    })
}
