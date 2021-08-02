import React from 'react';

const MoreQuestions = ({ noQuestions }) => (
  <div>
    {noQuestions ? <button type="submit">More Questions</button> : null}
  </div>
);

export default MoreQuestions;
