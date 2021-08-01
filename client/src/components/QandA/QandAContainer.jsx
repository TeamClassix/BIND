import React from 'react';
import QandAItem from './QandAItem';

const QandAContainer = ({ questions }) => (
  <div>
    {questions.map((question) => (
      <QandAItem questions={question} answers={question.answers} />
    ))}
  </div>
);

export default QandAContainer;
