import React from 'react';
import QuestionItem from './QuestionItem';
import AnswerList from './AnswerList';

const QandAItem = ({ questions, productName }) => (
  <div>
    <QuestionItem id={questions.question_id} question={questions.question_body} helpful={questions.question_helpfulness} productName={productName} />
    <h4>A:</h4>
    <AnswerList questionId={questions.question_id} />
  </div>
);

export default QandAItem;
