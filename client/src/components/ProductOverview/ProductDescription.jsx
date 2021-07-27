import React, { useState, useEffect } from 'react';


const ProductDescription = (data) => {
  //should destructure the info from data
  // const { info } = data;

  console.log(data, 'the end');

  var feats;
  if (data.info.features) {
    feats = data.info.features.map((oneFeat) => {
      return (
        <>
          <li>{oneFeat.feature}</li>
          <li>{oneFeat.value}</li>
        </>
      )
    }
    );
  } else {
    feats = null;
  }

  return (
    <div className="products">
      <div>Name: {data.info.name}</div>
      <div>
        Description:
        {data.info.description}
      </div>
      <div>
        Slogan:
        {data.info.slogan}
      </div>

      {feats}
    </div>
  )

}



export default ProductDescription;