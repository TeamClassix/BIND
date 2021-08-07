/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import QandAContainer from './QandAContainer';
import MoreQuestions from './MoreQuestions';
import QuestionModal from './QuestionModal';

const Container = styled.div`
  width: 700px;
  margin: auto;
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 1em;
  width: 200px;
  margin: 0px 10px;
  cursor: pointer;
  background-color: #C7CFB7;
  color: #525252;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

const App = ({ productId }) => {
  const [questions, setQuestions] = useState([]);
  const [questionShow, setQuestionShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [productName, setProductName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [counter, setCounter] = useState(2);
  const [noQuestions, setNoQuestions] = useState(false);

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

  const incrementQuestionCount = () => {
    let newCounter;
    if (counter < (questions.length - 2)) {
      newCounter = counter + 2;
    } else {
      newCounter = questions.length;
      setNoQuestions(true);
    }
    setCounter(newCounter);
  };

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
    <Container>
      <h1>Questions and Answers</h1>
      <SearchBar searchTerm={handleSearchTerm} searchQuestions={searchQuestions} questions={questions} />
      <QandAContainer questions={searchResults.length ? searchResults : questions} productName={productName} counter={counter} />
      <Buttons>
        <MoreQuestions noQuestions={noQuestions} incrementQuestionCount={incrementQuestionCount} />
        <Button type="submit" onClick={() => setQuestionShow(true)}>ADD A QUESTION + </Button>
      </Buttons>
      <QuestionModal onClose={() => setQuestionShow(false)} show={questionShow} productName={productName} productId={productId} />
    </Container>
  );
};

export default App;
