import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
// Components
import Header from './Header/Header';
import SiteMessage from './SiteMessage/SiteMessage';
import Footer from './Footer/Footer';
import ProductPage from './ProductPage';
import LandingPage from './LandingPage/LandingPage';
// eslint-disable-next-line import/no-unresolved
import { AppContext } from '#contexts';

const MainContainer = styled.div`
  width: 1180px;
  align-self: center;
  flex: 1 1 100%;
`;

const App = () => {
  const idState = useState(null);
  const appState = useState({
    loading: true,
  });
  const errState = useState(null);
  return (
    <Router>
      <AppContext.Provider
        value={{
          appState,
          errState,
          idState,
        }}
      >
        <Header />
        <SiteMessage />
        <Switch>
          <Route path="/:slug/:id([0-9]{3,7})">
            <ProductPage />
          </Route>
          <Route path="/">
            <MainContainer>
              <LandingPage />
              <Link to="/someslug/25167">Go To Sample Page</Link>
            </MainContainer>
          </Route>
        </Switch>
        <Footer />
      </AppContext.Provider>
    </Router>
  );
};

export default App;
