import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
  FacebookIcon,
  PinterestIcon,
  TwitterIcon,
} from "react-share";
import ZoomPlayground from './ZoomPlayground.jsx';


const RightArrow = styled.span`
color: red;
right:0%;

`;

const BigPicture = (props) => {

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

  if (props.currentZoom === 3) {
    return (
      <>
        <ZoomPlayground imgURL={props.imgURL} zoomClick={props.zoomClick} />
      </>
    );
  }
  return (
    <>
      <FacebookShareButton
        url="http://localhost:5000/someslug/"
        quote="Hello"
        className="share-button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        url="http://localhost:5000/someslug/"
        title="Twitter"
        className="share-button"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <Container>

        <Sty onClick={() => { props.zoomClick() }} id="BigPicture" src={props.imgURL} alt="Large" />
        <br />
        <span tabIndex="0" role="button" className="prev" onClick={(event) => { props.increment(event, -1); }}>&#10094;</span>
        <RightArrow tabIndex="-1" role="button" className="next" onClick={(event) => { props.increment(event, 1); }}>&#10095;</RightArrow>

      </Container>
    </>
  );
};

BigPicture.propTypes = {
  currentZoom: PropTypes.number.isRequired
};

export default BigPicture;

//perhaps get a div element by id (or perhaps an empty img with a specific size) and then append the image file to it.