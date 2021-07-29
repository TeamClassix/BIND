import React from 'react';
// import styled from 'styled-components';

// const aModal = styled.div`
//   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 40px auto;
// `;

const AnswerModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="answerModal">
      <div className="title">
        <h2>Submit Your Answer</h2>
        <div className="subtitle">
          <h3>[Product Name]: [Question Body]</h3>
        </div>
      </div>
      <div className="answer">
        <form>
          Your Answer (1000 char)*
          <br />
          <input />
        </form>
      </div>
      <div className="nickname">
        <form>
          What is your nickname (60 char)*
          <br />
          <input placeholder="jack543!!" />
          <br />
          For privacy reasons, do not use your full name or email address.
        </form>
      </div>
      <div className="email">
        <form>
          Your e-mail*
          <br />
          <input placeholder="jack@email.com" />
          <br />
          For authentication reasons, you will not be emailed.
        </form>
      </div>
      <button type="submit">Upload Your Photos</button>
      <br />
      <button type="submit">Submit Answer</button>
      <button type="submit" onClick={onClose}>Close</button>
    </div>
  );
};

export default AnswerModal;
