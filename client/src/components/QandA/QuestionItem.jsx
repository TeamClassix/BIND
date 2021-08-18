/* eslint-disable max-len */
import React, { useState } from 'react';
import AnswerModal from './AnswerModal';
import axios from 'axios';
import styled from 'styled-components';

const Interactions = styled.div`
  display: flex;
  flex-direction: row;
  font-size: small;
  text-align: right;
  position: relative;
  left: 470px;
  top: -7px;
  text-transform: uppercase;
`;

const Click = styled.div`
  cursor: pointer;
  &:hover{
    text-decoration: underline
  }
`;

const Question = styled.div`
  position: relative;
  top: 10px;
  font-size: 1em;
  font-weight: bolder;
  text-transform: uppercase;
`;

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
      <Question className="question">
        {`Q:   ${question}`}
      </Question>
      <Interactions>
        <div className="helpful">
          Helpful?&nbsp;
        </div>
        <Click className="yes" onClick={incrementHelpfulness}>
          {`Yes(${count}) | `}
        </Click>
        <Click onClick={handleAddAnswer}>&nbsp;Add Answer |&nbsp;</Click>
        <Click className="Report" onClick={handleReport} >
          {report ? 'Reported' : 'Report'}
        </Click>
        <AnswerModal onClose={() => setAnswerShow(false)} show={answerShow} questionId={id} question={question} productName={productName} />
      </Interactions>
    </div>
  );
};

export default QuestionItem;
