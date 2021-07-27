import React from 'react';
import styled from 'styled-components';

const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  width: 20%;
  align-items: center;
`;
const ProductImageDiv = styled.div``;
const ProductDetailsDiv = styled.div``;

const ProductTile = () => {
  console.log('test');
  return (
    <OuterDiv>
      <ProductImageDiv>
        Image Here
      </ProductImageDiv>
      <ProductDetailsDiv>
        <div>Category</div>
        <div>Expanded Product Name with Extra Text</div>
        <div>$123</div>
        <div>*****</div>
      </ProductDetailsDiv>
    </OuterDiv>
  );
};

export default ProductTile;
