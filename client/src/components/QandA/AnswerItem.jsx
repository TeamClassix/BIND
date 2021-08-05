import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';

const Author = styled.div`
  display: flex;
  flex-direction: row;
  font-size: x-small;
  margin-top: 2px;
`;

const Image = styled.img`
  border: 1px solid #525252;
  margin: 5px;
  width: auto;
  height: 150px;
`;

const Answer = styled.div`
  position: relative;
  left: 21px;
  top: -19px;
  height: auto;
  font-size: 15px;
`;

const Click = styled.div`
  cursor: pointer;
  &:hover{
    text-decoration: underline
  }
`;

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
    <Answer>
      <div className="body">
        {body}
      </div>
      <div className="photos">
        {photos ? photos.map((photo) => (
          <Image src={photo.url} alt="" />
        )) : null}
      </div>
      <Author>
        <div className="name">
          by: {name.toLowerCase() === 'seller' ? <b>{name}</b> : name}
        </div>
        <div className="date">
          {`, ${formattedDate} |`}
        </div>
        <div className="helpful">
          &nbsp;Helpful?&nbsp;
        </div>
        <Click className="Yes" onClick={incrementHelpfulness}>
          {`Yes (${count}) |`}
          &nbsp;
        </Click>
        <Click className="Report" onClick={handleReport}>
          {report ? 'Reported' : 'Report'}
        </Click>
      </Author>
      <br />
    </Answer>
  );
};

export default AnswerItem;
