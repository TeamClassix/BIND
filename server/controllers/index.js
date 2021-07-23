const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
  process.stdout.write('Welcome to the API: \n');
  next();
});

// /api
router.use('/products', require('./products'));
// router.use('/reviews', require('./products'));
// router.use('/qa', require('./products'));
// router.use('/cart', require('./products'));
// router.use('/interactions', require('./products'));

module.exports = router;
