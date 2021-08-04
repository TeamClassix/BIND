import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';


const FloatRight = styled.div`
float: right;
padding-right: 250px;


`;

const ProductDescriptionDiv = styled.div`
position:relative;

`;

const ProductDescription = (data) => {
  //should destructure the info from data
  const { info } = data;



  let feats;
  if (info.features) {
    feats = data.info.features.map((oneFeat) => (
      <>
        <li key={oneFeat}>
          {oneFeat.feature}
          :
          {oneFeat.value}
        </li>
      </>
    ));
  } else {
    feats = null;
  }

  return (
    <>
      <ProductDescriptionDiv key="ProductDescriptionDiv">
        <FloatRight key="FloatRight">
          <div className="Slogan">
            Slogan:
            {info.slogan}
          </div>

          {feats}

        </FloatRight>

        <div style={{ width: '50%', borderRight: '1px solid' }} className="products">
          <div>
            Name:
            {info.name}
          </div>
          <div>
            Description:
            {info.description}
          </div>
        </div>
      </ProductDescriptionDiv>


    </>
  );
};

export default ProductDescription;
