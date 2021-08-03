/**
 * @jest-environment jsdom
 */

import 'regenerator-runtime/runtime';
import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen, waitFor, getByText } from '@testing-library/react';
import Overview from './Overview.jsx';
const axios = require('axios');
import { RelatedProductsContext, AppContext } from '../../contexts/Contexts.jsx';


jest.mock('axios');



describe('Overview', () => {
  test('renders App component', async () => {

    // const idState1 = useState(15111);

    act(() => {

      axios.get.mockResolvedValue({
        "data": {
          "statusCode": 200,
          "message": "Success",
          "data": {
            "id": 25169,
            "campus": "hr-sfo",
            "name": "Morning Joggers",
            "slogan": "Make yourself a morning person",
            "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
            "category": "Pants",
            "default_price": "40.00",
            "created_at": "2021-06-02T16:53:33.359Z",
            "updated_at": "2021-06-02T16:53:33.359Z",
            "features": [
              {
                "feature": "Fabric",
                "value": "100% Cotton"
              },
              {
                "feature": "Cut",
                "value": "Skinny"
              }
            ]
          }
        },
        "status": 200,
        "statusText": "OK",
        "headers": {
          "content-length": "480",
          "content-type": "application/json; charset=utf-8",
          "date": "Tue, 03 Aug 2021 16:47:00 GMT",
          "etag": "W/\"1e0-MfVN/sWIOjmoEZQjSnyjDmE3gbk\"",
          "x-powered-by": "Express"
        },
        "config": {
          "url": "/api/products/25169",
          "method": "get",
          "headers": {
            "Accept": "application/json, text/plain, */*"
          },
          "transformRequest": [
            null
          ],
          "transformResponse": [
            null
          ],
          "timeout": 0,
          "xsrfCookieName": "XSRF-TOKEN",
          "xsrfHeaderName": "X-XSRF-TOKEN",
          "maxContentLength": -1,
          "maxBodyLength": -1
        },
        "request": {}
      });


      const idState = 15555
      const otherState = 55555;

      render(
        <>
          <AppContext.Provider
            value={{
              idState, otherState,
            }}
          >
            <Overview productId={'25167'} />
          </AppContext.Provider>
        </>
      );
    });

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('inside settimeout');
        screen.debug();
        resolve();
      }, 4500);
    });

    jest.resetAllMocks()
  });
});

