import React from 'react';
import styled from 'styled-components';
import FooterMenu from './FooterMenu.jsx';

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #557174;
  align-items: center;
  padding: 10px;
  justify-content: center;
  color: #fff;
  font-size: 0.8em;
`;
const FooterMenusDiv = styled.div`
  display: flex;
`;

const MenuItems = {
  menu_1: {
    title: 'Our Team',
    items: [
      {
        name: 'jessemchung',
        url: 'https://github.com/jessemchung',
      },
      {
        name: 'juanVmejia',
        url: 'https://github.com/juanVmejia',
      },
      {
        name: 'nhu-mai-101',
        url: 'https://github.com/nhu-mai-101',
      },
      {
        name: 'WuksGG',
        url: 'https://github.com/WuksGG',
      }
    ]
  },
  menu_2: []
};

const Footer = () => (
  <FooterDiv>
    <FooterMenusDiv>
      <FooterMenu data={MenuItems.menu_1} />
    </FooterMenusDiv>
    <div>Copyright &copy; 2021 Team Classix. All rights reserved.</div>
  </FooterDiv>
);

export default Footer;