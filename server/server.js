require('dotenv').config({ path: 'server/.env' });
const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.listen(port, () => {
  process.stdout.write('Express server started.\nListening for requests on port: 5000.\n');
});

module.exports = app;
