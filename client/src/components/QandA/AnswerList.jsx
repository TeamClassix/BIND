import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerItem from './AnswerItem';

const AnswerList = ( {questionId} ) => {
  const [answers, setAnswers] = useState([]);
  // const [moreAnswers, setMoreAnswers] = useState(null);

  const getAnswers = () => (
    axios.get(`/api/qa/questions/${questionId}/answers`, {
      params: {
        product_id: questionId,
      },
    })
      .then((response) => {
        setAnswers(response.data.data.results);
      })
      .catch((error) => (
        error
      ))
  );

  useEffect(getAnswers, []);

  const sortedAnswers = answers;
  sortedAnswers.sort((a, b) => (a.helpfulness > b.helpfulness));

  // if (sortedAnswers.length > 2) {
  //   setMoreAnswers(true);
  // }

  // let limitAnswers = [];
  // if (moreAnswers) {
  //   limitAnswers = sortedAnswers.slice(0, 2);
  // } else {
  //   limitAnswers = sortedAnswers;
  // }

  return (
    <div>
      {sortedAnswers.map((answer) => (
        // eslint-disable-next-line max-len
        <AnswerItem id={answer.answer_id} name={answer.answerer_name} body={answer.body} date={answer.date} helpful={answer.helpfulness} photos={answer.photos} />
      ))}
    </div>
  );
};

export default AnswerList;
