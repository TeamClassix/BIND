import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';


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

  // background: ${props => props.primary ? "palevioletred" : "white"};


  return (
    <Container>

      <Sty onClick={() => { props.zoomClick() }} id="BigPicture" src={props.imgURL} alt="Large" />
      <br />
      <span tabIndex="0" role="button" className="prev" onClick={() => (console.log('previous button clicked'))}>&#10094;</span>
      <RightArrow tabIndex="-1" role="button" className="next" onClick={(event) => { props.increment(event, 1); }}>&#10095;</RightArrow>

    </Container>
  );
};

BigPicture.propTypes = {
  currentZoom: PropTypes.number.isRequired
};


export default BigPicture;




