const mongoose = require("mongoose")
const Schema = mongoose.Schema

const photographySchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  description: {
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
  isOnWishlist: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model("Photography", photographySchema)