import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import QandAContainer from './QandAContainer';
import QuestionModal from './QuestionModal';

const App = ({ productId }) => {
  const [questions, setQuestions] = useState([]);
  const [questionShow, setQuestionShow] = useState(false);

  const getQuestions = () => (
    axios.get('/api/qa/questions', {
      params: {
        product_id: productId,
      },
    })
      .then((response) => {
        setQuestions(response.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
  );

  useEffect(getQuestions, []);

  return (
    <div>
      <h1>Questions and Answers</h1>
      <SearchBar />
      <QandAContainer questions={questions} />
      <button type="submit">More Questions</button>
      <button type="submit" onClick={() => setQuestionShow(true)}>Add A Question</button>
      <QuestionModal onClose={() => setQuestionShow(false)} show={questionShow} />
    </div>
  );
};

export default App;
