var fs = require("fs");

fs.stat("new-demo.txt",function(err, stats){
    if(err){
        console.log(err);
    }
    console.log("Stats: ");
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats);
})
