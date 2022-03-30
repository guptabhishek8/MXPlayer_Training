var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');
var multer = require("multer");
var morgan = require('morgan');

var app = express();

app.use(express.static(path.join(__dirname,'assests')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.get("/",function(req, res){
    //res.send("Welcome to My Node Express App");
    res.sendFile(__dirname+"/home.html");
});

app.post("/show_user", function(req, res){
    console.log(req.body);
    res.json({username: req.body.username,email: req.body.email,
        number: req.body.number,pincode: req.body.pincode,
        city: req.body.city,password: req.body.password});
})

app.get("/uploadimg",function(req, res){
    //res.send("Welcome to My Node Express App");
    res.sendFile(__dirname+"/upload.html");
});

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-'+Date.now()+path.extname(file.originalname));
    }
})

app.post("/upload", function(req, res){
    var upload = multer({
        storage: storage, 
        fileFilter: function(req, file, cb){
            var ext = path.extname(file.originalname);
            if(ext!=".png" && ext!=".jpg"){
                return cb(res.end("Only images are allowed"));
            }
            cb(null, true);
        }
    }).single('doc');
    upload(req, res, function(err){
        res.end("File is uploaded successfully");
    });
});

app.get("/about",function(req, res){
    res.send("Welcome to About us of My Node Express App");
});

app.get("/contact",function(req, res){
    res.send("Welcome to Contact us of My Node Express App");
});

app.get("/services",function(req, res){
    res.send("Welcome to Services of My Node Express App");
});

app.listen(4000, function(){
    console.log("Server is running")
})