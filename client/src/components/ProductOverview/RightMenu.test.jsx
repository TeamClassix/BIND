/**
 * @jest-environment jsdom
 */

 import 'regenerator-runtime/runtime';
 import React from 'react';
 import { render, screen, waitFor } from '@testing-library/react';
 const axios = require('axios');
 import { act } from 'react-dom/test-utils';

 import RightMenu from './RightMenu';

 jest.mock('axios');


 describe('RightMenu', () => {
   test('renders App component', async() => {
    axios.get.mockResolvedValue({
        "data": {
            "statusCode": 200,
            "message": "Success",
            "data": {
                "product_id": "25170",
                "ratings": {
                    "1": "1",
                    "2": "2",
                    "3": "1",
                    "4": "3",
                    "5": "1"
                },
                "recommended": {
                    "false": "4",
                    "true": "4"
                },
                "characteristics": {
                    "Fit": {
                        "id": 84513,
                        "value": "3.0000000000000000"
                    },
                    "Length": {
                        "id": 84514,
                        "value": "2.2500000000000000"
                    },
                    "Comfort": {
                        "id": 84515,
                        "value": "2.7500000000000000"
                    },
                    "Quality": {
                        "id": 84516,
                        "value": "2.6250000000000000"
                    }
                }
            }
        },
        "status": 200,
        "statusText": "OK",
        "headers": {
            "content-length": "382",
            "content-type": "application/json; charset=utf-8",
            "date": "Tue, 03 Aug 2021 22:29:51 GMT",
            "etag": "W/\"17e-iV+9GYuIYUKLi79sY1p8f49gPgk\"",
            "x-powered-by": "Express"
        },
        "config": {
            "url": "/api/reviews/meta?product_id=25170",
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
    })


    act(() => {

     render(<RightMenu

        currentZoom= {1}
        info= {25170}
        currentStyle= {{
            "style_id": 142841,
            "name": "Black",
            "original_price": "65.00",
            "sale_price": null,
            "default?": true,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                }
            ],
            "skus": {
                "828896": {
                    "quantity": 8,
                    "size": "XS"
                },
                "828897": {
                    "quantity": 16,
                    "size": "S"
                },
                "828898": {
                    "quantity": 17,
                    "size": "M"
                },
                "828899": {
                    "quantity": 10,
                    "size": "L"
                },
                "828900": {
                    "quantity": 15,
                    "size": "XL"
                },
                "828901": {
                    "quantity": 6,
                    "size": "XXL"
                }
            }
        }}
        allStyle = {{
            "product_id": "25170",
            "results": [
                {
                    "style_id": 142841,
                    "name": "Black",
                    "original_price": "65.00",
                    "sale_price": null,
                    "default?": true,
                    "photos": [
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                        }
                    ],
                    "skus": {
                        "828896": {
                            "quantity": 8,
                            "size": "XS"
                        },
                        "828897": {
                            "quantity": 16,
                            "size": "S"
                        },
                        "828898": {
                            "quantity": 17,
                            "size": "M"
                        },
                        "828899": {
                            "quantity": 10,
                            "size": "L"
                        },
                        "828900": {
                            "quantity": 15,
                            "size": "XL"
                        },
                        "828901": {
                            "quantity": 6,
                            "size": "XXL"
                        }
                    }
                },
                {
                    "style_id": 142842,
                    "name": "Olive Green",
                    "original_price": "65.00",
                    "sale_price": null,
                    "default?": false,
                    "photos": [
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                        }
                    ],
                    "skus": {
                        "828902": {
                            "quantity": 8,
                            "size": "XS"
                        },
                        "828903": {
                            "quantity": 16,
                            "size": "S"
                        },
                        "828904": {
                            "quantity": 17,
                            "size": "M"
                        },
                        "828905": {
                            "quantity": 10,
                            "size": "L"
                        },
                        "828906": {
                            "quantity": 15,
                            "size": "XL"
                        },
                        "828907": {
                            "quantity": 6,
                            "size": "XXL"
                        }
                    }
                },
                {
                    "style_id": 142843,
                    "name": "Grey",
                    "original_price": "65.00",
                    "sale_price": null,
                    "default?": false,
                    "photos": [
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                        }
                    ],
                    "skus": {
                        "828908": {
                            "quantity": 8,
                            "size": "XS"
                        },
                        "828909": {
                            "quantity": 16,
                            "size": "S"
                        },
                        "828910": {
                            "quantity": 17,
                            "size": "M"
                        },
                        "828911": {
                            "quantity": 10,
                            "size": "L"
                        },
                        "828912": {
                            "quantity": 15,
                            "size": "XL"
                        },
                        "828913": {
                            "quantity": 6,
                            "size": "XXL"
                        }
                    }
                },
                {
                    "style_id": 142844,
                    "name": "Tan",
                    "original_price": "65.00",
                    "sale_price": null,
                    "default?": false,
                    "photos": [
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                        }
                    ],
                    "skus": {
                        "828914": {
                            "quantity": 8,
                            "size": "XS"
                        },
                        "828915": {
                            "quantity": 16,
                            "size": "S"
                        },
                        "828916": {
                            "quantity": 17,
                            "size": "M"
                        },
                        "828917": {
                            "quantity": 10,
                            "size": "L"
                        },
                        "828918": {
                            "quantity": 15,
                            "size": "XL"
                        },
                        "828919": {
                            "quantity": 6,
                            "size": "XXL"
                        }
                    }
                },
                {
                    "style_id": 142845,
                    "name": "Red",
                    "original_price": "65.00",
                    "sale_price": null,
                    "default?": false,
                    "photos": [
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1970&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                        }
                    ],
                    "skus": {
                        "828920": {
                            "quantity": 8,
                            "size": "XS"
                        },
                        "828921": {
                            "quantity": 16,
                            "size": "S"
                        },
                        "828922": {
                            "quantity": 17,
                            "size": "M"
                        },
                        "828923": {
                            "quantity": 10,
                            "size": "L"
                        },
                        "828924": {
                            "quantity": 15,
                            "size": "XL"
                        },
                        "828925": {
                            "quantity": 6,
                            "size": "XXL"
                        }
                    }
                },
                {
                    "style_id": 142846,
                    "name": "Pinstripe",
                    "original_price": "65.00",
                    "sale_price": null,
                    "default?": false,
                    "photos": [
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                        }
                    ],
                    "skus": {
                        "828926": {
                            "quantity": 8,
                            "size": "XS"
                        },
                        "828927": {
                            "quantity": 16,
                            "size": "S"
                        },
                        "828928": {
                            "quantity": 17,
                            "size": "M"
                        },
                        "828929": {
                            "quantity": 10,
                            "size": "L"
                        },
                        "828930": {
                            "quantity": 15,
                            "size": "XL"
                        },
                        "828931": {
                            "quantity": 6,
                            "size": "XXL"
                        }
                    }
                },
                {
                    "style_id": 142847,
                    "name": "Khaki",
                    "original_price": "65.00",
                    "sale_price": null,
                    "default?": false,
                    "photos": [
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                        }
                    ],
                    "skus": {
                        "828932": {
                            "quantity": 8,
                            "size": "XS"
                        },
                        "828933": {
                            "quantity": 16,
                            "size": "S"
                        },
                        "828934": {
                            "quantity": 17,
                            "size": "M"
                        },
                        "828935": {
                            "quantity": 10,
                            "size": "L"
                        },
                        "828936": {
                            "quantity": 15,
                            "size": "XL"
                        },
                        "828937": {
                            "quantity": 6,
                            "size": "XXL"
                        }
                    }
                },
                {
                    "style_id": 142848,
                    "name": "Plaid",
                    "original_price": "65.00",
                    "sale_price": null,
                    "default?": false,
                    "photos": [
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                        }
                    ],
                    "skus": {
                        "828938": {
                            "quantity": 8,
                            "size": "XS"
                        },
                        "828939": {
                            "quantity": 16,
                            "size": "S"
                        },
                        "828940": {
                            "quantity": 17,
                            "size": "M"
                        },
                        "828941": {
                            "quantity": 10,
                            "size": "L"
                        },
                        "828942": {
                            "quantity": 15,
                            "size": "XL"
                        },
                        "828943": {
                            "quantity": 6,
                            "size": "XXL"
                        }
                    }
                },
                {
                    "style_id": 142849,
                    "name": "White",
                    "original_price": "65.00",
                    "sale_price": null,
                    "default?": false,
                    "photos": [
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                        }
                    ],
                    "skus": {
                        "828944": {
                            "quantity": 8,
                            "size": "XS"
                        },
                        "828945": {
                            "quantity": 16,
                            "size": "S"
                        },
                        "828946": {
                            "quantity": 17,
                            "size": "M"
                        },
                        "828947": {
                            "quantity": 10,
                            "size": "L"
                        },
                        "828948": {
                            "quantity": 15,
                            "size": "XL"
                        },
                        "828949": {
                            "quantity": 6,
                            "size": "XXL"
                        }
                    }
                }
            ]
        }}

        upper= {{
            "id": 25170,
            "campus": "hr-sfo",
            "name": "Slacker's Slacks",
            "slogan": "Comfortable for everything, or nothing",
            "description": "I'll tell you how great they are after I nap for a bit.",
            "category": "Pants",
            "default_price": "65.00",
            "created_at": "2021-06-02T16:53:33.359Z",
            "updated_at": "2021-06-02T16:53:33.359Z",
            "features": [
                {
                    "feature": "Fabric",
                    "value": "99% Cotton 1% Elastic"
                },
                {
                    "feature": "Cut",
                    "value": "Loose"
                }
            ]
        }}
     />);
    });

    await new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('inside settimeout');
          screen.debug();
          resolve();
        }, 4500);
      });


   });
 });

