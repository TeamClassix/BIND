import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FooterMenu = ({ title, data }) => (
  <MenuContainer>
    <MenuTitleDiv>{title}</MenuTitleDiv>
    <MenuItemUl>
      {data && data.items && data.items.map((item) => (
        <MenuItemLi key={item.name}>
          <MenuItemLiA target={item.target} href={item.url}>{item.name}</MenuItemLiA>
        </MenuItemLi>
      ))}
    </MenuItemUl>
  </MenuContainer>
);

FooterMenu.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      target: PropTypes.string,
    })),
  }),
};
FooterMenu.defaultProps = {
  data: {
    items: null,
  },
};

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export default FooterMenu;
