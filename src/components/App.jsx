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

const App = () => {
  return (
    <>
      <Header />
      <SiteMessage />
      <ProductOverview />
      <RelatedProducts />
      <QuestionsAnswers />
      <RatingsReviews />
      <Footer />
    </>
  )
}

export default App;