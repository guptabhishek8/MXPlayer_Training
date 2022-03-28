var fs = require("fs");
var path = require("path");

var ext = {
    extension : function(exten){
        fs.readdir(__dirname, function(err, files){
            if(err){
                console.log(err);
            }else{
                console.log("files in "+__dirname);
                
                files.forEach((file)=>{
                    if(path.extname(file)==exten){
                        console.log(file)
                    }
                })
            }
        })
    }
}


module.exports = ext;
