import { Card } from 'semantic-ui-react';

function ProductList({ products }) {
  function mapProductToItems(products) {
    return products.map((product) => ({
      header: product.name,
      image: product.mediaUrl,
      meta: `$${product.price}`,
      price: product.price,
      color: 'teal',
      fluid: true,
      childKey: product._id,
      href: `/product?_id=${product._id}`,
    }));
  }

  return (
    <Card.Group
      stackable
      itemsPerRow='3'
      centered
      items={mapProductToItems(products)}
    ></Card.Group>
  );
}

export default ProductList;
