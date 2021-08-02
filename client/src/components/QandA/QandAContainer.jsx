import React from 'react';
import QandAItem from './QandAItem';

const QandAContainer = ({ questions, productName }) => (
  <div>
    {questions.map((question) => (
      <QandAItem questions={question} productName={productName} />
    ))}
  </div>
);

export default QandAContainer;
