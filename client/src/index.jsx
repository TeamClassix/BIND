/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-unresolved
// import App from './components/App.jsx';
import App from '#components/App';
console.time('test');

ReactDOM.render(<App />, document.getElementById('app'));
