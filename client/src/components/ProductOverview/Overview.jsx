import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import ProductDescription from './ProductDescription.jsx';
import StyleSelect from './StyleSelect.jsx';
import { AppContext } from '#contexts';


const ThemeContext = React.createContext('light');

const Overview = (props) => {
  const [mainID, setmainID] = useState(25167);

  let intProps = parseInt(props.productId);
  console.log(intProps, 'should be something here');

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

  //url is invalid
  return (
    <>
      <div>
        share buttons
      </div>

      <fieldset style={{"width":"0px"}}>
      <div class="fb-share-button" data-href="http://localhost:5000/someslug/25167" data-layout="box_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A5000%2Fsomeslug%2F25167&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"><em>Share on Facebook</em></a></div>
      </fieldset>
      <div>
        <StyleSelect info={intProps} productInfo={productInfo} />
      </div>

      <div>Display Thing</div>

      <div>
        <ProductDescription info={productInfo} />
      </div>

    </>
  );
};

export default Overview;
