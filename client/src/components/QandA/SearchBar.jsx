import React from 'react';
// import styled from 'styled-components';

// const Button = styled.button`
//   background: black,
//   color: red
// `;

const SearchBar = ({ searchTerm }) => (
  <div>
        <form>
          <input placeholder="Have a question? Search for answers…" onChange={searchTerm} />
          <button type="submit">Search</button>
        </form>
  </div>
);

export default SearchBar;
