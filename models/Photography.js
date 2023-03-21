const mongoose = require("mongoose")
const Schema = mongoose.Schema

const photographySchema = new Schema({
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
    type: Number,
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
})

module.exports = mongoose.model("Photography", photographySchema)