const mongoose = require("mongoose")
const Schema = mongoose.Schema

const wishlistSchema = new Schema({
    brand: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imgURL: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("Wishlist", wishlistSchema)