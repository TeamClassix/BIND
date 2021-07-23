require('dotenv').config({ path: 'server/.env' });
const path = require('path');
const express = require('express');

const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));


app.use(express.json());

// process.env.GH_token


app.get('/cheese', (req, res) => {
  console.log(req);
  console.log(process.env.GH_token);

  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products', {

    headers: {
      Authorization: process.env.GH_TOKEN
    },
  })
    .then((response) => {
      // handle success
      // console.log(response, 'we should have things here');
      res.send(response.data);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })

})


app.get('/bees', (req, res) => {
  console.log(req.query.ID);

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

})


app.get('/dees', (req, res) => {
  console.log(process.env.GH_TOKEN, 'the token');
  console.log(req.query.ID, 'req.query.ID');

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
})




app.listen(5000, () => {
  console.log('listening on port 5000');
});