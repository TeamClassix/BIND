import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// eslint-disable-next-line import/no-unresolved, import/extensions
import ProductTile from '#components/ProductTile/ProductTile';

const TileRowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const getProducts = async () => {
  try {
    const products = await axios({
      method: 'GET',
      url: '/api/products',
      params: {
        count: 8,
      },
    });
    return [null, products.data];
  } catch (e) {
    return [e];
  }
};

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    console.log('tesssst');
    const [err, { data }] = await getProducts();
    if (err) {
      return err;
    }
    setProducts(data);
  }, []);
  return (
    <TileRowDiv>
      {products.map((product) => <ProductTile key={product.id} data={product} />)}
    </TileRowDiv>
  );
};

export default LandingPage;
