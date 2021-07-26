import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import ProductOverview from './ProductOverview/Overview';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import QuestionsAnswers from './QandA/App';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import ErrorPage from './ErrorPage';
// import { AppContext } from '#contexts';

const ContainerDiv = styled.div`
  width: 1180px;
  align-self: center;
  flex: 1 1 100%;
`;

const getProductInfo = async (id) => {
  try {
    const productInfo = await axios(`/api/products/${id}`);
    return [null, productInfo];
  } catch (e) {
    return [e.response.status];
  }
};
    // setErrState({
    //   statusCode: e.response.status,
    // });
  // }
  // console.log(useAppState);
  // setAppState({
  //   ...useAppState,
  //   loading: false,
  // });


const ProductPage = ({ appState, errState }) => {
  const [useAppState, setAppState] = appState;
  const [useErrState, setErrState] = errState;
  const { id } = useParams();
  useEffect(async () => {
    const productInfo = await getProductInfo(id);
    setAppState({
      ...useAppState,
      loading: false,
      id,
      productInfo: productInfo[1],
    });
    if (productInfo[0]) {
      setErrState({ statusCode: productInfo[0] });
    }
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
        !useAppState.loading && (useErrState.statusCode
          ? <ErrorPage setErrState={setErrState} statusCode={useErrState.statusCode} />
          : (
            <>
              <ProductOverview />
              <RelatedProducts />
              <QuestionsAnswers />
              <RatingsReviews />
            </>
          ))
      }
    </ContainerDiv>
  );
};

export default ProductPage;