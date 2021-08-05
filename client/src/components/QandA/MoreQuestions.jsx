import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 2px solid white;
  padding: 1em;
  width: 200px;
  cursor: pointer;
  background-color: #C7CFB7;
  color: #525252;
`;

const MoreQuestions = ({ noQuestions, incrementQuestionCount }) => (
  <div>
    {noQuestions ? null : <Button type="submit" onClick={incrementQuestionCount}>MORE QUESTIONS</Button>}
  </div>

);

export default MoreQuestions;
