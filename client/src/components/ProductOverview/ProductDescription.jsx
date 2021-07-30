import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';


const ProductDescription = (data) => {
  //should destructure the info from data
  // const { info } = data;
  const FloatRight = styled.div`
  float: right;
  padding-right: 200px;

  `;


  var feats;
  if (data.info.features) {
    feats = data.info.features.map((oneFeat) => {
      return (
        <>
          <li>{oneFeat.feature} : {oneFeat.value}</li>
        </>
      )
    }
    );
  } else {
    feats = null;
  }

  return (
    <>
    <FloatRight>
      <div>
        Slogan:
        {data.info.slogan}
      </div>

      {feats}


    </FloatRight>


    <div style={{"width":"50%", "border-right": "1px solid"}} className="products">
      <div>Name: {data.info.name}</div>
      <div>
        Description:
        {data.info.description}
      </div>
    </div>


    </>
  )

}



export default ProductDescription;
