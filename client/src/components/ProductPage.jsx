import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import ProductOverview from './ProductOverview/Overview';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import QuestionsAnswers from './QandA/App';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import ErrorPage from './ErrorPage';
import { AppContext } from '#contexts';

const ContainerDiv = styled.div`
  width: 1180px;
  align-self: center;
  flex: 1 1 100%;
`;

const getProductInfo = async (id) => {
  try {
    const productInfo = await axios(`/api/products/${id}`);
    return [null, productInfo.data.data];
  } catch (e) {
    return [e.response.status];
  }
};

const ProductPage = () => {
  const { appState, errState, idState } = useContext(AppContext);
  console.log({appState, errState, idState})

  const [useAppState, setAppState] = appState;
  const [useErrState, setErrState] = errState;
  const [useIdState, setIdState] = idState;
  const { id } = useParams();
  useEffect(async () => {
    const productInfo = await getProductInfo(id);
    setIdState(Number(id));
    setAppState({
      ...useAppState,
      loading: false,
      productInfo: productInfo[1],
    });

    if (productInfo[0]) {
      setErrState({ statusCode: productInfo[0] });
    }
  }, []);
  useEffect(() => () => {
    setAppState({
      ...useAppState,
      loading: true,
    });
  }, []);

  return (
    <ContainerDiv>
      {
        useAppState.loading
        && (
          <div>Loading...</div>
        )
      }
      {
        !useAppState.loading && (useErrState
          ? <ErrorPage setErrState={setErrState} statusCode={useErrState} />
          : (
            <>
              <ProductOverview productId={id} />
              <RelatedProducts />
              <QuestionsAnswers productId={id} />
              <RatingsReviews productId={id} />
            </>
          ))
      }
    </ContainerDiv>
  );
};

export default ProductPage;
