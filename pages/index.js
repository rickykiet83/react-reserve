import React from 'react';
import axios from 'axios';
function Home({ products }) {
  console.log(products);
  return <>Home</>;
}

Home.getInitialProps = async () => {
  // fetch data on server
  const url = 'http://localhost:3000/api/products';
  // return response data as an object
  const response = await axios.get(url);
  // note: this object will be merged with existing props
  return { products: response.data };
};

export default Home;
