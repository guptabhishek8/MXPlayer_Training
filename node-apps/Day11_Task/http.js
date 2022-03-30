var http = require("http");

http.createServer(function(req, res){
    res.writeHead(200,{'content-type':'text/html'});
    //res.write("Welcome to Node app");
    //res.write("Request URL : "+req.url);
    if(req.url == "/about"){
        res.write("Welcome To ABout Us");
    }else if(req.url == "/contact"){
        res.write("Welcome to Contact Us");
    }else{
        res.write("Welcome to Home");
    }
    res.end();
}).listen(4000, function(){
    console.log("Server is running at port 4000");
});