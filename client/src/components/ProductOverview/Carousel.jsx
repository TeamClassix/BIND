import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Carousel = (props) => {

  //should destructure the info from data
  const [allStyle, setAllStyle] = useState(null);


  // useEffect(() => {
  //   axios.get('/dees', {
  //     params: {
  //       ID: props.info,
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response.data);
  //       setAllStyle(response.data);

  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);



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

  return (
    <>
      <div>Carousel</div>

    </>
  )

}







export default Carousel;
