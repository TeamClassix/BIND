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
  justify-content: space-between;
`;
const ControlDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 275px;
  z-index: 100;
`;
const LeftControlDiv = styled.div`
  color: #fff;
  justify-content: center;
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
          {list.map((item, index) => index < 4 && <ProductTile key={item.id} data={item} />)}
          <ControlDiv>
            <LeftControlDiv onClick={() => console.log('test')}>
              <i className="fas fa-chevron-left" />
            </LeftControlDiv>
            <LeftControlDiv onClick={() => console.log('test')}>
              <i className="fas fa-chevron-right" />
            </LeftControlDiv>
          </ControlDiv>
        </ContainerDiv>
      </RowDiv>
    </div>
  );
};

export default PreviewList;
