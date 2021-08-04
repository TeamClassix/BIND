import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const AnswerItem = ({ id, name, body, date, helpful, photos }) => {
  const [helpfulness, setHelpfulness] = useState(helpful);
  const [count, setCount] = useState(helpfulness);
  const [report, setReport] = useState(false);

  let helpfulCount = helpfulness;
  const newDate = date.substring(0, 10);
  const formattedDate = moment(newDate, 'YYYY-MM-DD').format('MMMM DD, YYYY');

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

  return (
    <div>
      <div className="body">
        {body}
      </div>
      <div className="photos">
        {photos ? photos.map((photo) => (
          <img src={photo.url} alt="" width="auto" height="150" />
        )) : null}
      </div>
      <div className="name">
        {name.toLowerCase() === 'seller' ? <b>{name}</b> : name}
      </div>
      <div className="date">
        {`, ${formattedDate} |`}
      </div>
      <div className="helpful">
        Helpful?
      </div>
      <div className="Yes" onClick={incrementHelpfulness}>
        {`Yes (${count})`}
      </div>
      <div className="Report" onClick={handleReport}>
        {report ? 'Reported' : 'Report'}
      </div>
    </div>
  );
};

export default AnswerItem;
