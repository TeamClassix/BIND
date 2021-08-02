import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnswerItem = ({ id, name, body, date, helpful }) => {
  const [helpfulness, setHelpfulness] = useState(helpful);
  const [count, setCount] = useState(helpfulness);
  const [report, setReport] = useState(false);
  const [seller, setSeller] = useState(false);

  let helpfulCount = helpfulness;
  const newDate = date.substring(0, 10);

  const incrementHelpfulness = () => {
    if (helpfulCount === helpfulness) {
      setCount(helpfulCount += 1);
      axios.put(`/api/qa/answers/${id}/helpful`, {
        params: {
          answer_id: id,
        },
      });
    }
  };

  const handleReport = () => {
    setReport(true);
    axios.put(`/api/qa/answers/${id}/report`, {
      params: {
        answer_id: id,
      },
    });
  };

  // const handleSeller = () => {
  //   if (name === 'seller') {
  //     setSeller(true);
  //   }
  // };

  // useEffect(handleSeller, []);

  return (
    <div>
      <div className="body">
        {body}
      </div>
      <div className="name">
        {`by: ${name}`}
        {/* {seller ? <b>{name}</b> : { name }} */}
      </div>
      <div className="date">
        {`, ${newDate} |`}
      </div>
      <div className="helpful">
        Helpful?
      </div>
      <div className="Yes" onClick={incrementHelpfulness} >
        {`Yes (${count})`}
      </div>
      <div className="Report" onClick={handleReport} >
        {report ? 'Reported' : 'Report'}
      </div>
    </div>
  );
};

export default AnswerItem;
