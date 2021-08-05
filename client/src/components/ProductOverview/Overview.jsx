import React, { useState, useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import ProductDescription from './ProductDescription.jsx';
import StyleSelect from './StyleSelect.jsx';
import { RelatedProductsContext, AppContext } from '../../contexts/Contexts.jsx';


const Overview = (props) => {

  const { idState } = useContext(AppContext);
  const [id, setIdState] = idState;
  const { productId } = props;
  const intProps = parseInt(id);
  console.log(intProps, 'intprops');
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    axios.get(`/api/products/${intProps}`, {
    })
      .then((response) => {
        console.log(response, 'should be all overview info');
        setProductInfo(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <a href="#google"> something</a>


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
    </>
  );
};

Overview.propTypes = {
  productId: PropTypes.string.isRequired
};

export default Overview;
