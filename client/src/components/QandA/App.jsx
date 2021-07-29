import React from 'react';
import SearchBar from './SearchBar';
import QandAContainer from './QandAContainer';
import MoreQuestions from './MoreQuestions';
import AddQuestion from './AddQuestion';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>Questions and Answers</h1>
        <SearchBar />
        <QandAContainer />
        <MoreQuestions />
        <AddQuestion />
      </div>

    );
  }
}

export default App;

//contains search bar, q and a container, more questions, and add question
