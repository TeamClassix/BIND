import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React from 'react';
const ZoomPlayground = (props) => (
  <>
    <div>Zoom Playground</div>

    <TransformWrapper
      initialScale={1}
      initialPositionX={0}
      initialPositionY={0}
    >
      {({
        zoomIn, zoomOut, resetTransform, ...rest
      }) => (
        <>
          <div className="tools">
            <button onClick={() => zoomIn()}>Zoom In</button>
            <button onClick={() => zoomOut()}>Zoom Out</button>
            <button onClick={() => resetTransform()}>Original Size</button>
            <button onClick={() => { props.zoomClick() }} >Go Back</button>

          </div>
          <TransformComponent>
            <img
              src={props.imgURL}
              style={{ width: "100%" }}
              alt="zoomtest1"
            />
            <div>Zoom with buttons</div>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>

  </>
);

export default ZoomPlayground;