import React from 'react';
import QandAItem from './QandAItem'

class QandAContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        Q and A Container
        <QandAItem />
      </div>
    );
  }
}

export default QandAContainer;


// contains q and a item