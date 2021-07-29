import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';


const BigPicture = (props) => {
  const [ratio, setRatio] = useState({
    x: (0),
    y: (0),
    actHeight: (0),
    actWidth: (0),
    tinyImageHeight: 1,
    tinyImageWidth: 1,
  });

  let xZoom = ((100 * ratio.x / ratio.tinyImageWidth)) + '';
  let yZoom = ((100 * ratio.y / ratio.tinyImageHeight)) + '';
  console.log(xZoom, yZoom, 'hello');

  const ZoomImage = styled.img`
  object-position: ${xZoom}% ${yZoom}%;
  width: 300px;
  object-fit: none;
  `;

  const Sty = styled.img`
  ${something => props.currentZoom === 1 && css`
  cursor: zoom-in;
  width:100%;
  `
    }
${something => props.currentZoom === 2 && css`
  cursor: zoom-in;
  width:100%;
  display: block;
  margin: 0 auto;
  `
    }
  `;

  const RightArrow = styled.span`
  color: red;
right:0%;

  `;

  const Container = styled.div`
  position: relative;
  ${something => props.currentZoom === 1 && css`
  cursor: zoom-in;
  width:50%;
  `
    }

${something => props.currentZoom === 2 && css`
cursor: zoom-in;
width:100%;
`
    }
`;




  const fiddle = new Image();
  // fiddle.onload = function() {
  //   alert(this.width + 'x' + this.height);
  // }
  fiddle.src = props.imgURL;
  // document.body.appendChild(fiddle);

  // background: ${props => props.primary ? "palevioletred" : "white"};
  let lense = [];
  //this is creating an error
  if (ratio !== null) {

    // object-position: ${(ratio.actWidth * (ratio.x / ratio.tinyImageWidth))+''}px ${(ratio.actHeight * (ratio.y / ratio.tinyImageHeight))+''}px;



    console.log(ratio, (ratio.actHeight * (ratio.y / ratio.tinyImageHeight)), 'the raio');
  }
  return (
    <>
      <Container>

        <Sty onClick={() => { props.zoomClick() }} id="BigPicture" src={props.imgURL} alt="Large" />
        <br />
        <span tabIndex="0" role="button" className="prev" onClick={() => (console.log('previous button clicked'))}>&#10094;</span>
        <RightArrow tabIndex="-1" role="button" className="next" onClick={(event) => { props.increment(event, 1); }}>&#10095;</RightArrow>

      </Container>
      <div>
        <img id="myimage" src={props.imgURL} width="300" onClick={(event) => {
          setRatio({
            x: (event.pageX - event.target.offsetLeft),
            y: (event.pageY - event.target.offsetTop),
            actHeight: (event.target.attributes[1].ownerElement.naturalHeight),
            actWidth: (event.target.attributes[1].ownerElement.naturalWidth),
            tinyImageHeight: event.target.clientHeight,
            tinyImageWidth: event.target.clientWidth
          })
        }} />

      </div>
      <ZoomImage src={props.imgURL} />

    </>
  );
};

BigPicture.propTypes = {
  currentZoom: PropTypes.number.isRequired
};

export default BigPicture;

//perhaps get a div element by id (or perhaps an empty img with a specific size) and then append the image file to it.