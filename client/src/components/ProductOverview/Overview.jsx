import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import ProductDescription from './ProductDescription.jsx';
import StyleSelect from './StyleSelect.jsx';



const Overview = () => {
  const [mainID, setmainID] = useState(25167);

  //25168 has no images at all

  const [productInfo, setProductInfo] = useState({});


  // useEffect(() => {
  //   axios.get('/cheese', {
  //     params: {
  //       ID: mainID,
  //     },
  //   })
  //     .then((response)=> {
  //       console.log(response.data, 'should be all data');
  //     })
  //     .catch((error)=> {
  //       console.log(error);
  //     });
  // }, []);


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



  //   const Button = styled.button`
  //   background: transparent;
  //   border-radius: 3px;
  //   border: 2px solid palevioletred;
  //   color: palevioletred;
  //   margin: 0.5em 1em;
  //   padding: 0.25em 1em;

  //   ${props => props.primary && css`
  //     background: palevioletred;
  //     color: white;
  //   `}
  // `;

  //   const Container = styled.div`
  //   text-align: center;
  // `
  console.log('ddddd', productInfo);

  return (
    <>
      <div>
        share buttons
      </div>

      <div>
        <StyleSelect info={mainID} />
      </div>

      <div>Display Thing</div>

      <div>
        <ProductDescription info={productInfo} />
      </div>

    </>
  )

}



export default Overview;
