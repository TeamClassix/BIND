const express = require('express');
// eslint-disable-next-line import/no-unresolved
const Models = require('#models');

const router = express.Router({ mergeParams: true });

router.use((req, res, next) => {
  process.stdout.write('Controller: /api/products\n');
  next();
});

/*
List Products
GET /products
Retrieves the list of products.

params: {
  page: {
    type: "integer",
    description: "Selects the page of results to return. Default 1."
  },
  count: {
    type: "integer",
    description: "Specifies how many results per page to return. Default 5."
  }
}
*/
router.get('/', (req, res, next) => {
  next();
});

/*
Product Information
GET /products/:product_id
Returns all product level information for a specified product id.

params: {
  product_id: {
    type: "integer",
    description: "Required ID of the Product requested"
  }
}
*/
router.get('/:product_id', (req, res, next) => {
  next();
});

/*
Product Styles
GET /products/:product_id/styles
Returns the all styles available for the given product.

params: {
  product_id: {
    type: "integer",
    description: "Required ID of the Product requested"
  }
}
*/
router.get('/:product_id/styles', (req, res, next) => {
  next();
});

/*
Related Products
GET /products/:product_id/related
Returns the id's of products related to the product specified.

params: {
  product_id: {
    type: "integer",
    description: "Required ID of the Product requested"
  }
}
*/
router.get('/:product_id/related', (req, res, next) => {
  next();
});

module.exports = router;
