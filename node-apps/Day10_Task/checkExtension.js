var fs = require("fs");
var path = require('path');

fs.readdir(__dirname, function(err, files){
    if(err){
        console.log(err);
    }else{
        console.log("files in "+__dirname);
        
        files.forEach((file)=>{
            if(file.match(/.js/)){
                console.log(file)
            }
        })
    }
})
