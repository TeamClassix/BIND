/* eslint-disable object-shorthand */
import React, { useState } from 'react';
import axios from 'axios';

const QuestionModal = ({ show, onClose, productName, productIdNumber }) => {
  const [answerBody, setAnswerBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const submitQuestion = () => (
    axios.post('/api/qa/questions', {
      params: {
        body: answerBody,
        name: name,
        email: email,
        product_id: productIdNumber,
      },
    })
  );

  const handleQuestionBody = (event) => {
    setAnswerBody(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="qModal">
      <div className="title">
        <h2>Ask Your Question</h2>
        <div className="subtitle">
          <h3>About the [{productName}]</h3>
        </div>
      </div>
      <div className="question">
        <form>
          Your Question (1000 char)*
          <br />
          <input onChange={handleQuestionBody} />
        </form>
      </div>
      <div className="nickname">
        <form>
          What is your nickname (60 char)*
          <br />
          <input placeholder="jackson11!" onChange={handleName} />
          <br />
          For privacy reasons, do not use your full name or email address.
        </form>
      </div>
      <div className="email">
        <form>
          Your e-mail*
          <br />
          <input placeholder="jackson@email.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={handleEmail} />
          <br />
          For authentication reasons, you will not be emailed.
        </form>
      </div>
      <button type="submit" onClick={submitQuestion}>Submit Question</button>
      <button type="submit" onClick={onClose}>Close</button>
    </div>
  );
};

export default QuestionModal;
