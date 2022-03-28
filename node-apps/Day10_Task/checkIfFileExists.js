var fs = require("fs");

fs.readdir(__dirname, function(err, files){
    if(err){
        console.log(err);
    }else{
        console.log("files in "+__dirname);
        
        files.forEach((file)=>{
            if(file=='dummy.txt'){
                fs.readFile('dummy.txt', function(err,data){
                    if(err){
                        console.log(err);
                    } else{
                        console.log(data.toString());
                    }
                })
            }
            else{console.log("Dummy File Does not exist")}
        })
    }
})
