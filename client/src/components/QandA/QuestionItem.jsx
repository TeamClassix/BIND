import React, { useState } from 'react';
import AnswerModal from './AnswerModal';

const QuestionItem = ({ question, helpful }) => {
  const [answerShow, setAnswerShow] = useState(false);
  const [helpfulness, setHelpfulness] = useState(helpful);

  const handleAddAnswer = () => (setAnswerShow(true));
  const handleHelpfulness = () => setHelpfulness(helpfulness++);

  return (
    <div>
      <div className="question">
        <h4>{`Q: ${question}`}</h4>
      </div>
      <div>
        Helpful?
      </div>
      <div className="yes" onClick={handleHelpfulness}>
        {`Yes(${helpfulness}) | `}
      </div>
      <div onClick={handleAddAnswer}>Add Answer</div>
      <AnswerModal onClose={() => setAnswerShow(false)} show={answerShow} />
    </div>
  );
};

export default QuestionItem;
