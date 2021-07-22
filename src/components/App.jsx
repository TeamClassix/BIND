import React from 'react';
import styled from 'styled-components';

// Components
import Header from './Header/Header.jsx';
import SiteMessage from './SiteMessage/SiteMessage.jsx';
import ProductOverview from './ProductOverview/Overview.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import QuestionsAnswers from './QandA/QandA.jsx';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import Footer from './Footer/Footer.jsx';

const MainContainer = styled.div`
  width: 1180px;
  align-self: center;
  flex: 1 1 100%;
`;

const App = () => {
  return (
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
  )
}

export default App;