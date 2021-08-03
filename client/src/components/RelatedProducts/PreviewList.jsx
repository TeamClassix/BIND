import React, { useEffect, useContext, useState } from 'react';
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
  width: 100%;
`;
const ControlDiv = styled.div`
  position: absolute;
  width: 1180px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
`;
const LeftControlDiv = styled.div`
  color: #fff;
  justify-content: center;
  align-items: center;
  background-color: #0000006e;
  height: 402px;
  display: flex;
  width: 30px;
  cursor: pointer;
  pointer-events: all;
`;

const PreviewList = ({ title, list }) => {
  const [rpStart, setRpStart] = useState(0);
  const handleClick = (direction) => {
    let newVal = rpStart + 4 * direction;
    if (newVal < 0) newVal = 0;
    // if (newVal > list.length - 1) newVal = list.length;
    setRpStart(newVal);
  };
  // /products/:product_id/related
  return (
    <div>
      <h1>{title}</h1>
      {list.length
        ? (
          <RowDiv>
            <ControlDiv>
              <LeftControlDiv onClick={() => rpStart > 0 && handleClick(-1)}>
                {rpStart > 0 && <i className="fas fa-chevron-left" />}
              </LeftControlDiv>
              <LeftControlDiv onClick={() => rpStart + 4 < list.length && handleClick(1)}>
                {rpStart + 4 < list.length && <i className="fas fa-chevron-right" />}
              </LeftControlDiv>
            </ControlDiv>
            <ContainerDiv>
              {list.map((item, index) => (index >= rpStart) && (index < 4 + rpStart)
              && <ProductTile key={item.id} data={item} />)}
            </ContainerDiv>
          </RowDiv>
        )
        : (
          <div>No Results Found</div>
        )}
    </div>
  );
};

export default PreviewList;
