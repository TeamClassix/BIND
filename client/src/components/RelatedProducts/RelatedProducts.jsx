import React, { useContext, useState } from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/extensions, import/no-unresolved
import RelatedProductsContext from '#contexts/RelatedProducts';
import PreviewList from './PreviewList';

const RelatedProducts = () => {
  const [ useRPState, setRPState ] = useState({
    related: [],
    outfit: [],
  });
  return (
    <RelatedProductsContext.Provider value={useRPState}>
      <PreviewList title="Related Products" list={useRPState.related} />
      <PreviewList title="Your Outfit" list={useRPState.outfit} />
    </RelatedProductsContext.Provider>
  );
};

export default RelatedProducts;
