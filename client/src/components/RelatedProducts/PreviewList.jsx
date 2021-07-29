import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { RelatedProductsContext, AppContext } from '#contexts';

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

const PreviewList = ({ title, list }) => {
  // /products/:product_id/related
  const { idState } = useContext(AppContext);
  const [id, setIdState] = idState;
  // const rpContext = useContext(RelatedProductsContext);

  useEffect(async () => {
    console.log(await getRelatedProducts(id));
  }, []);
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {list.map(item => <ItemPreview key={item.id} value={item} />)}
      </div>
    </div>
  );
};

export default PreviewList;
