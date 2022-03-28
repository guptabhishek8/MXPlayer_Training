var fs = require("fs");

var data = fs.readFileSync('strings.txt');

console.log(data.toString());

var arr = data.toString().split(" ");

console.log(arr);

for(var i=0; i<arr.length;i++){
    if(arr[i] == "my"){
        console.log("Found");
    } else{
        console.log("Not Found")
    }
}