/* eslint-disable max-len */
import React, { useState } from 'react';
import AnswerModal from './AnswerModal';
import axios from 'axios';

const QuestionItem = ({ id, question, helpful, productName }) => {
  const [answerShow, setAnswerShow] = useState(false);
  const [helpfulness, setHelpfulness] = useState(helpful);
  const [count, setCount] = useState(helpfulness);
  const [report, setReport] = useState(false);

  let helpfulCount = helpfulness;

  const incrementHelpfulness = () => {
    if (helpfulCount === helpfulness) {
      setCount(helpfulCount += 1);
      axios.put(`/api/qa/questions/${id}/helpful`, {
        params: {
          question_id: id,
        },
      });
    }
  };

  const handleReport = () => {
    setReport(true);
    axios.put(`/api/qa/questions/${id}/report`, {
      params: {
        question_id: id,
      },
    });
  };

  const handleAddAnswer = () => (setAnswerShow(true));
  return (
    <div>
      <div className="question">
        <h4>{`Q: ${question}`}</h4>
      </div>
      <div className="helpful">
        Helpful?
      </div>
      <div className="yes" onClick={incrementHelpfulness}>
        {`Yes(${count}) | `}
      </div>
      <div onClick={handleAddAnswer}>Add Answer</div>
      <div className="Report" onClick={handleReport} >
        {report ? 'Reported' : 'Report'}
      </div>
      <AnswerModal onClose={() => setAnswerShow(false)} show={answerShow} questionId={id} question={question} productName={productName} />
    </div>
  );
};

export default QuestionItem;
