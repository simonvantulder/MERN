const Product = require("../models/product.models");

module.exports = {
    index: (req,res) =>{
        res.json({
            message: "Thank Baby Jesus this works"
        });
    },
    findAllProducts: (req, res) => {
        Product.find().sort({title:1})
            .then(data => res.json({ results: data, message: "success"}))
            .catch(err => res.json({ message: "Something went wrong", error: err}));
    },

    findOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(data => res.json({ results: data, message: "success" }))
            .catch(err => res.json( err.errors ));
    },

    findOneRandomProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(data => res.json({ results: data, message: "success" }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    },

    createNewProduct: (req, res) => {
        console.log("++++++++++++++++ excuting create now");
        Product.create(req.body)
            .then(data => res.json({ results: data, message: "success" }))
            .catch(err => res.json( err.errors ));
    },

    updateExistingProduct: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(data => res.json({ results: data, message: "success" }))
            .catch(err => res.json( err.errors ));
    },

    deleteAnExistingProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then(data => res.json({ results: data, message: "success" }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    },
}