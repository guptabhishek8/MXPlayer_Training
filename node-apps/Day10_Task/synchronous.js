var fs = require("fs");
console.log("first line");

var data = fs.readFileSync('dummy.txt');
console.log(data.toString());

console.log("second line");


