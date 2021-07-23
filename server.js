const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static('dist'));

// app.get('/users/:userId/books/:bookId', function (req, res) {
//   res.send(req.params)
// })
app.use(express.json());


app.get('/cheese', (req, res) => {
  console.log(req);

  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products', {

    headers: {
      Authorization: "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"
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
      Authorization: "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"
    },
  })
    .then((response) => {
      // handle success
      // console.log(response.data, 'we should have things here');
      res.send(response.data);
    });

})


app.get('/dees', (req, res) => {
  console.log(req.query.ID, 'req.query.ID');

  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.query.ID}/styles`, {

    headers: {
      Authorization: "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"
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