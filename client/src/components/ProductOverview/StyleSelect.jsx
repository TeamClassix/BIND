import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';

const StyleSelect = (props) => {
  // should destructure the info from data
  const [allStyle, setAllStyle] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(null);

  useEffect(() => {
    axios.get('/dees', {
      params: {
        ID: props.info,
      },
    })
      .then((response) => {
        console.log('we are in line 21');
        console.timeLog('test');
        console.log(response.data, 'the styles');
        setCurrentStyle(response.data.results[0]);
        return response;
      })
      .then((response)=>{
        setAllStyle(response.data);

        console.log('next point');
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (allStyle === null) {
    console.log('line 50 styleSelect');
    console.timeLog('test');
    return null;
  }
  // we need to map buttons

  // console.log(allStyle.results[0].photos[0].thumbnail_url, 'allStyle');

  // console.log(currentStyle, 'should be the current style');


  const styleButtons = allStyle.results.map((eachStyle) => { return (<div>{eachStyle.name}</div>) });

  return (
    <>
      {console.log('we have hit line 62')}
      {console.timeLog('test')}
      <div>styledile</div>
      <img src={allStyle.results[0].photos[0].thumbnail_url} alt="test" />
      {styleButtons}
      <Carousel currentStyle={currentStyle}/>

    </>
  );
};

export default StyleSelect;
