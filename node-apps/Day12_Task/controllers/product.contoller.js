var db = require("../models/product/index");
var Product = db.products;

exports.create = (req, res) => {
    if(!req.body.name){
        res.status(400).send({message: "Name can not be empty"});
    }else if(!req.body.brand)
    {
        res.status(400).send({message: "brand can not be empty"});
    }else if(!req.body.model)
    {
        res.status(400).send({message: "model can not be empty"});
    }else if(!req.body.price)
    {
        res.status(400).send({message: "price can not be empty"});
    }else if(!req.body.quantity)
    {
        res.status(400).send({message: "quantity can not be empty"});
    }
    else{
        let products = new Product({
            name: req.body.name,
            brand: req.body.brand,
            model: req.body.model,
            price: req.body.price,
            quantity: req.body.quantity
        });
        products.save(products).then((data)=>{
            res.send({data:data, message:"Saved Successfully"});
        }).catch((err)=>{
            res.status(400).send({message:"error", err:err});
        })
    }
}

exports.getProducts = (req, res) => {
    Product.find().then((data)=>{
        res.json(data);
    }).catch((err)=>{
        res.status(400).send({error:err});
    });
}