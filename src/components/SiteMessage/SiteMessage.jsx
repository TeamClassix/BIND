import React from 'react';
import styled from 'styled-components';

const MessageDiv = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 0.7em;
  padding: 10px;
`;

const SiteMessage = () => (
  <MessageDiv>
    <em>Site-wide announcement message!</em>
    {' - Sale / Discount '}
    <strong>offer</strong>
    {' - '}
    <u>New Product Highlight</u>
  </MessageDiv>
);

export default SiteMessage;
