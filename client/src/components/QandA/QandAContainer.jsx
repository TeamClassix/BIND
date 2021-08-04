import React from 'react';
import QandAItem from './QandAItem';

const QandAContainer = ({ questions, productName }) => {
  const sortedQuestions = questions;
  sortedQuestions.sort((a, b) => (a.helpfulness > b.helpfulness));

  return (
    <div>
      {sortedQuestions.map((question) => (
        <QandAItem questions={question} productName={productName} />
      ))}
    </div>
  );
};

export default QandAContainer;
