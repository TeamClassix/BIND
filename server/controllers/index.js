const express = require('express');
const axios = require('axios');

const router = express.Router();

// /api
// Treat API as 1:1 proxy
router.use(async (req, res, next) => {
  try {
    const result = await axios({
      method: req.method,
      headers: {
        Authorization: process.env.GH_TOKEN,
      },
      params: req.query,
      data: req.body,
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo${req._parsedUrl.pathname}`,
    });
    next([200, result.data]);
  } catch (e) {
    console.log(e);
    next([e.response.status, e.response.data]);
  }
});

// router.use('/products', require('./products'));
// router.use('/reviews', require('./products'));
// router.use('/qa', require('./products'));
// router.use('/cart', require('./products'));
// router.use('/interactions', require('./products'));

module.exports = router;
