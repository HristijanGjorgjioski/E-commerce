import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
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
  selection: {
    type: String,
    required: true,
  },
  createdBy: { 
    type: String, 
    required: true 
  }
}, { timestamps: true } );

export default mongoose.model('Product', productSchema);
