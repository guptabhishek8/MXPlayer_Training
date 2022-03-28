var fs = require("fs");

fs.readdir(__dirname, function(err, files){
    if(err){
        console.log(err);
    }else{
        console.log("files in "+__dirname);
        
        files.forEach((file)=>{
            console.log(file);
        })
    }
})
