import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import Carousel from './Carousel.jsx';
import BigPicture from './BigPicture.jsx';
import RightMenu from './RightMenu.jsx';

const OverallDiv = styled.div`
`;

const Dive = styled.div`
float:right;
position: relative;
border: 5px solid black;
`;

const StyleButton = styled.img`
width: 75px;
height: 75px;
object-fit: cover;
border: 5px solid black;
border-radius:50%;
`;

const StyleSelect = (props) => {
  // should destructure the info from data
  const [allStyle, setAllStyle] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(null);
  const [currentZoom, setCurrentZoom] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get(`/api/products/${props.info}/styles`, {
      params: {},
    })
      .then((response) => {
        setCurrentStyle(response.data.data.results[0]);
        return response;
      })
      .then((response) => {
        // setAllStyle(response.data);
        setAllStyle(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [props.info]);

  // event handler for clicking to change the current style
  const currentStyleChangeButton = (event) => {
    // console.log(event.target.attributes[0].value);
    const newObject = JSON.parse(event.target.attributes[0].value);
    setCurrentIndex(0);
    setCurrentStyle(newObject);
  };

  const zoomClick = (event) => {
    if (currentZoom === 3) {
      setCurrentZoom(1);
    } else {
      setCurrentZoom(currentZoom + 1);
    }
  };

  const increment = (event, number) => {
    setCurrentIndex(currentIndex + number);
    //need if for if too big
  };

  const changeIndex = (event, number) => {
    const newIndex = parseInt(event.target.attributes[1].value, 10);
    setCurrentIndex(newIndex);
  };

  if (allStyle === null) {
    //timelogs can be helpful
    // console.timeLog('null allstyle');
    // console.log('line 50 styleSelect');
    return null;
  }

  let styleButtons;
  if (currentZoom === 2 || currentZoom === 3) {
    styleButtons = null;
  } else {
    styleButtons = allStyle.results.map((eachStyle, index) => {
      if (((index + 1) % 4) === 0) {
        return (
          <>
            <StyleButton value={JSON.stringify(eachStyle)} onClick={(event) => { currentStyleChangeButton(event) }} className="styleButton" src={eachStyle.photos[0].thumbnail_url} alt="Large" />
            <br />

          </>
        );
      }
      return (
        <>
          <StyleButton value={JSON.stringify(eachStyle)} onClick={(event) => { currentStyleChangeButton(event) }} className="styleButton" src={eachStyle.photos[0].thumbnail_url} alt="Large" />
        </>
      );
    });
  }

  //needs to not render the rightmenu
  return (
    <OverallDiv className="rightbar">
      <Dive>
        <RightMenu currentZoom={currentZoom} info={props.info} currentStyle={currentStyle} allStyle={allStyle} upper={props.productInfo} />

        {styleButtons}
      </Dive>
      <BigPicture
        imgURL={currentStyle.photos[currentIndex].url}
        currentZoom={currentZoom}
        zoomClick={zoomClick}
        increment={increment}
      />
      <Carousel currentIndex={currentIndex} currentStyle={currentStyle} changeIndex={changeIndex} />

    </OverallDiv>
  );
};

export default StyleSelect;

// const Butt = styled.button`
