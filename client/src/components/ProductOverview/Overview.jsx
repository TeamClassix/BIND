import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
  FacebookIcon,
  PinterestIcon,
  TwitterIcon,
} from "react-share";
import PropTypes from 'prop-types';
import ProductDescription from './ProductDescription.jsx';
import StyleSelect from './StyleSelect.jsx';
import { AppContext } from '#contexts';

const ThemeContext = React.createContext('light');


const Overview = (props) => {
  const { productId } = props;
  const intProps = parseInt(productId);
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    axios.get(`/api/products/${intProps}`, {
    })
      .then((response) => {
        console.log(response.data, 'should be all id');
        setProductInfo(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const currentURL = `http://localhost:5000/someslug/${intProps}`;
  return (
    <>
    <ThemeContext.Provider value="dark">

      <div>
        share buttons
      </div>

      <div>
        <StyleSelect info={intProps} productInfo={productInfo} />
      </div>

      <div>Display Thing</div>

      <div>
        <ProductDescription info={productInfo} />
      </div>


      </ThemeContext.Provider>

    </>
  );
};

Overview.propTypes = {
  productId: PropTypes.string.isRequired
};

export default Overview;
