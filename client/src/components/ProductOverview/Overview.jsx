import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import ProductDescription from './ProductDescription.jsx';
import StyleSelect from './StyleSelect.jsx';
import { AppContext } from '#contexts';



const Overview = (props) => {
  const [mainID, setmainID] = useState(25167);

  const [meta, setMeta] = useState(null);
  //25168 has no images at all

  const [productInfo, setProductInfo] = useState({});


  useEffect(() => {
    axios.get(`/api/products/${mainID}`, {
    })
      .then((response) => {
        console.log(response.data, 'should be all id');
        setProductInfo(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);





  return (
    <>
      <div>
        share buttons
      </div>

      <div>
        <StyleSelect info={mainID} productInfo={productInfo} />
      </div>

      <div>Display Thing</div>

      <div>
        <ProductDescription info={productInfo} />
      </div>

    </>
  )

}



export default Overview;
