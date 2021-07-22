import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;
const MenuItemUl = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-start: 0.5em;
  margin-block-end: 0.2em;
`;
const MenuItemLiA = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 2px 10px;
  &:hover {
    background-color: #18373b;
    transition: 0.3s;
    border-radius: 3px;
  }
`;
const MenuItemLi = styled.li`
  margin: 2px;
`;
const MenuTitleDiv = styled.div`
  font-weight: 500;
  font-size: 1.2em;
  border-bottom: 1px solid #f7f7e8;
  padding: 0 15px 2px 15px;
`;

const FooterMenu = props => (
  <MenuContainer>
    <MenuTitleDiv>{props.data.title}</MenuTitleDiv>
    <MenuItemUl>
      {props.data.items.map((item, i) => {
        return <MenuItemLi key={i}><MenuItemLiA href={item.url}>{item.name}</MenuItemLiA></MenuItemLi>
      })}
    </MenuItemUl>
  </MenuContainer>
);

export default FooterMenu;