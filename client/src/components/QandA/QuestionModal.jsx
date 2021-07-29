import React from 'react';
import styled from 'styled-components';

// const qModal = styled.div`
//   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 40px auto;
// `;

const QuestionModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="qModal">
      <div className="title">
        <h2>Ask Your Question</h2>
        <div className="subtitle">
          <h3>About the [product name here]</h3>
        </div>
      </div>
      <div className="question">
        <form>
          Your Question (1000 char)*
          <br />
          <input />
        </form>
      </div>
      <div className="nickname">
        <form>
          What is your nickname (60 char)*
          <br />
          <input placeholder="jackson11!" />
          <br />
          For privacy reasons, do not use your full name or email address.
        </form>
      </div>
      <div className="email">
        <form>
          Your e-mail*
          <br />
          <input placeholder="jackson@email.com" />
          <br />
          For authentication reasons, you will not be emailed.
        </form>
      </div>
      <button type="submit">Submit Question</button>
      <button type="submit" onClick={onClose}>Close</button>
    </div>
  );
};

export default QuestionModal;
