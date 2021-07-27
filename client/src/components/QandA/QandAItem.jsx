import React from 'react';
import QuestionItem from './QuestionItem';
import AnswerItem from './AnswerItem';

class QandAItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        Q and A Item
        <QuestionItem />
        <AnswerItem />
      </div>
    );
  }
}

export default QandAItem;

// contains question item, answer item