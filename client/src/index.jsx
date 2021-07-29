/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js';
// import 'regenerator-runtime/runtime';
// eslint-disable-next-line import/no-unresolved
import App from '#components/App';

//time is added for debugging purposes
//use this to get a sense of time console.timeLog('null allstyle');

console.time('test');

ReactDOM.render(<App />, document.getElementById('app'));
