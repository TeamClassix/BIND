import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// eslint-disable-next-line import/extensions, import/no-unresolved
import { RelatedProductsContext, AppContext } from '#contexts';
import PreviewList from './PreviewList';

const getRelatedProducts = async (id) => {
  try {
    const related = await axios({
      method: 'GET',
      url: `/api/products/${id}/related`,
    });
    return [null, related.data.data];
  } catch (e) {
    return [e];
  }
};

const createRequest = (id) => (
  axios({
    method: 'GET',
    url: `/api/products/${id}`,
  })
);

const RelatedProducts = () => {
  const [useRelatedState, setRelatedState] = useState([]);
  const [useOutfitState, setOutfitState] = useState([]);
  const { idState } = useContext(AppContext);
  const [id, setIdState] = idState;
  console.log(id, 'this is in relatedproducts')
  // const rpContext = useContext(RelatedProductsContext);

  useEffect(async () => {
    const [err, relatedIds] = await getRelatedProducts(id);
    if (err) return;
    const requests = relatedIds.map((relatedId) => createRequest(relatedId));
    try {
      const data = await axios.all(requests);
      const parsed = data.map((item) => item.data.data);
      const results = [];
      parsed.forEach((n) => {
        if (results.findIndex((item) => item.id === n.id) < 0) {
          results.push(n);
        }
      });
      setRelatedState(results);
    } catch (e) {
      console.log(e);
    }
    // pre-fetch and pass to containers based on results
    // const { name, id, default_price: price, category } = data;
  }, [id]);
  return (
    <RelatedProductsContext.Provider value={useRelatedState}>
      <PreviewList title="Related Products" list={useRelatedState} />
      <PreviewList title="Your Outfit" list={useOutfitState} />
    </RelatedProductsContext.Provider>
  );
};

export default RelatedProducts;
