require('dotenv').config({ path: 'server/.env' });
const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO: Implement rate limiting

// Handle/proxy requests to the API
app.use('/api', require('./controllers'));

// Serve static files from client/dist
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

// Final catch-all, handle with React
app.get('/:slug/:id([0-9]{3,7})', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

// No matching path found. Throw 404 error.
app.use((req, res) => {
  res.status(404).json({
    message: 'Not found',
    method: req.method,
    path: req.url,
  });
});

// Handles status codes, data passing, response closures.
app.use(require('./controllers/responseHandler'));

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
    // console.log(e);
    // console.log(Object.keys(e));
    process.stderr.write(`\x1b[93m${e.stack}\x1b[39m\n`);
  }
  process.stdout.write('\x1b[0m');
});

module.exports = app;
