import { Item, Label } from 'semantic-ui-react';

import AddProductToCart from './AddProductToCart';
import React from 'react';

function ProductSummary({ name, mediaUrl, _id, price, sku }) {
  return (
    <Item.Group>
      <Item>
        <Item.Image size='medium' src={mediaUrl} />
        <Item.Content>
          <Item.Header>{name}</Item.Header>
          <Item.Description>
            <p>${price}</p>
            <Label>SKU: {sku}</Label>
          </Item.Description>
          <Item.Extra>
            <AddProductToCart productId={_id}></AddProductToCart>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}

export default ProductSummary;
