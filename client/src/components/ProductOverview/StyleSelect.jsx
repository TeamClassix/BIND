import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import BigPicture from './BigPicture.jsx';
import styled, { css } from 'styled-components';


const StyleSelect = (props) => {
  // should destructure the info from data
  const [allStyle, setAllStyle] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(null);
  const [currentZoom, setCurrentZoom] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  //working

  console.log('in styleselect');
  const Dive = styled.div`
  right: 500px;
  position: absolute;
`;

  useEffect(() => {
    axios.get(`/api/products/${props.info}/styles`, {
      params: {},
    })
      .then((response) => {
        // console.log('we are in line 21');
        // console.timeLog('test');
        // console.log(response.data, 'the styles');
        // setCurrentStyle(response.data.results[0]);
        // setCurrentIndex(0);
        setCurrentStyle(response.data.data.results[0]);

        return response;
      })
      .then((response) => {
        // setAllStyle(response.data);
        console.log('next point');
        console.log('soup', response.data.data);
        setAllStyle(response.data.data);
        console.log('here >>>>', response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  const currentStyleChangeButton = (event) => {
    // console.log(event.target.attributes[0].value);
    let newObject = JSON.parse(event.target.attributes[0].value);
    console.log(newObject);
    setCurrentStyle(newObject);
  };

  const zoomClick = (event) => {
    console.log(currentZoom, 'this is the current zoom');
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


  if (allStyle === null) {
    console.timeLog('null allstyle');

    console.log('line 50 styleSelect');

    return null;
  }


  let styleButtons;
  if (currentZoom === 2) {
    styleButtons = null;
  } else {
    styleButtons = allStyle.results.map((eachStyle) => {
      return (
        <>
          <button value={JSON.stringify(eachStyle)} onClick={(event) => { currentStyleChangeButton(event) }} className="styleButton"> {eachStyle.name} </button>
          <br></br>
        </>
      )
    });
  }


  return (
    <div className="rightbar">
      <Dive>

        {styleButtons}
      </Dive>

      {console.log('we have hit line 62')}
      {console.timeLog('test')}
      <div>styledile </div>
      <BigPicture imgURL={currentStyle.photos[currentIndex].url} currentZoom={currentZoom} zoomClick={zoomClick} increment={increment} />
      <Carousel currentStyle={currentStyle} />

      <Dive>

        {styleButtons}
      </Dive>


    </div>
  );
};

export default StyleSelect;

// const Butt = styled.button`
