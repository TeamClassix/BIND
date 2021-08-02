import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerItem from './AnswerItem';

const AnswerList = ( {questionId} ) => {
  const [answers, setAnswers] = useState([]);

  const getAnswers = () => (
    axios.get(`/api/qa/questions/${questionId}/answers`, {
      params: {
        product_id: questionId,
      },
    })
      .then((response) => {
        setAnswers(response.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
  );

  useEffect(getAnswers, []);

  return (
    <div>
      {answers.map((answer) => (
        // eslint-disable-next-line max-len
        <AnswerItem id={answer.answer_id} name={answer.answerer_name} body={answer.body} date={answer.date} helpful={answer.helpfulness} />
      ))}
    </div>
  );
};

export default AnswerList;
