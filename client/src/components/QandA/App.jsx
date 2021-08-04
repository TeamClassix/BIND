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
  const [productName, setProductName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const getQuestions = () => (
    axios.get('/api/qa/questions', {
      params: {
        product_id: productId,
      },
    })
      .then((response) => {
        setQuestions(response.data.data.results);
      })
      .catch((error) => (
        error
      ))
  );

  const getProductInfo = () => {
    axios.get(`/api/products/${productId}`, {
      params: {
        product_id: productId,
      },
    })
      .then((response) => {
        setProductName(response.data.data.name);
      });
  };

  useEffect(getQuestions, []);
  useEffect(getProductInfo, []);

  const searchQuestions = () => {
    setSearchResults([]);
    const results = new Set();
    questions.forEach((question) => {
      if (question.question_body.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.add(question);
      }
    });
    setSearchResults(Array.from(results));
  };

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.length >= 3) {
      searchQuestions();
    } else if (event.target.value.length < 3) {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <h1>Questions and Answers</h1>
      <SearchBar searchTerm={handleSearchTerm} searchQuestions={searchQuestions} />
      <QandAContainer questions={searchResults.length ? searchResults : questions} productName={productName} />
      <MoreQuestions />
      <button type="submit" onClick={() => setQuestionShow(true)}>Add A Question</button>
      <QuestionModal onClose={() => setQuestionShow(false)} show={questionShow} productName={productName} productId={productId} />
    </div>
  );
};

export default App;
