import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';

const RightMenu = (props) => {
  const [cats, setCats] = useState("Select");
  const [quantity, setQuantity] = useState("Select");
  const [reviewAvg, setReviewAvg] = useState(0);


  const iconStyle = styled.i`
  background-color: tomato;
  border: double;

`;


  useEffect(() => {
    axios.get(`/api/reviews/meta?product_id=${props.info}`, {
    })
      .then((response) => {
        console.log(response.data.data.ratings, 'should be all reviews');
        //get total value
        //get number of reviews
        let totalVal = 0;
        let totalRev = 0;
        for (var j in response.data.data.ratings) {
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
    setCats("Select");
    setQuantity("Select");
  }, [props.currentStyle]);

  let sizes = [];
  for (let sku in props.currentStyle.skus) {
    // console.log(props.currentStyle.skus[sku], 'skus');
    sizes.push(props.currentStyle.skus[sku]);
  }

  // these are where sizes are listed
  let optsize = sizes.map((siz) => {
    if (siz.quantity === 0) {
      return null;
    }
    return (<option value={JSON.stringify(siz)}>{siz.size}</option>);
  });

  console.log(optsize, 'opt');

  //builds the options value for the inventory number
  let quant = [];
  if (cats !== "Select") {
    let par = JSON.parse(cats);
    console.log(par, 'par');
    for (let i = 0; i < 16; i += 1) {
      if (cats.quantity !== 'Select' && i < (par.quantity + 1)) {
        quant.push(<option value={i}>{i}</option>);
      }
    }
  }

  let stars = [];
  for (let star = 0.5; star < 5.5; star += 1) {
    if (star < reviewAvg && star < Math.floor(reviewAvg)) {
      stars.push(<i className="fas fa-star"></i>);
    } else if (star < reviewAvg && star > Math.floor(reviewAvg)) {
      stars.push(<i className="fas fa-star-half"></i>);
    } else {
      stars.push(<i className="far fa-star"></i>);
    }
  }

  if (props.currentZoom === 2 || props.currentZoom === 3) {
    return null
  }

  return (
    <>
      <span style={{"color": "Dodgerblue"}}>
      {stars}
      </span>

      <h1>Name: {props.upper.name}</h1>

      <div>Category: {props.upper.category} </div>


      <div>current style: {props.currentStyle.name}</div>
      <div>Price: {props.upper.default_price}</div>
      <form onSubmit={() => { console.log('submitted') }}>
        <label>
          Pick your favorite flavor:
          <select value={cats} onChange={(event) => { setCats((event.target.value)) }}>
            <option value="Select">Select One</option>
            {optsize}
          </select>
        </label>
        <br></br>
        <label>
          Pick your favorite flavor:
          <select value={quantity} onChange={(event) => { setQuantity((event.target.value)) }}>
            <option value="Select">Select One</option>
            {quant}
          </select>
        </label>

        <input type="submit" value="Add to Cart" />
      </form>


      <span style={{"color": "Dodgerblue"}}>
        <i onClick={()=>console.log('this should change favorites')}class="fas fa-star"></i>
      </span>
      <br></br>

    </>
  );
};
export default RightMenu;


//category
//name
//price
//style buttons
//size
//quantity to purchase
//add to bag
//favorites