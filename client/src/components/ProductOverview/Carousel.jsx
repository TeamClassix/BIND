import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';

//should i only import axios when needed?
const Carousel = (props) => {
  const [carouselStartIndex, setCarouselStartIndex] = useState(0);

  const moveCarousel = (event, upOrDown) => {
    if (!((carouselStartIndex + upOrDown) < 0)) {
      setCarouselStartIndex(carouselStartIndex + upOrDown);
    }
  };

  const CarouWrapper = styled.div`
  width: 50%;
  height: auto;
  background-color: gray;
  position: relative;
`;

  const CarouImage = styled.img`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  opacity: ${(current) => ((current.value === props.currentIndex) ? "1" : "0.6")};
  border-style: solid;
  border-width: 1px;
  border-color: ${(current) => ((current.value === props.currentIndex) ? "yellow" : "gray")};
`;

  const CarouArrow = styled.span`
  cursor: pointer;
  position: absolute;
  top: 60%;
  width: auto;
  left: 0;
  color: blue;
  font-weight: bold;
  font-size: 20px;
  user-select: none;
  -webkit-user-select: none;
}
`;

  const CarouRightArrow = styled(CarouArrow)`
  top: 60%;
  opacity: 1;
  left: 91%;
  color: red;

`;

  //needs to be reset each time
  let counterForSlides = 0;

  const allPhotos = props.currentStyle.photos.map((eachPhoto, index) => {
    if (index < carouselStartIndex) {
      return null;
    }
    counterForSlides += 1;
    if (counterForSlides > 7) {
      return null;
    }
    return (
      (<CarouImage onClick={(event) => { props.changeIndex(event) }} className={`Carou ${index}`} value={index} width="82" height="auto" src={eachPhoto.thumbnail_url} alt="test" />));
  });

  return (
    <>
      <CarouWrapper>
        {allPhotos}
        <CarouArrow tabIndex="0" role="button" className="prev" onClick={(event) => (moveCarousel(event, -1))}>&#10094;</CarouArrow>

        <CarouRightArrow tabIndex="-1" role="button" className="prev" onClick={(event) => (moveCarousel(event, 1))}>&#10095;</CarouRightArrow>
      </CarouWrapper>


    </>
  );
};
export default Carousel;
