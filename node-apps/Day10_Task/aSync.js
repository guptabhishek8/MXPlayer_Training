var fs = require("fs");

console.log("This is the first line");

var readData = function(fileName){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName, function(err, data){
            if(err){
                reject(err);
            }
            resolve(data.toString());
        })
    })
}

readData("dummy.txt").then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

console.log("This is the last line");
