const express = require('express');
const axios = require('axios');

const router = express.Router();

// /api
// Treat API as 1:1 proxy
router.use(async (req, res, next) => {
  // what is this.  This is object destructing
  // but also renaming the object to not have an underscore
  const { _parsedUrl: parsedUrl } = req;
  try {
    // await halts the rest of the function until the promise is resolved (ie does not go to next)
    const result = await axios({
      method: req.method,
      headers: {
        Authorization: process.env.GH_TOKEN,
      },
      params: req.query,
      data: req.body,
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo${parsedUrl.pathname}`,
    });
    next([200, result.data]);
  } catch (e) {
    // console.log(e);
    // process.stderr.write(e.message);
    // process.stderr.write('\n');
    // e.stack
    process.stderr.write(e.stack);
    process.stderr.write('\n\n');
    next([e.response.status, e.response.data]);
  }
});

// router.use('/products', require('./products'));
// router.use('/reviews', require('./products'));
// router.use('/qa', require('./products'));
// router.use('/cart', require('./products'));
// router.use('/interactions', require('./products'));

module.exports = router;
