const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String, 
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  collection: {
    type: String,
    required: true,
  },
  createdBy: { type: String, required: true }
}, { timestamps: true } );

module.exports = mongoose.model('Product', postSchema);