const mongoose = require("mongoose");
// console.log("***************** models file");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "you must enter a {PATH}"],
        minlength: [5, "please adequately describe the product, {PATH} must be at least {MINLENGTH} characters"]

    },
    price: {
        type: Number,
        required: [true, "you must enter a {PATH}"],
        min:[1, "I won't pay you to take this, somethings in life come free but this isn't one of them"]
    },
    description: {
        type: String,
        required: [true, "you must enter a {PATH}"],
        minlength: [5, "please adequately describe the product, {PATH} must be at least {MINLENGTH} characters"]
    }


}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema)
