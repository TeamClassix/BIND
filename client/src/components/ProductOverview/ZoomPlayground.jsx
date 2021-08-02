import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';


const ZoomPlayground = (props) => {
  console.log(props.imgURL, 'should be url')

  return (
    <>
      <div>Zoom Playground</div>
      <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200} >
        <TransformComponent>
          <img
            src={props.imgURL}
            style={{ width: "100%" }}
            alt="zoomtest1"
          />
        </TransformComponent>
      </TransformWrapper>



      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="tools">
              <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button>
              <button onClick={() => resetTransform()}>x</button>
            </div>
            <TransformComponent>
              <img src={props.imgURL} alt="test" />
              <div>Zoom with buttons</div>
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>

    </>
  );
};


export default ZoomPlayground;

//perhaps get a div element by id (or perhaps an empty img with a specific size) and then append the image file to it.