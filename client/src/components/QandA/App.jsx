/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import QandAContainer from './QandAContainer';
import MoreQuestions from './MoreQuestions';
import QuestionModal from './QuestionModal';

const App = ({ productId }) => {
  const [questions, setQuestions] = useState([]);
  const [questionShow, setQuestionShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searching, setSearching] = useState(false);
  const [noQuestions, setNoQuestions] = useState(false);
  const [productName, setProductName] = useState('');
  const [productIdNumber, setProductIdNumber] = useState('');

  const handleNoQuestions = () => {
    if (questions.length === 0) {
      setNoQuestions(true);
    }
  };

  const getQuestions = () => (
    axios.get('/api/qa/questions', {
      params: {
        product_id: productId,
      },
    })
      .then((response) => {
        setQuestions(response.data.data.results);
      })
      .then(handleNoQuestions)
      .catch((error) => {
        console.log(error);
      })
  );

  const getProductInfo = () => {
    axios.get(`/api/products/${productId}`, {
      params: {
        product_id: productId,
      },
    })
      .then((response) => {
        setProductName(response.data.data.name);
        setProductIdNumber(response.data.data.id);
      });
  };

  useEffect(getQuestions, []);
  useEffect(getProductInfo, []);

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.length >= 3) {
      setSearching(true);
    }
  };

  const searchQuestions = () => {
    //if searching is true
    //map over array of questions
    //check if question includes search term,
    //if yes, push to new array and pass down to render
  };

  return (
    <div>
      <h1>Questions and Answers</h1>
      <SearchBar searchTerm={handleSearchTerm} />
      <QandAContainer questions={questions} productName={productName}/>
      <MoreQuestions noQuestions={noQuestions} />
      <button type="submit" onClick={() => setQuestionShow(true)}>Add A Question</button>
      <QuestionModal onClose={() => setQuestionShow(false)} show={questionShow} productName={productName} productIdNumber={productIdNumber} />
    </div>
  );
};

export default App;
