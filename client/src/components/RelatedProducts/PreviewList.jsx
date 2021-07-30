import React, { useEffect, useContext } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved, import/extensions
import ProductTile from '#components/ProductTile/ProductTile';

const RowDiv = styled.div`
  display: flex;
`;
const ContainerDiv = styled.div`
  display: flex;
  margin-top: 40px;
`;
const LeftControlDiv = styled.div`
  color: #fff;
  align-items: center;
  justify-content: center;
  position: absolute;
  float: right;
  background-color: #0000006e;
  height: 415px;
  display: flex;
  width: 30px;
  cursor: pointer;
`;

const PreviewList = ({ title, list }) => {
  console.log(list);
  // /products/:product_id/related
  return (
    <div>
      <h1>{title}</h1>
      <RowDiv>
        <ContainerDiv>
          <LeftControlDiv onClick={() => console.log('test')}>
            <i className="fas fa-chevron-left" />
          </LeftControlDiv>
          {list.map((item, index) => index < 4 && <ProductTile key={item.id} data={item} />)}
          <LeftControlDiv onClick={() => console.log('test')}>
            <i className="fas fa-chevron-right" />
          </LeftControlDiv>
        </ContainerDiv>
      </RowDiv>
    </div>
  );
};

export default PreviewList;
