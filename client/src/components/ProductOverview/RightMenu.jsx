import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
const RightMenu = (props) => {
  console.log(props, 'these are the props to pass in rightmenu')
  const [cats, setCats] = useState("Select");
  const [quantity, setQuantity] = useState("Select");
  const [reviewAvg, setReviewAvg] = useState(0);
  const [cart, setCart] = useState([{ sku_id: 828826, count: "62" }]);

  const { currentZoom, info, upper, currentStyle } = props;
  console.log(currentStyle.skus, 'the skus');
  useEffect(() => {
    axios.get(`/api/reviews/meta?product_id=${info}`, {
    })
      .then((response) => {
        let totalVal = 0;
        let totalRev = 0;
        for (const j in response.data.data.ratings) {
          let reviewNum = parseInt(response.data.data.ratings[j]);
          totalRev += reviewNum;
          totalVal += (reviewNum * parseInt(j));
          setReviewAvg((totalVal / totalRev));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get(`/api/cart`, {
    })
      .then((response) => {
        console.log(response.data.data, 'this is the cart');
        setCart(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const deleteCart = () => {
    axios.delete(`/api/cart`, {
    })
      .then((response) => {
        console.log('does this delete');
      })
      .catch((error) => {
        console.log(error);
      });
  }


  useEffect(() => {
    setCats('Select');
    setQuantity('Select');
  }, [currentStyle]);

  const submitCart = (event) => {
    event.preventDefault();
    const skuInt = parseInt(event.target[0].value);
    const quantityInt = parseInt(event.target[1].value);
    for (let i = 0; i < quantityInt; i++) {
      axios.post(`/api/cart`, {
        sku_id: skuInt,
        count: quantityInt,
      })
        .then((response) => {
          console.log(response.data.data, 'this is the cart');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  let sizes = [];
  const skuser = [];
  for (let sku in currentStyle.skus) {
    skuser.push([sku]);
    sizes.push(currentStyle.skus[sku]);
  }

  const optsize = skuser.map((siz) => {
    console.log(siz, 'siz and sizes');
    if (currentStyle.skus[siz].quantity === 0) {
      return null;
    }
    return (<option value={siz}>{currentStyle.skus[siz].size}</option>);
  });

  //builds the options value for the inventory number
  const quant = [];
  if (cats !== "Select") {
    const par = currentStyle.skus[cats].quantity;
    for (let i = 0; i < 16; i += 1) {
      if (cats.quantity !== 'Select' && i < (par + 1)) {
        quant.push(<option value={i}>{i}</option>);
      }
    }
  }

  const stars = [];
  for (let star = 0.5; star < 5.5; star += 1) {
    if (star < reviewAvg && star < Math.floor(reviewAvg)) {
      stars.push(<i className="fas fa-star" />);
    } else if (star < reviewAvg && star > Math.floor(reviewAvg)) {
      stars.push(<i className="fas fa-star-half" />);
    } else {
      stars.push(<i className="far fa-star" />);
    }
  }

  // const cartStuff = [];
  // for (let cartIndex=0; cartIndex<cart.length; cartIndex++) {
  //   cart[cartIndex]
  // }

  if (currentZoom === 2 || currentZoom === 3) {
    return null;
  }

  console.log(cart, 'should be the cart');
  return (
    <>
      <span style={{ color: 'Dodgerblue' }}>
        {stars}
      </span>

      <h1>
        Name:
        {upper.name}
      </h1>

      <div>Category: {upper.category} </div>


      <div>
        current style:
        {currentStyle.name}
      </div>
      <div>Price: {upper.default_price}</div>
      <form onSubmit={(event) => { submitCart(event) }}>
        <label>
          Pick your favorite size:
          <select value={cats} onChange={(event) => { setCats((event.target.value)) }}>
            <option value="Select">Select One</option>
            {optsize}
          </select>
        </label>
        <br></br>
        <label>
          Quantity:
          <select value={quantity} onChange={(event) => { setQuantity((event.target.value)) }}>
            <option value="Select">Select One</option>
            {quant}
          </select>
        </label>

        <input type="submit" value="Add to Cart" />
      </form>

      {/* <form onSubmit={(event) => { console.log('submit') }}>
        <label>
          What is in your cart:
          <select value="Select" onChange={(event) => { console.log('not necessary') }}>
            <option value="Select">Select One</option>
          </select>
        </label>
        <input type="submit" value="Add to Cart" />
      </form> */}

      <button onClick={() => { deleteCart() }}>Clear Cart</button>
      <span style={{ "color": "Dodgerblue" }}>
        <i onClick={() => console.log('this should change favorites')} className="fas fa-star"></i>
      </span>
      <br />

    </>
  );
};

RightMenu.propTypes = {
  currentZoom: PropTypes.number.isRequired
};

export default RightMenu;

