/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import QuestionItem from './QuestionItem';
import AnswerList from './AnswerList';

const Answer = styled.div`
  display: flex;
  postition: relative;
  left: 21px;
  top: -200px;
  font-size: 1em;
  font-weight: bolder;
`;

const QandAItem = ({ questions, productName }) => (
  <div>
    <QuestionItem id={questions.question_id} question={questions.question_body} helpful={questions.question_helpfulness} productName={productName} />
    <Answer>A:</Answer>
    <AnswerList questionId={questions.question_id} />
  </div>
);

export default QandAItem;
