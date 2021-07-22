import React from 'react';
import styled from 'styled-components';
import FooterItem from './FooterItem';

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #557174;
  align-items: center;
  padding: 10px;
  justify-content: center;
  color: #fff;
  font-size: 0.8em;
  padding: 25px;
`;
const FooterMenusDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1180px;
`;
const CopyrightDiv = styled.div`
  margin-top:15px;
`;
const MenuItems = {
  menu_1: {
    items: [
      {
        name: 'Jesse Chung',
        url: 'https://github.com/jessemchung',
        target: '_blank',
      },
      {
        name: 'Juan Mejia',
        url: 'https://github.com/juanVmejia',
        target: '_blank',
      },
      {
        name: 'Nhu Mai',
        url: 'https://github.com/nhu-mai-101',
        target: '_blank',
      },
      {
        name: 'Michael Chan',
        url: 'https://github.com/WuksGG',
        target: '_blank',
      },
    ],
  },
  menu_2: {
    items: [
      {
        name: 'About Us',
        url: '#',
        target: '_blank',
      },
      {
        name: 'Contact Us',
        url: '#',
        target: '_blank',
      },
    ],
  },
};

const Footer = () => (
  <FooterDiv>
    <FooterMenusDiv>
      <FooterItem title="Our Team" data={MenuItems.menu_1} />
      <FooterItem title="Our Team" data={MenuItems.menu_1} />
      <FooterItem title="Our Team" data={MenuItems.menu_1} />
      <FooterItem title="Contact Us" />
    </FooterMenusDiv>
    <CopyrightDiv>Copyright &copy; 2021 Team Classix. All rights reserved.</CopyrightDiv>
  </FooterDiv>
);

export default Footer;
