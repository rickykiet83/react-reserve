import mongoose from 'mongoose';
import shortid from 'shortid';

const { String, Number } = mongoose.Schema.Types;

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mediaUrl: String,
  description: String,
  sku: {
    type: String,
    unique: true,
    default: shortid.generate(),
  },
});

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema);
