require('dotenv').config({ path: 'server/.env' });
const path = require('path');
const express = require('express');

const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.use(express.json());

app.get('/bees', (req, res) => {
  // get a specific product
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.query.ID}`, {
    headers: {
      Authorization: process.env.GH_TOKEN
    },
  })
    .then((response) => {
      // handle success
      // console.log(response.data, 'we should have things here');
      res.send(response.data);
    });
});

app.get('/dees', (req, res) => {
  // get all styles
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.query.ID}/styles`, {
    headers: {
      Authorization: process.env.GH_TOKEN
    },
  })
    .then((response) => {
      // handle success
      console.log(response.data, 'we should have styles here');
      res.send(response.data);
    });
});
// end product overview

const port = process.env.PORT || 3000;

app.use('/api', require('./controllers'));

app.use((req, res) => {
  res.status(404).json({
    message: 'Not found',
    path: req.url,
  });
});

// Fun fact! You can style your Node.JS outputs using the following escapes:
// Bold: \x1b[1mSome text goes here\x1b[0m
// Yellow: \x1b[93mSome text goes here\x1b[30m
app.listen(port, () => {
  process.stdout.write('\x1b[32m\x1b[1mExpress server successfully started.\x1b[0m\x1b[89m\n');
  process.stdout.write(`\x1b[34mListening for requests on port ${port}...\x1b[89m\n\n`);
  process.stdout.write('\x1b[0m');
});

process.on('uncaughtException', (e) => {
  process.stdout.write('\x1b[31m\x1b[1mThe following error has occurred:\x1b[0m\x1b[89m\n');
  if (e.errno === -48) {
    process.stdout.write(`\x1b[93m> Express tried to listen on port ${e.port}, but it's already in use.\x1b[30m\n`);
    process.stdout.write('\x1b[93m> Please specify a different port, or terminate any processes \nlistening on the port.\x1b[39m\n\n');
  } else {
    process.stdout.write(`\x1b[93m${JSON.stringify(e)}\x1b[39m\n`);
  }
  process.stdout.write('\x1b[0m');
});

module.exports = app;
