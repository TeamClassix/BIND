import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #557174;
  color: #fff;
  height: 90px;
  padding: 0 45px;
`;
const Logo = styled.div`
  font-weight: 800;
  font-variant: small-caps;
  font-size: 1.5em;
  text-decoration: underline;
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

const Header = props => (
  <HeaderDiv>
    <Logo className="logo">Team Classix</Logo>
    <SearchContainer className="search">
      <SearchInput className="search-input" placeholder="Search" />
      <SearchSubmit className="search-submit" />
    </SearchContainer>
  </HeaderDiv>
);

export default Header;