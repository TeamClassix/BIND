import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';


const StyleSelect = (props) => {

  //should destructure the info from data
  const [allStyle, setAllStyle] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(null);


  useEffect(() => {
    axios.get(`/api/products/${props.info}/styles`, {
      params: {},
    })
      .then((response) => {
        console.log('soup', response.data.data);
        setAllStyle(response.data.data);
        console.log('here >>>>', response.data.data);
        setCurrentStyle(response.data.data.results[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);



  console.log(props, 'product id for style select');

  // var feats;
  // if (props.info.features) {
  //   feats = props.info.features.map((oneFeat) => {
  //     return (
  //       <>
  //         <li>{oneFeat.feature}</li>
  //         <li>{oneFeat.value}</li>
  //       </>
  //     )

  //   }
  //   );
  // } else {
  //   feats = null;
  // }
  if (allStyle === null) {
    return null;
  } else {

    //we need to map buttons

    // console.log(allStyle.results[0].photos[0].thumbnail_url, 'allStyle');

    console.log(currentStyle, 'should be the current style');

    return (
      <>
        <div>styledile</div>
        <img src={allStyle.results[0].photos[0].thumbnail_url} alt="test" />

        <Carousel />

      </>
    )

  }



}



export default StyleSelect;
