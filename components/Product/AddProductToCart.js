import { Input } from 'semantic-ui-react';
import React from 'react';

function AddProductToCart({ productId }) {
  return (
    <Input
      type='number'
      defaultValue='1'
      placeholder='quantity'
      action={{
        color: 'orange',
        content: 'Add to Cart',
        icon: 'plus cart',
      }}
    />
  );
}

export default AddProductToCart;
