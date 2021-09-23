import connectDb from '../../utils/connectDb';
import products from './../../static/products.json';

export default (req, res) => {
  connectDb();
  res.status(200).json(products);
};
