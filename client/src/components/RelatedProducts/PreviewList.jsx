import React, { useEffect, useContext } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved, import/extensions
import ProductTile from '#components/ProductTile/ProductTile';

const RowDiv = styled.div`
  display: flex;
`;

const PreviewList = ({ title, list }) => {
  console.log(list);
  // /products/:product_id/related
  return (
    <div>
      <h1>{title}</h1>
      <RowDiv>
        {list.map((item) => <ProductTile key={item.id} data={item} />)}
      </RowDiv>
    </div>
  );
};

export default PreviewList;
