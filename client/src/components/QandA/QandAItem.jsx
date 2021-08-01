import React from 'react';
import QuestionItem from './QuestionItem';
import AnswerItem from './AnswerItem';

const QandAItem = ({ questions, answers }) => (
  <div>
    <QuestionItem question={questions.question_body} helpful={questions.question_helpfulness} />
    <AnswerItem />
  </div>
);

export default QandAItem;
