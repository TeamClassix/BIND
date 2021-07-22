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

// import React from 'react';

// function App() {
//   const [search, setSearch] = React.useState('');

//   function handleChange(event) {
//     setSearch(event.target.value);
//   }

//   return (
//     <div>
//       <Search value={search} onChange={handleChange}>
//         Search:
//       </Search>

//       <p>Searches for {search ? search : '...'}</p>
//     </div>
//   );
// }

// function Search({ value, onChange, children }) {
//   return (
//     <div>
//       <label htmlFor="search">{children}</label>
//       <input
//         id="search"
//         type="text"
//         value={value}
//         onChange={onChange}
//       />
//     </div>
//   );
// }

// export default App;
