import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

// import PropTypes from 'prop-types';
import ProductDescription from './ProductDescription.jsx';
import StyleSelect from './StyleSelect.jsx';
import { AppContext } from '../../contexts/Contexts.jsx';


const Overview = (props) => {
  const { idState } = useContext(AppContext);
  const [id] = idState;

  const intProps = parseInt(id);
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

export default Overview;
