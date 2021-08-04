import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #9DAD7F;
  color: #fff;
  max-height: 60px;
  min-height: 60px;
  padding: 0 45px;
`;
const Logo = styled.div`
  font-weight: 800;
  font-size: 1.5em;
  border: 2px solid #fff;
  padding: 0 5px;
  text-transform: uppercase;
  &a:visited {
    color: #fff;
  }
`;
const SearchContainer = styled.div`
  display: flex;
`;
const SearchInput = styled.input`
  background-color: transparent;
  border: 0px;
  border-bottom: 2px solid #fff;
  color: #fff;
  text-align: center;
  &:focus-visible {
    outline: 0;
  };
  &::placeholder {
    color: #e1e1e1;
  };
`;
const SearchSubmit = styled.div`
  background-image: url(/images/search.png);
  height: 20px;
  width: 20px;
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 10px;
`;
const StyledLink = styled(Link)`
  &:visited {
    color: #fff;
  }
  color: #fff;
  text-decoration: none;
`;

const Header = () => (
  <HeaderDiv>
    <Logo className="logo"><StyledLink to="/">Bind</StyledLink></Logo>
    <SearchContainer className="search">
      <SearchInput className="search-input" placeholder="Search" />
      <SearchSubmit className="search-submit" />
    </SearchContainer>
  </HeaderDiv>
);

export default Header;
