var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

var corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true}));


var db = require('./models/product/index');

db.mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("DataBase Connected Successfully");
}).catch((err)=>{
    console.log("Cannot Connect to DataBase:",err);
});

app.get("/", function(req, res){
    res.send("Welcome to Node API app");
});

require("./routes/product.routes")(app);


app.listen(4000, function(){
    console.log("Server is running on port : 4000");
})