import React from 'react';
import styled from 'styled-components';

// Components
import Header from './Header/Header';
import SiteMessage from './SiteMessage/SiteMessage';
import ProductOverview from './ProductOverview/Overview';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import QuestionsAnswers from './QandA/QandA';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import Footer from './Footer/Footer';

const MainContainer = styled.div`
  width: 1180px;
  align-self: center;
  flex: 1 1 100%;
`;

const App = () => (
  <>
    <Header />
    <SiteMessage />
    <MainContainer>
      <ProductOverview />
      <RelatedProducts />
      <QuestionsAnswers />
      <RatingsReviews />
    </MainContainer>
    <Footer />
  </>
);

export default App;
