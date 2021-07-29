import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Carousel = (props) => {
  console.log(props.currentStyle.photos, 'product id for style select');
  console.dir(props.currentStyle);
  const allPhotos = props.currentStyle.photos.map((eachPhoto) => (<img width="auto" height="150" src={eachPhoto.thumbnail_url} alt="test" />));

  return (
    <>
      <div>Carousel</div>
      {allPhotos}
    </>
  );
};
export default Carousel;
